import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type RichTextSectionProps =
  SliceComponentProps<Content.RichTextSectionSlice>;

export default function RichTextSection({ slice }: RichTextSectionProps) {
  const fontSize = slice.primary.font_size || "Medium";
  const fontColor = slice.primary.font_color || "Default";

  const className = [
    "rich-text-section",
    `rich-text-section--size-${fontSize.toLowerCase()}`,
    `rich-text-section--color-${fontColor.toLowerCase()}`,
  ].join(" ");

  return (
    <section
      className={className}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
    </section>
  );
}
