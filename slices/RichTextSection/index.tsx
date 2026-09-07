import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type RichTextSectionProps =
  SliceComponentProps<Content.RichTextSectionSlice>;

export default function RichTextSection({ slice }: RichTextSectionProps) {
  return (
    <section
      className="rich-text-section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
    </section>
  );
}
