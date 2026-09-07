import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type PageTitleProps = SliceComponentProps<Content.PageTitleSlice>;

export default function PageTitle({ slice }: PageTitleProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      {slice.primary.subtitle ? <p>{slice.primary.subtitle}</p> : null}
    </section>
  );
}
