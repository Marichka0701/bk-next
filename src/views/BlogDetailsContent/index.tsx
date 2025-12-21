import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AuthorCard } from "@/src/components/blog/AuthorCard";
import { BlogShareButtons } from "@/src/components/blog/BlogShareButtons";
import { CategoryBadge } from "@/src/components/blog/CategoryBadge";
import { RelatedArticles } from "@/src/components/blog/RelatedArticles";
import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { Container } from "@/src/components/shared/Container";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { PortableTextContent } from "@/src/components/shared/ui/typography/PortableTextContent";
import { ROUTES } from "@/src/config/routes";
import { sanityFetch } from "@/src/lib/sanity/client";
import { urlForImage } from "@/src/lib/sanity/image";
import { postBySlugQuery } from "@/src/lib/sanity/queries";
import { Category, Post } from "@/src/lib/sanity/types";
import { Image } from "next-sanity/image";

interface Props {
  slug: string;
}

export async function BlogDetailsContent({ slug }: Props) {
  const post = await sanityFetch<Post>({
    query: postBySlugQuery,
    params: { slug },
  });

  if (!post) {
    notFound();
  }

  const formattedDate = new Intl.DateTimeFormat("da-DK", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(post.publishedAt));

  return (
    <div>
      <Container className="pt-8">
        <Container variant="inner">
          <Link href={ROUTES.BLOG_PAGE}>
            <button className="py-2 px-4 flex items-center gap-2 text-secondary-foreground border border-transparent hover:border-gray-900 outline-none rounded-2xl cursor-pointer transition-all">
              <ArrowLeft size={20} />
              Tilbage til blog
            </button>
          </Link>
        </Container>
      </Container>

      <Container
        as="section"
        className="py-8"
      >
        <Container variant="inner">
          <AnimatedContainer
            preset="fadeUp"
            duration={0.6}
          >
            {post.categories && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category: Category) => (
                  <CategoryBadge
                    key={category._id || category.slug.current}
                    isSelected
                  >
                    {category.title}
                  </CategoryBadge>
                ))}
              </div>
            )}

            <Headline
              as="h1"
              className="text-secondary-foreground mb-6"
            >
              {post.title}
            </Headline>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <BodyText>{formattedDate}</BodyText>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <BodyText>{post.readingTime} min læsning</BodyText>
              </div>
              {post.author && (
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <BodyText>{post.author.name}</BodyText>
                </div>
              )}
            </div>

            {post.excerpt && (
              <BodyText
                variant="18"
                className="text-gray-600! mb-8"
              >
                {post.excerpt}
              </BodyText>
            )}
          </AnimatedContainer>

          {post.mainImage && (
            <AnimatedContainer
              preset="fadeUp"
              delay={0.2}
              duration={0.6}
            >
              <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 bg-gray-100">
                <Image
                  src={urlForImage(post.mainImage).url()}
                  alt={post.mainImage.alt || post.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedContainer>
          )}
        </Container>
      </Container>

      <Container
        as="article"
        className="pb-12"
      >
        <Container variant="inner">
          <AnimatedContainer
            preset="fadeUp"
            delay={0.3}
            duration={0.6}
          >
            <div className="prose prose-lg max-w-none">
              {post.body && (
                <PortableTextContent
                  value={post.body}
                  variant="article"
                />
              )}
            </div>
          </AnimatedContainer>

          <BlogShareButtons />

          {post.author && <AuthorCard author={post.author} />}
        </Container>
      </Container>

      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <RelatedArticles posts={post.relatedPosts} />
      )}
    </div>
  );
}
