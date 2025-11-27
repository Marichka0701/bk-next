/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { ComponentPropsWithoutRef, ElementType, ReactElement, ReactNode } from "react";

import { Text, VariantMap } from "@/src/components/shared/ui/typography/Text";

export const BodyTextVariantMap = {
  "16": "text-base font-normal leading-[160%] font-jakarta",
  "14": "text-sm font-normal leading-[160%] font-jakarta",
} as const satisfies VariantMap;

export type BodyTextVariant = keyof typeof BodyTextVariantMap;

export interface BodyTextProps<T extends ElementType = "p"> {
  as?: T | ReactElement;
  variant?: BodyTextVariant;
  children?: ReactNode;
  className?: string;
}

export function BodyText<T extends ElementType = "p">({
  variant = "16",
  as = "p" as T,
  className = "",
  ...props
}: BodyTextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BodyTextProps<T>>) {
  return (
    <Text
      as={as}
      variant={variant}
      variantMap={BodyTextVariantMap}
      defaultVariant="16"
      className={className}
      {...props}
    />
  );
}
