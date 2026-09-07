import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

export default function HeroBanner({ slice }: HeroBannerProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.image} />
      <PrismicRichText field={slice.primary.title} />
      {isFilled.link(slice.primary.cta_link) ? (
        <PrismicNextLink field={slice.primary.cta_link}>
          {slice.primary.cta_label}
        </PrismicNextLink>
      ) : null}
    </section>
  );
}
