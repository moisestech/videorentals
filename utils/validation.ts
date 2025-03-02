import type { TVImage } from "@/types";

export function isValidImageData(image: TVImage | undefined | null): image is TVImage {
  return Boolean(
    image && 
    typeof image === 'object' && 
    'url' in image && 
    typeof image.url === 'string' && 
    image.url.length > 0
  );
}

export function getValidImages(images: TVImage[] | undefined | null): TVImage[] {
  if (!Array.isArray(images)) return [];
  return images.filter(isValidImageData);
} 