import { HeroSection } from "@/src/components/landing/HeroSection";
import { HowItWorksSection } from "@/src/components/landing/HowItWorksSection";
import { TargetAudienceSection } from "@/src/components/landing/TargetAudienceSection";

export function LandingPageContent() {
  return (
    <div className="py-5 bg-background">
      <HeroSection />
      <HowItWorksSection />
      <TargetAudienceSection />
    </div>
  );
}
