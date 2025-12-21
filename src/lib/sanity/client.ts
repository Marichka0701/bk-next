import { sanityConfig } from "@/src/lib/sanity/config";
import { createClient } from "next-sanity";

export const client = createClient(sanityConfig);

export const clientWithToken = createClient({
  ...sanityConfig,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  perspective: "published",
});

interface SanityFetchOptions {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number | false;
}

export async function sanityFetch<T = unknown>({
  query,
  params = {},
  revalidate = 60,
}: SanityFetchOptions): Promise<T> {
  return client.fetch<T>(query, params, {
    next: { revalidate },
  });
}
