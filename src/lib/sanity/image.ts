import { client } from "@/src/lib/sanity/client";
import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source).auto("format").fit("max");
}

export function getImageUrl(
  source: SanityImageSource | undefined,
  width?: number,
  height?: number,
  quality: number = 80
) {
  if (!source) return "";

  let imageUrl = builder.image(source).auto("format").quality(quality);

  if (width) imageUrl = imageUrl.width(width);
  if (height) imageUrl = imageUrl.height(height);

  return imageUrl.url();
}

export function getBlurDataURL(source: SanityImageSource | undefined) {
  if (!source) return "";

  return builder.image(source).width(20).height(20).blur(10).quality(50).url();
}
