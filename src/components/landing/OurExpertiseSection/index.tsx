"use client";

import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { Button } from "@/src/components/shared/Button";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { useContactFormScroll } from "@/src/hooks/useContactFormScroll";
import { urlForImage } from "@/src/lib/sanity/image";
import { LandingPage } from "@/src/lib/sanity/types";
import { ArrowRight } from "lucide-react";
import { PortableText } from "next-sanity";
import { Image } from "next-sanity/image";

export function OurExpertiseSection({
  title,
  content,
  image,
  testimonial,
  ctaButton,
}: LandingPage["experienceSection"]) {
  const scrollToForm = useContactFormScroll();

  if (!title && !content) return null;

  return (
    <Container
      as="section"
      className="relative bg-brand-primary md:rounded-xl overflow-hidden"
    >
      {/* desktop pattern bg */}
      <AnimatedContainer
        preset="scale"
        duration={1}
        className="absolute inset-y-0 right-0 h-full w-1/3 bg-cover bg-repeat bg-right hidden md:block"
        style={{ backgroundImage: "url('/pattern-bg/our-expertise.webp')" }}
      />

      {/* mobile pattern bg */}
      <AnimatedContainer
        preset="scale"
        duration={1}
        className="absolute inset-y-0 right-0 w-2/5 bg-cover bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/pattern-bg/our-expertise-mobile.webp')" }}
      />

      <Container
        variant="inner"
        className="relative py-12.5 md:py-18 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-32 z-10"
      >
        {image && (
          <Image
            src={urlForImage(image).url()}
            alt={image.alt || "Our expertise image bg"}
            width={450}
            height={600}
            draggable={false}
            className="w-full md:w-[350px] lg:w-[450px] h-fit rounded-lg"
          />
        )}

        <div>
          <div className="flex flex-col gap-7.5">
            {title && (
              <AnimatedContainer
                preset="fadeUp"
                delay={0.2}
                duration={0.6}
              >
                <Headline
                  as="h2"
                  variant="h2"
                >
                  {title}
                </Headline>
              </AnimatedContainer>
            )}

            {content && content.length > 0 && (
              <AnimatedContainer
                preset="fadeUp"
                delay={0.35}
                duration={0.6}
                className="flex flex-col gap-4"
              >
                <PortableText
                  value={content}
                  components={{
                    block: {
                      normal: ({ children }) => <BodyText>{children}</BodyText>,
                    },
                  }}
                />
              </AnimatedContainer>
            )}

            {/* Testimonial */}
            {testimonial && (
              <AnimatedContainer
                preset="fadeUp"
                delay={0.8}
                duration={0.6}
                className="flex flex-col gap-2.5 mt-4"
              >
                {testimonial.authorName && (
                  <Headline
                    as="h3"
                    variant="h3"
                  >
                    {testimonial.authorName}
                  </Headline>
                )}
                {testimonial.authorPosition && (
                  <BodyText className="text-gray-500">{testimonial.authorPosition}</BodyText>
                )}
              </AnimatedContainer>
            )}
          </div>

          {/* CTA Button */}
          {ctaButton && (
            <AnimatedContainer
              preset="fadeUp"
              delay={0.95}
              duration={0.5}
            >
              <Button
                variant="secondary"
                onClick={scrollToForm}
                className="mt-10 max-w-none md:max-w-xs flex items-center justify-between group"
              >
                {/* empty div for spacing */}
                <div className="size-5 shrink-0" />
                {ctaButton}
                <ArrowRight
                  size={20}
                  className="text-foreground transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </AnimatedContainer>
          )}
        </div>
      </Container>
    </Container>
  );
}
