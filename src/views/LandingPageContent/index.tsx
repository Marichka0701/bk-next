import { FundedProjectsSection } from "@/src/components/landing/FundedProjectsSection";
import { HeroSection } from "@/src/components/landing/HeroSection";
import { HowItWorksSection } from "@/src/components/landing/HowItWorksSection";
import { OurExpertiseSection } from "@/src/components/landing/OurExpertiseSection";
import { TargetAudienceSection } from "@/src/components/landing/TargetAudienceSection";
import { LandingPage } from "@/src/lib/sanity/types";

interface Props {
  landingContent: LandingPage;
}

export function LandingPageContent({ landingContent }: Props) {
  return (
    <div className="md:py-5 space-y-8">
      <HeroSection {...landingContent.heroSection} />
      <HowItWorksSection {...landingContent.howItWorksSection} />
      <TargetAudienceSection {...landingContent.targetAudienceSection} />
      <OurExpertiseSection {...landingContent.experienceSection} />
      <FundedProjectsSection {...landingContent.projectsSection} />
    </div>
  );
}
