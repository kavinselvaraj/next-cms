import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

export type ButtonLinkProps = SliceComponentProps<Content.ButtonLinkSlice>;

export default function ButtonLink({ slice }: ButtonLinkProps) {
  if (!isFilled.link(slice.primary.link)) return null;

  return (
    <div
      className="button-link"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextLink field={slice.primary.link} className="button-link-cta">
        {slice.primary.label}
      </PrismicNextLink>
    </div>
  );
}
