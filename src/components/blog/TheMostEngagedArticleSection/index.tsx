"use client";

import { CategoryBadge } from "@/src/components/blog/CategoryBadge";
import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { Button } from "@/src/components/shared/Button";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { urlForImage } from "@/src/lib/sanity/image";
import { PostPreview } from "@/src/lib/sanity/types";
import { ArrowRight } from "lucide-react";
import { Image } from "next-sanity/image";
import { useRouter } from "next/navigation";

interface Props {
  post: PostPreview;
}

export function TheMostEngagedArticleSection({ post }: Props) {
  const router = useRouter();

  const formattedDate = new Intl.DateTimeFormat("da-DK", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(post.publishedAt));

  return (
    <Container
      as="section"
      className="px-5 md:py-12.5"
    >
      <AnimatedContainer
        preset="fadeUp"
        duration={0.8}
        className="w-full"
      >
        <Container
          variant="inner"
          className="px-0 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-gray-100 border border-border shadow-sm"
        >
          {post.mainImage && (
            <div className="relative overflow-hidden w-full h-[50vh] max-h-[400px] lg:h-full lg:max-h-none rounded-2xl object-cover group">
              <Image
                src={urlForImage(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          <div className="p-4 md:p-8 lg:p-16 flex flex-col justify-center items-start gap-6">
            <div className="flex items-center flex-wrap gap-x-4 gap-y-2">
              {post.categories?.map((category, index) => (
                <CategoryBadge
                  key={index}
                  variant="secondary"
                  style={{
                    backgroundColor: category.color || undefined,
                  }}
                >
                  {category.title}
                </CategoryBadge>
              ))}
              <BodyText
                variant="14"
                className="text-secondary-foreground!"
              >
                {formattedDate}
              </BodyText>
            </div>

            <Headline
              as="h2"
              className="text-secondary-foreground line-clamp-3"
            >
              {post.title}
            </Headline>

            <BodyText className="text-gray-600! line-clamp-3">{post.excerpt}</BodyText>

            <Button
              variant="secondary"
              className="mt-4 group flex items-center gap-2"
              onClick={() => router.push(`/blog/${post.slug.current}`)}
            >
              Læs artiklen
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
          </div>
        </Container>
      </AnimatedContainer>
    </Container>
  );
}
