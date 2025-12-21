import { CategoryBadge } from "@/src/components/blog/CategoryBadge";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { ROUTES } from "@/src/config/routes";
import { urlForImage } from "@/src/lib/sanity/image";
import { PostPreview } from "@/src/lib/sanity/types";
import { Image } from "next-sanity/image";
import Link from "next/link";

interface Props {
  post: PostPreview;
}

export function LatestArticleCard({ post }: Props) {
  return (
    <Link href={ROUTES.BLOG_DETAILS_PAGE(post.slug.current)}>
      <div className="w-full bg-secondary-background rounded-xl flex flex-col border border-gray-500 hover:-translate-y-3 transition-all duration-300 cursor-pointer">
        {post.mainImage && (
          <div className="relative w-full h-[220px] rounded-t-xl overflow-hidden">
            <Image
              src={urlForImage(post.mainImage).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-4 flex-1 flex flex-col justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
            {post.categories?.map((category, index) => (
              <CategoryBadge
                key={index}
                variant="secondary"
              >
                {category.title}
              </CategoryBadge>
            ))}
            <BodyText
              variant="14"
              className="text-secondary-foreground!"
            >
              {new Date(post.publishedAt).toLocaleDateString("da-DK", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </BodyText>
          </div>

          <div>
            <Headline
              as="p"
              variant="h3"
              className="text-secondary-foreground!"
            >
              {post.title}
            </Headline>
            <BodyText className="text-gray-600! line-clamp-3">{post.excerpt}</BodyText>
          </div>

          <div className="pt-4 w-full border-t border-border flex gap-4">
            {post.author.image && (
              <Image
                src={urlForImage(post.author.image).url()}
                alt={post.author.name}
                width={48}
                height={48}
                className="size-12 shrink-0 rounded-full object-cover"
              />
            )}

            <div className="w-full flex items-center justify-between gap-4">
              <BodyText
                variant="18Semibold"
                className="text-secondary-foreground"
              >
                {post.author.name}
              </BodyText>

              <BodyText
                variant="12"
                className="text-gray-600!"
              >
                {post.readingTime} min read
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
