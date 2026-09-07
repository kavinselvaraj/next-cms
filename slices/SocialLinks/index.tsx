import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

export type SocialLinksProps = SliceComponentProps<Content.SocialLinksSlice>;

export default function SocialLinks({ slice }: SocialLinksProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2>{slice.primary.title}</h2>
      <ul>
        {slice.items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            <PrismicNextLink field={item.url}>{item.label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
