export interface TargetAudience {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaButton: string;
}

export const TARGET_AUDIENCE: TargetAudience[] = [
  {
    imageSrc: "/target-audience/engineers.webp",
    imageAlt: "engineers",
    title: "Ejendomsudviklere",
    description:
      "Vi hjælper udviklere med finansiering til nye byggerier, renoveringer og større projekter.",
    ctaButton: "Kom i gang",
  },
  {
    imageSrc: "/target-audience/investors.webp",
    imageAlt: "investors",
    title: "Erhvervsinvestorer",
    description:
      "For investorer, der søger sikre, datadrevne vurderinger og fleksible finansieringsmodeller.",
    ctaButton: "Kom i gang",
  },
  {
    imageSrc: "/target-audience/enterpreneurs.webp",
    imageAlt: "enterpreneurs",
    title: "Entreprenører",
    description:
      "Til håndværkere og entreprenører, der har brug for stabil finansiering gennem hele byggeprocessen.",
    ctaButton: "Kom i gang",
  },
];
