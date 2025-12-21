import { sanityFetch } from "@/src/lib/sanity/client";
import { landingPageQuery } from "@/src/lib/sanity/queries";
import { LandingPage as LandingPageType } from "@/src/lib/sanity/types";
import { LandingPageContent } from "@/src/views/LandingPageContent";

export default async function LandingPage() {
  const landingContent = await sanityFetch<LandingPageType>({ query: landingPageQuery });

  return <LandingPageContent landingContent={landingContent} />;
}
