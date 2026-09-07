import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type FaqQuestionListProps =
  SliceComponentProps<Content.FaqQuestionListSlice>;

export default function FaqQuestionList({ slice }: FaqQuestionListProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.description} />
      <ul>
        {slice.items.map((item, index) => (
          <li key={`${item.question}-${index}`}>
            {item.href ? (
              <a href={item.href}>{item.question}</a>
            ) : (
              item.question
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
