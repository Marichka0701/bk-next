import { CategoriesSwiper } from "@/src/components/blog/CategoriesSwiper";
import { HeroSection } from "@/src/components/blog/HeroSection";
import { LatestArticlesSection } from "@/src/components/blog/LatestArticlesSection";
import { NewsletterSection } from "@/src/components/blog/NewsletterSection";
import { TheMostEngagedArticleSection } from "@/src/components/blog/TheMostEngagedArticleSection";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { BlogPage, Category, PostPreview } from "@/src/lib/sanity/types";

interface Props {
  posts: PostPreview[];
  categories: Category[];
  blogContent: BlogPage;
  activeCategory?: string;
}

export function BlogPageContent({ posts, categories, blogContent, activeCategory }: Props) {
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const gridPosts = posts.length > 1 ? posts.slice(1) : posts;

  return (
    <div className="md:py-5 space-y-8">
      <HeroSection
        {...blogContent.heroSection}
        totalArticles={posts.length}
        totalCategories={categories.length}
      />

      <CategoriesSwiper
        categories={categories}
        activeCategory={activeCategory || "all"}
      />

      {posts.length === 0 ? (
        <Container
          variant="inner"
          className="py-16 flex flex-col justify-center items-center gap-2 text-center"
        >
          <Headline
            as="h3"
            variant="h2"
            className="text-gray-900!"
          >
            Ingen artikler fundet
          </Headline>
          <BodyText className="text-gray-600!">
            Prøv at ændre din søgning eller vælge en anden kategori
          </BodyText>
        </Container>
      ) : (
        <>
          {featuredPost && <TheMostEngagedArticleSection post={featuredPost} />}
          {gridPosts.length > 0 && <LatestArticlesSection posts={gridPosts} />}
        </>
      )}

      <NewsletterSection {...blogContent.newsletterSection} />
    </div>
  );
}
