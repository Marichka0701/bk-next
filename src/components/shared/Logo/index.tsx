import Image from "next/image";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...rest }: Props) {
  return (
    <Image
      src="/logo.svg"
      alt="logo"
      width={300}
      height={45}
      draggable={false}
      className={className}
      {...rest}
    />
  );
}
