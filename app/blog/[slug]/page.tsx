import { Metadata } from "next";

import { sanityFetch } from "@/src/lib/sanity/client";
import { postBySlugQuery } from "@/src/lib/sanity/queries";
import { Post } from "@/src/lib/sanity/types";
import { BlogDetailsContent } from "@/src/views/BlogDetailsContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await sanityFetch<Post>({
    query: postBySlugQuery,
    params: { slug },
  });

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;

  return <BlogDetailsContent slug={slug} />;
}
