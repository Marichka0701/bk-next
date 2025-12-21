import { TargetAudienceCard } from "@/src/components/landing/TargetAudienceCard";
import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { AnimatedStaggerContainer } from "@/src/components/shared/AnimatedStaggerContainer";
import { Container } from "@/src/components/shared/Container";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { LandingPage } from "@/src/lib/sanity/types";

export function TargetAudienceSection({
  title,
  audiences = [],
}: LandingPage["targetAudienceSection"]) {
  const audiencesToMap = Array.isArray(audiences) ? audiences : [];

  if (audiencesToMap.length === 0) return null;

  return (
    <Container
      as="section"
      className="py-7.5 md:py-12.5"
    >
      <Container
        variant="inner"
        className="flex flex-col justify-center items-center gap-10 md:gap-12"
      >
        <AnimatedContainer preset="fadeUp">
          <Headline
            as="h2"
            variant="h2"
            className="text-secondary-foreground"
          >
            {title}
          </Headline>
        </AnimatedContainer>

        <AnimatedStaggerContainer
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.15}
        >
          {audiencesToMap.map((item, index) => (
            <TargetAudienceCard
              key={index}
              item={item}
            />
          ))}
        </AnimatedStaggerContainer>
      </Container>
    </Container>
  );
}
