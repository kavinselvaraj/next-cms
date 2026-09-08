import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { cn } from "@/lib/utils";

export type RichTextSectionProps =
  SliceComponentProps<Content.RichTextSectionSlice>;

const labelClasses: Record<string, string> = {
  underline: "underline",
  small: "text-[0.875em]",
  large: "text-[1.125em]",
  muted: "text-muted-foreground",
  accent: "text-primary",
  highlight: "rounded-sm bg-[#fff3b0] px-0.5 py-px",
};

const richTextComponents: JSXMapSerializer = {
  label: ({ node, children }) => (
    <span className={labelClasses[node.data.label] ?? ""}>{children}</span>
  ),
};

const sizeClasses: Record<string, string> = {
  Small: "text-sm",
  Medium: "text-base",
  Large: "text-lg",
};

const colorClasses: Record<string, string> = {
  Default: "text-foreground",
  Muted: "text-muted-foreground",
  Accent: "text-primary",
};

export default function RichTextSection({ slice }: RichTextSectionProps) {
  const fontSize = slice.primary.font_size || "Medium";
  const fontColor = slice.primary.font_color || "Default";

  return (
    <section
      className={cn(
        "mt-8 [&_a]:text-primary [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_p]:mb-3 [&_p]:leading-relaxed",
        sizeClasses[fontSize],
        colorClasses[fontColor],
      )}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={richTextComponents} />
      <PrismicRichText field={slice.primary.body} components={richTextComponents} />

      {slice.items.map((item, index) => {
        const itemFontSize = item.font_size || "Medium";
        const itemFontColor = item.font_color || "Default";

        return (
          <div
            className={cn(
              "mb-2 leading-relaxed",
              sizeClasses[itemFontSize],
              colorClasses[itemFontColor],
            )}
            key={index}
          >
            <PrismicRichText field={item.text} components={richTextComponents} />
          </div>
        );
      })}
    </section>
  );
}
