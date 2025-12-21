export const APP_CONFIG = {
  // API
  SK_API_ENDPOINT: process.env.SK_API_ENDPOINT || "",
  SK_API_KEY: process.env.SK_API_KEY || "",

  // Sanity CMS
  SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  SANITY_USE_CDN: process.env.NODE_ENV === "production",
};
