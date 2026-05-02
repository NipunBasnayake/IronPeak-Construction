import type { ImgHTMLAttributes } from "react";

const DEFAULT_WIDTHS = [480, 768, 1024, 1400, 1800] as const;

type OptimizedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "srcSet"> & {
  src: string;
  widths?: readonly number[];
};

function sizedImageUrl(src: string, width: number) {
  if (!src.includes("images.unsplash.com")) {
    return src;
  }

  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", url.searchParams.get("q") ?? "78");
  url.searchParams.set("auto", url.searchParams.get("auto") ?? "format");
  url.searchParams.set("fit", url.searchParams.get("fit") ?? "crop");
  return url.toString();
}

export function OptimizedImage({
  src,
  widths = DEFAULT_WIDTHS,
  loading = "lazy",
  decoding = "async",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  ...props
}: OptimizedImageProps) {
  const srcSet = src.includes("images.unsplash.com")
    ? widths.map((width) => `${sizedImageUrl(src, width)} ${width}w`).join(", ")
    : undefined;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
}
