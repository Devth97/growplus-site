const LOCAL_MEDIA_VERSION = "20260522-restore";

export function mediaUrl(src) {
    if (!src || !src.startsWith("/")) return src;

    const separator = src.includes("?") ? "&" : "?";
    return `${src}${separator}v=${LOCAL_MEDIA_VERSION}`;
}
