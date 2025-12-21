"use client";

import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { Button } from "@/src/components/shared/Button";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { BlogPage } from "@/src/lib/sanity/types";
import { ArrowRight, Mail } from "lucide-react";

export function NewsletterSection({
  badge,
  title,
  description,
  inputPlaceholder,
  buttonText,
  disclaimer,
}: BlogPage["newsletterSection"]) {
  return (
    <Container
      as="section"
      className="py-12.5"
    >
      <Container
        variant="inner"
        className="md:p-0"
      >
        <div className="bg-gray-100 rounded-3xl p-6 md:p-12 shadow-sm border border-gray-200 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-brand-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-brand-primary/10 rounded-full blur-2xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            <AnimatedContainer
              preset="fadeUp"
              duration={0.7}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 bg-gray-500/50 px-4 py-2 rounded-full w-fit text-base text-secondary-foreground">
                <Mail className="size-4 shrink-0 text-secondary-foreground" />
                <BodyText
                  variant="14"
                  className="text-secondary-foreground!"
                >
                  {badge}
                </BodyText>
              </div>

              <Headline
                as="h2"
                className="text-secondary-foreground text-3xl md:text-4xl"
              >
                {title}
              </Headline>

              <BodyText className="text-gray-600!">{description}</BodyText>
            </AnimatedContainer>

            <AnimatedContainer
              preset="fadeLeft"
              delay={0.2}
              duration={0.7}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder={inputPlaceholder}
                    className="w-full bg-gray-100 border border-border rounded-xl py-2 pl-4 pr-12 min-h-12 text-secondary-foreground outline-none placeholder:text-gray-600"
                  />
                </div>

                <Button
                  variant="secondary"
                  className="py-3 min-h-12 w-full rounded-xl flex items-center justify-center gap-2 group transition-all"
                >
                  {buttonText}
                  <ArrowRight
                    size={20}
                    className="text-foreground transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>

                {disclaimer && (
                  <BodyText
                    variant="14"
                    className="text-gray-600!"
                  >
                    {disclaimer}
                  </BodyText>
                )}
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </Container>
    </Container>
  );
}
