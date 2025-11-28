import { BudjetFormatter } from "@/src/components/landing/BudjetFormatter";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { FundedProject } from "@/src/data/fundedProjects";
import Image from "next/image";

interface Props {
  item: FundedProject;
}

export function FundedProjectCard({
  item: { imageSrc, imageAlt, title, description, budget, isFlexibleFinancing },
}: Props) {
  return (
    <div className="relative w-full bg-secondary-background rounded-xl py-6 px-4.5 flex flex-col">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={340}
        height={220}
        draggable={false}
        className="w-full h-[220px] rounded-lg object-cover"
      />

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
          <BodyText className="text-gray-600!">{description}</BodyText>
        </div>

        <BudjetFormatter value={budget} />
      </div>
    </div>
  );
}
