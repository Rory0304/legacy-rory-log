/**
 * Get fetch-policy to handle preview mode and SSR request
 * @param preview
 */
export const getFetchPolicy = (preview: boolean) => {
  return typeof window === "undefined" || preview
    ? "network-only"
    : "cache-first";
};
