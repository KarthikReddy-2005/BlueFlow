export function isValidExternalUrl(url?: string): url is string {
  if (!url) {
    return false;
  }

  if (url === "#") {
    return false;
  }

  try {
    const parsedUrl = new URL(url);

    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    return false;
  }
}
