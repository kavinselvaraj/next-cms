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
      <PrismicRichText field={slice.primary.heading} components={richTextComponents} />
      <PrismicRichText field={slice.primary.body} components={richTextComponents} />

      {slice.items.map((item, index) => {
        const itemFontSize = item.font_size || "Medium";
        const itemFontColor = item.font_color || "Default";
        const itemClassName = [
          "rich-text-section-line",
          `rich-text-section-line--size-${itemFontSize.toLowerCase()}`,
          `rich-text-section-line--color-${itemFontColor.toLowerCase()}`,
        ].join(" ");

        return (
          <div className={itemClassName} key={index}>
            <PrismicRichText field={item.text} components={richTextComponents} />
          </div>
        );
      })}
    </section>
  );
}
