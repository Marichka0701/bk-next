import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { cn } from "@/src/lib/cn";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isSelected?: boolean;
  variant?: "primary" | "secondary";
}

export function CategoryBadge({
  children,
  isSelected = false,
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "w-fit my-1 px-4 py-2 rounded-full shadow-md text-nowrap cursor-pointer",
        variant === "primary" && "bg-gray-100",
        variant === "primary" && isSelected && "bg-secondary-green",
        variant === "secondary" && "bg-gray-500/50",
        className
      )}
      {...props}
    >
      <BodyText
        variant="14"
        className={cn(
          variant === "primary" && "text-gray-600!",
          variant === "primary" && isSelected && "text-gray-100!",
          variant === "secondary" && "text-secondary-foreground!"
        )}
      >
        {children}
      </BodyText>
    </div>
  );
}
