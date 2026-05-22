import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import fs from "fs/promises";
import path from "path";

const CLOUDINARY_HOST = "res.cloudinary.com";
const CLOUDINARY_CLOUD_NAME = "daqrgnykj";
const SOURCE_FILES = [
  "src/data/clients.js",
  "src/components/Hero.jsx",
  "src/components/IntroSplash.jsx",
];
const MANIFEST_FILE = "scripts/cloudinary-assets.json";
const CACHE_CONTROL = "public, max-age=31536000, immutable";

const MIME_TYPES = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mov": "video/quicktime",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".webm": "video/webm",
  ".webp": "image/webp",
};

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function cloudinaryUrlToR2Key(rawUrl) {
  const url = new URL(rawUrl);

  if (
    url.hostname !== CLOUDINARY_HOST ||
    !url.pathname.startsWith(`/${CLOUDINARY_CLOUD_NAME}/`)
  ) {
    return null;
  }

  const parts = url.pathname.split("/").filter(Boolean);
  const uploadIndex = parts.indexOf("upload");

  if (uploadIndex === -1) {
    return null;
  }

  const growplusIndex = parts.findIndex(
    (part, index) => index > uploadIndex && decodeURIComponent(part) === "growplus"
  );

  if (growplusIndex === -1) {
    return null;
  }

  return parts.slice(growplusIndex).map(decodeURIComponent).join("/");
}

async function collectCloudinaryAssets() {
  const urls = new Map();

  try {
    const manifest = JSON.parse(
      await fs.readFile(path.join(process.cwd(), MANIFEST_FILE), "utf8")
    );

    for (const asset of manifest) {
      if (asset.url && asset.key) {
        urls.set(asset.key, asset);
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  const urlPattern =
    /https:\/\/res\.cloudinary\.com\/daqrgnykj\/(?:image|video)\/upload\/[^"'\s)]+/g;

  for (const file of SOURCE_FILES) {
    const content = await fs.readFile(path.join(process.cwd(), file), "utf8");
    for (const match of content.matchAll(urlPattern)) {
      const url = match[0];
      const key = cloudinaryUrlToR2Key(url);
      if (key) {
        urls.set(key, { url, key });
      }
    }
  }

  return [...urls.values()];
}

function contentTypeForKey(key) {
  return MIME_TYPES[path.extname(key).toLowerCase()] || "application/octet-stream";
}

async function fetchAsset(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Download failed ${response.status} ${response.statusText}: ${url}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function main() {
  const accountId = requiredEnv("R2_ACCOUNT_ID");
  const bucket = requiredEnv("R2_BUCKET");
  const accessKeyId = requiredEnv("R2_ACCESS_KEY_ID");
  const secretAccessKey = requiredEnv("R2_SECRET_ACCESS_KEY");

  const client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const assets = await collectCloudinaryAssets();

  if (assets.length === 0) {
    console.log("No Cloudinary assets found in source files.");
    return;
  }

  console.log(`Found ${assets.length} Cloudinary assets to migrate.`);

  for (const [index, asset] of assets.entries()) {
    console.log(`[${index + 1}/${assets.length}] ${asset.key}`);
    const body = await fetchAsset(asset.url);

    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: asset.key,
        Body: body,
        ContentType: contentTypeForKey(asset.key),
        CacheControl: CACHE_CONTROL,
      })
    );
  }

  console.log("R2 migration upload complete.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
