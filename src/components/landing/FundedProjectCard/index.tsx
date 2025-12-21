import { BudgetFormatter } from "@/src/components/landing/BudgetFormatter";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { cn } from "@/src/lib/cn";
import { urlForImage } from "@/src/lib/sanity/image";
import { Project } from "@/src/lib/sanity/types";
import { Image } from "next-sanity/image";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  item: Project;
}

export function FundedProjectCard({
  item: { image, title, description, budget, isFlexibleFinancing },
  className,
  ...rest
}: Props) {
  return (
    <div
      className={cn(
        "relative w-full bg-secondary-background rounded-xl py-6 px-4.5 flex flex-col",
        className
      )}
      {...rest}
    >
      {image && (
        <Image
          src={urlForImage(image).url()}
          alt={image.alt || title}
          width={340}
          height={220}
          draggable={false}
          className="w-full h-[220px] rounded-lg object-cover"
        />
      )}

      {isFlexibleFinancing && (
        <div className="min-h-8 px-3 absolute top-9 left-9 bg-brand-secondary-100 rounded-full flex justify-center items-center">
          <BodyText
            variant="14Semibold"
            className="text-secondary-orange-100!"
          >
            Fleksibel finansiering
          </BodyText>
        </div>
      )}

      <div className="mt-7 flex-1 flex flex-col justify-between gap-12">
        <div className="space-y-4">
          <Headline
            as="h3"
            variant="h3"
            className="text-secondary-foreground!"
          >
            {title}
          </Headline>
          <BodyText className="text-gray-600! line-clamp-4">{description}</BodyText>
        </div>

        <BudgetFormatter value={budget} />
      </div>
    </div>
  );
}
