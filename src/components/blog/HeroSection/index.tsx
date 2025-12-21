"use client";

import { Header } from "@/src/components/landing/Header";
import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { BlogPage } from "@/src/lib/sanity/types";
import { BookOpen, Layers, TrendingUp } from "lucide-react";

type Props = BlogPage["heroSection"] & {
  totalArticles?: number;
  totalCategories?: number;
};

export function HeroSection({ title, description, totalArticles = 0, totalCategories = 0 }: Props) {
  const stats = [
    {
      icon: BookOpen,
      value: `${totalArticles}+`,
      label: "Artikler",
    },
    {
      icon: Layers,
      value: totalCategories,
      label: "Kategorier",
    },
    {
      icon: TrendingUp,
      value: "Nyt",
      label: "Indhold",
    },
  ];

  return (
    <Container
      as="section"
      className="bg-brand-primary md:rounded-xl relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gray-100/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gray-100/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-100/5 rounded-full blur-2xl" />
      </div>

      <Container
        variant="inner"
        className="py-9 md:py-12 h-full relative z-10"
      >
        <Header />

        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto pt-12 md:pt-16 pb-8">
          <AnimatedContainer
            preset="fadeUp"
            duration={0.6}
          >
            <Headline>{title}</Headline>
          </AnimatedContainer>

          <AnimatedContainer
            preset="fadeUp"
            delay={0.2}
            duration={0.6}
          >
            <BodyText
              variant="18"
              className="mt-4"
            >
              {description}
            </BodyText>
          </AnimatedContainer>

          <div className="flex md:flex-row flex-col items-center justify-center gap-y-4 gap-x-8 w-full mt-10">
            {stats.map((stat, index) => (
              <AnimatedContainer
                key={stat.label}
                preset="fadeUp"
                delay={0.4 + index * 0.1}
                duration={0.6}
                className="w-full md:w-auto"
              >
                <div className="w-full md:min-w-[180px] flex items-center gap-4 bg-gray-100/10 backdrop-blur-md px-6 py-3 rounded-full border border-gray-500/20">
                  <stat.icon
                    className="text-foreground"
                    size={24}
                  />
                  <div className="text-left">
                    <BodyText variant="18Semibold">{stat.value}</BodyText>
                    <BodyText
                      variant="14"
                      className="opacity-80"
                    >
                      {stat.label}
                    </BodyText>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}
