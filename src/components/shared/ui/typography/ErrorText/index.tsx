import { BodyText, BodyTextProps } from "@/src/components/shared/ui/typography/BodyText";
import { cn } from "@/src/lib/cn";
import { ReactNode } from "react";

interface ErrorTextProps extends Omit<BodyTextProps, "variant"> {
  children: ReactNode;
  variant?: BodyTextProps["variant"];
}

export function ErrorText({ children, className, variant = "14", ...props }: ErrorTextProps) {
  return (
    <BodyText
      variant={variant}
      className={cn("text-error-100! -mt-0.5", className)}
      {...props}
    >
      {children}
    </BodyText>
  );
}
