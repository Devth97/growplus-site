import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "src");
const PUBLIC_DIR = path.join(ROOT, "public");
const REPORT_PATH = path.join(ROOT, "scripts", "r2-upload-report.json");
const CLOUDINARY_RE = /https:\/\/res\.cloudinary\.com\/daqrgnykj\/(?:image|video)\/upload\/[^"'`\s)]+/g;
const MEDIA_EXTENSIONS = new Set([
    ".avif",
    ".gif",
    ".ico",
    ".jpeg",
    ".jpg",
    ".m4v",
    ".mov",
    ".mp4",
    ".png",
    ".svg",
    ".webm",
    ".webp",
]);

const contentTypes = {
    ".avif": "image/avif",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".m4v": "video/mp4",
    ".mov": "video/quicktime",
    ".mp4": "video/mp4",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webm": "video/webm",
    ".webp": "image/webp",
};

function requiredEnv(name) {
    const value = process.env[name];
    if (!value) throw new Error(`${name} is required`);
    return value;
}

function toPosix(value) {
    return value.split(path.sep).join("/");
}

function cloudinaryObjectKey(url) {
    const parsed = new URL(url);
    const segments = parsed.pathname.split("/").filter(Boolean);
    const uploadIndex = segments.indexOf("upload");
    const afterUpload = segments.slice(uploadIndex + 1);
    const growplusIndex = afterUpload.findIndex((segment) => decodeURIComponent(segment) === "growplus");

    const keySegments = growplusIndex >= 0
        ? afterUpload.slice(growplusIndex)
        : ["cloudinary", ...afterUpload.filter((segment) => !segment.includes(","))];

    return keySegments.map((segment) => decodeURIComponent(segment)).join("/");
}

async function walkFiles(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...await walkFiles(fullPath));
        } else {
            files.push(fullPath);
        }
    }

    return files;
}

async function scanCloudinaryUrls() {
    const files = (await walkFiles(SRC_DIR)).filter((file) => /\.(js|jsx|ts|tsx)$/.test(file));
    const urls = new Set();

    for (const file of files) {
        const content = await fs.readFile(file, "utf8");
        for (const match of content.matchAll(CLOUDINARY_RE)) {
            urls.add(match[0]);
        }
    }

    return [...urls].sort();
}

async function publicMediaFiles() {
    const files = await walkFiles(PUBLIC_DIR);
    return files
        .filter((file) => MEDIA_EXTENSIONS.has(path.extname(file).toLowerCase()))
        .map((file) => ({
            file,
            key: toPosix(path.relative(PUBLIC_DIR, file)),
            contentType: contentTypes[path.extname(file).toLowerCase()] || "application/octet-stream",
        }))
        .sort((a, b) => a.key.localeCompare(b.key));
}

async function bodyFromResponse(response) {
    if (!response.ok) {
        throw new Error(`Download failed ${response.status}: ${response.url}`);
    }

    return Buffer.from(await response.arrayBuffer());
}

async function putObject(client, bucket, key, body, contentType) {
    await client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: contentType || "application/octet-stream",
        CacheControl: "public, max-age=31536000, immutable",
    }));

    return createHash("sha256").update(body).digest("hex");
}

async function writeProgress(report) {
    await fs.writeFile(
        REPORT_PATH,
        `${JSON.stringify(report, null, 2)}\n`,
        "utf8"
    );
}

async function main() {
    const accountId = requiredEnv("R2_ACCOUNT_ID");
    const accessKeyId = requiredEnv("R2_ACCESS_KEY_ID");
    const secretAccessKey = requiredEnv("R2_SECRET_ACCESS_KEY");
    const bucket = requiredEnv("R2_BUCKET");

    const client = new S3Client({
        region: "auto",
        endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
        credentials: { accessKeyId, secretAccessKey },
    });

    const cloudinaryUrls = await scanCloudinaryUrls();
    const localFiles = await publicMediaFiles();
    const report = {
        cloudinary: [],
        local: [],
    };

    console.log(`Uploading ${cloudinaryUrls.length} Cloudinary assets...`);
    for (const [index, url] of cloudinaryUrls.entries()) {
        const key = cloudinaryObjectKey(url);
        console.log(`[cloudinary ${index + 1}/${cloudinaryUrls.length}] downloading ${url}`);
        const response = await fetch(url);
        const body = await bodyFromResponse(response);
        const contentType = response.headers.get("content-type")?.split(";")[0] || contentTypes[path.extname(key).toLowerCase()];
        const sha256 = await putObject(client, bucket, key, body, contentType);

        report.cloudinary.push({ url, key, contentType, bytes: body.length, sha256 });
        await writeProgress(report);
        console.log(`cloudinary -> ${key} (${body.length} bytes)`);
    }

    console.log(`Uploading ${localFiles.length} public media files...`);
    for (const [index, asset] of localFiles.entries()) {
        console.log(`[public ${index + 1}/${localFiles.length}] reading ${asset.key}`);
        const body = await fs.readFile(asset.file);
        const sha256 = await putObject(client, bucket, asset.key, body, asset.contentType);
        report.local.push({ key: asset.key, contentType: asset.contentType, bytes: body.length, sha256 });
        await writeProgress(report);
        console.log(`public -> ${asset.key} (${body.length} bytes)`);
    }

    await writeProgress(report);

    console.log(`Report written to scripts/r2-upload-report.json`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
