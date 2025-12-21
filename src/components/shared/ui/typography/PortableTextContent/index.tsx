import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import {
  PortableText,
  PortableTextComponents,
  PortableTextProps,
} from "@portabletext/react";

interface Props {
  value: PortableTextProps["value"];
  variant?: "article" | "bio";
}

const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <Headline
        as="h2"
        variant="h2"
        className="mt-12 mb-6 text-secondary-foreground!"
      >
        {children}
      </Headline>
    ),
    h3: ({ children }) => (
      <Headline
        as="h3"
        variant="h3"
        className="mt-10 mb-4 text-secondary-foreground!"
      >
        {children}
      </Headline>
    ),
    normal: ({ children }) => (
      <BodyText
        variant="18"
        className="mb-6 text-gray-600!"
      >
        {children}
      </BodyText>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-primary pl-6 py-2 my-8 italic bg-gray-100 rounded-r-lg">
        <BodyText
          variant="18"
          as="span"
          className="text-gray-600!"
        >
          {children}
        </BodyText>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => (
      <BodyText
        as="li"
        variant="18"
        className="text-gray-600!"
      >
        {children}
      </BodyText>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <BodyText
        variant="18Semibold"
        as="span"
        className="text-secondary-foreground"
      >
        {children}
      </BodyText>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-primary underline hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),
  },
};

const bioComponents: PortableTextComponents = {
  ...ptComponents,
  block: {
    normal: ({ children }) => (
      <BodyText
        variant="14"
        className="text-gray-600!"
      >
        {children}
      </BodyText>
    ),
  },
};

export function PortableTextContent({ value, variant = "article" }: Props) {
  return (
    <div className={variant === "article" ? "prose prose-lg max-w-none" : ""}>
      <PortableText
        value={value}
        components={variant === "article" ? ptComponents : bioComponents}
      />
    </div>
  );
}
