export const CACHE_KEYS = {
  FLIGHTS: (query) => `flights:${JSON.stringify(query)}`,
};