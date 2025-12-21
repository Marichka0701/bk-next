import { LatestArticleCard } from "@/src/components/blog/LatestArticleCard";
import { Container } from "@/src/components/shared/Container";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { Post } from "@/src/lib/sanity/types";

interface Props {
  posts: Post[];
}

export function RelatedArticles({ posts }: Props) {
  return (
    <Container
      as="section"
      className="pb-8"
    >
      <Container variant="inner">
        <Headline
          as="h2"
          variant="h2"
          className="text-secondary-foreground mb-8 text-center"
        >
          Relaterede artikler
        </Headline>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <LatestArticleCard
              key={post._id}
              post={post}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}
