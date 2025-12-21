"use client";

import { LatestArticleCard } from "@/src/components/blog/LatestArticleCard";
import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { Container } from "@/src/components/shared/Container";
import { PostPreview } from "@/src/lib/sanity/types";

export function LatestArticlesSection({ posts }: { posts: PostPreview[] }) {
  return (
    <Container
      as="section"
      className="py-12.5"
    >
      <Container
        variant="inner"
        className="md:px-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {posts.map((post, index) => (
          <AnimatedContainer
            key={post._id}
            preset="fadeUp"
            delay={0.1 * (index % 3)}
          >
            <LatestArticleCard post={post} />
          </AnimatedContainer>
        ))}
      </Container>
    </Container>
  );
}
