const fallbackSiteUrl = "http://localhost:3000";

export function getSiteUrl(): URL {
  const value = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

  try {
    return new URL(value);
  } catch {
    return new URL(fallbackSiteUrl);
  }
}

export function isIndexingAllowed(): boolean {
  // This client presentation contains drafts. Indexing needs a separate launch review.
  return false;
}
