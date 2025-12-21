import { sanityFetch } from "@/src/lib/sanity/client";
import { allCategoriesQuery, blogPageQuery } from "@/src/lib/sanity/queries";
import { BlogPage as BlogPageType, Category, PostPreview } from "@/src/lib/sanity/types";
import { BlogPageContent } from "@/src/views/BlogPageContent";

interface BlogPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params_resolved = await searchParams;
  const category = params_resolved.category;

  const categories = await sanityFetch<Category[]>({ query: allCategoriesQuery });

  const queryParams: Record<string, unknown> = {};
  let filters = `_type == "post"`;

  if (category && category !== "all") {
    filters += ` && $categorySlug in categories[]->slug.current`;
    queryParams.categorySlug = category;
  }

  const postsQuery = `*[${filters}] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    readingTime,
    excerpt,
    mainImage { asset, alt },
    "author": author->{ name, image { asset, alt } },
    "categories": categories[]->{ _id, title, slug, color }
  }`;

  const posts = await sanityFetch<PostPreview[]>({
    query: postsQuery,
    params: queryParams,
  });

  const blogContent = await sanityFetch<BlogPageType>({ query: blogPageQuery });

  return (
    <BlogPageContent
      posts={posts}
      categories={categories}
      blogContent={blogContent}
      activeCategory={category}
    />
  );
}
