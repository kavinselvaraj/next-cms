import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CalloutProps = SliceComponentProps<Content.CalloutSlice>;

export default function Callout({ slice }: CalloutProps) {
  const style = slice.primary.style || "Neutral";

  return (
    <div
      className={`callout callout--${style.toLowerCase()}`}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
    </div>
  );
}
