"use client";

import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { cn } from "@/src/lib/cn";
import Image from "next/image";

const steps = [
  { id: 1, label: "Henvendelse" },
  { id: 2, label: "Vurdering" },
  { id: 3, label: "Tilbud" },
  { id: 4, label: "Løbende udbetaling og opfølgning" },
  {
    id: 5,
    label: "Dit byggeprojekt realiseres",
    icon: (
      <Image
        src="/finish-icon.svg"
        width={18}
        height={18}
        alt="finish icon"
      />
    ),
  },
];

export function AnimatedStepper() {
  return (
    <div className="flex items-start gap-3">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(215, 215, 215, 0.44) 0%, rgba(222, 222, 222, 0.44) 41.91%, rgba(255, 255, 255, 0.44) 100%)",
        }}
        className="p-3 w-fit space-y-8 rounded-full"
      >
        {steps.map((step) => (
          <div
            key={step.id}
            className={cn(
              "size-9 shrink-0 rounded-full flex justify-center items-center",
              !step.icon && "bg-secondary-green"
            )}
          >
            {step.icon || <BodyText variant="20Medium">{step.id}</BodyText>}
          </div>
        ))}
      </div>

      <div className="py-4 space-y-11">
        {steps.map((step) => (
          <BodyText
            key={step.id}
            variant="18Normal"
            className="text-brand-primary!"
          >
            {step.label}
          </BodyText>
        ))}
      </div>
    </div>
  );
}
