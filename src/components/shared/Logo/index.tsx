import Image, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  className?: string;
}

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
