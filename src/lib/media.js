const DEFAULT_MEDIA_BASE_URL = "https://media.growplus.site";

export const MEDIA_BASE_URL =
  import.meta.env.VITE_MEDIA_BASE_URL || DEFAULT_MEDIA_BASE_URL;

export function mediaUrl(key) {
  if (!key) {
    return "";
  }

  if (/^https?:\/\//i.test(key) || key.startsWith("/")) {
    return key;
  }

  const encodedKey = key
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");

  return `${MEDIA_BASE_URL.replace(/\/$/, "")}/${encodedKey}`;
}
