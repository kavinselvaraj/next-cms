import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CtaBannerProps = SliceComponentProps<Content.CtaBannerSlice>;

export default function CtaBanner({ slice }: CtaBannerProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.body} />
      {isFilled.keyText(slice.primary.href) ? (
        <a href={slice.primary.href}>{slice.primary.label}</a>
      ) : null}
    </section>
  );
}
