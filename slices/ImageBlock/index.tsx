import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

export default function ImageBlock({ slice }: ImageBlockProps) {
  if (!isFilled.image(slice.primary.image)) return null;

  return (
    <figure
      className="image-block"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.image} />
      {slice.primary.caption ? (
        <figcaption>{slice.primary.caption}</figcaption>
      ) : null}
    </figure>
  );
}
