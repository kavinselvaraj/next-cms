import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CtaBannerProps = SliceComponentProps<Content.CtaBannerSlice>;

export default function CtaBanner({ slice }: CtaBannerProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.body} />
      {isFilled.link(slice.primary.cta_link) ? (
        <PrismicNextLink field={slice.primary.cta_link}>
          {slice.primary.cta_label}
        </PrismicNextLink>
      ) : null}
    </section>
  );
}
