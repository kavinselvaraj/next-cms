import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type RichTextSectionProps =
  SliceComponentProps<Content.RichTextSectionSlice>;

const richTextComponents: JSXMapSerializer = {
  label: ({ node, children }) => (
    <span className={`rt-label-${node.data.label}`}>{children}</span>
  ),
};

export default function RichTextSection({ slice }: RichTextSectionProps) {
  return (
    <section
      className="rich-text-section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={richTextComponents} />
      <PrismicRichText field={slice.primary.body} components={richTextComponents} />
    </section>
  );
}
