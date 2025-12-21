import { AnimatedContainer } from "@/src/components/shared/AnimatedContainer";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { PortableTextContent } from "@/src/components/shared/ui/typography/PortableTextContent";
import { urlForImage } from "@/src/lib/sanity/image";
import { Author } from "@/src/lib/sanity/types";
import { Image } from "next-sanity/image";

interface Props {
  author: Author;
}
export function AuthorCard({ author }: Props) {
  return (
    <AnimatedContainer
      preset="fadeUp"
      delay={0.5}
      duration={0.6}
    >
      <div className="mt-12 p-8 bg-gray-100 rounded-2xl">
        <div className="flex flex-col md:flex-row gap-6">
          {author.image && (
            <div className="relative size-20 shrink-0 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={urlForImage(author.image).url()}
                width={80}
                height={80}
                alt={author.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            <BodyText
              variant="18Semibold"
              className="text-secondary-foreground! mb-1"
            >
              {author.name}
            </BodyText>
            {author.position && (
              <BodyText
                variant="14"
                className="text-gray-600! mb-3"
              >
                {author.position}
              </BodyText>
            )}

            {author.bio && (
              <PortableTextContent
                value={author.bio}
                variant="bio"
              />
            )}
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
}
