export function mediaUrl(src) {
    if (!src) return src;

    const baseUrl = (import.meta.env.VITE_MEDIA_BASE_URL || "https://media.growplus.site").replace(/\/$/, "");

    if (src.startsWith("/")) {
        return `${baseUrl}${encodeURI(src)}`;
    }

    if (!/^https?:\/\//.test(src)) {
        return `${baseUrl}/${encodeURI(src)}`;
    }

    return src;
}
