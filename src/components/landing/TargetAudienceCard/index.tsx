import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { TargetAudience } from "@/src/data/targetAudience";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Props {
  item: TargetAudience;
}

export function TargetAudienceCard({
  item: { imageSrc, imageAlt, title, description, ctaButton },
}: Props) {
  return (
    <div className="w-full bg-secondary-background rounded-xl py-6 px-4.5 flex flex-col">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={340}
        height={220}
        draggable={false}
        className="rounded-lg"
      />

      <div className="mt-7 flex-1 flex flex-col justify-between gap-12">
        <div className="space-y-4">
          <Headline
            as="h3"
            variant="h3"
            className="text-secondary-foreground!"
          >
            {title}
          </Headline>
          <BodyText className="text-gray-600!">{description}</BodyText>
        </div>

        <button className="flex items-center gap-2">
          <BodyText
            variant="20Medium"
            className="text-brand-primary!"
          >
            {ctaButton}
          </BodyText>
          <ArrowRight
            size={20}
            className="text-brand-primary"
          />
        </button>
      </div>
    </div>
  );
}
