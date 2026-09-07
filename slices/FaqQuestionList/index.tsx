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
      <PrismicRichText field={slice.primary.title} />
      <dl>
        {slice.items.map((item, index) => (
          <div key={`${item.question}-${index}`}>
            <dt>{item.question}</dt>
            <dd>
              <PrismicRichText field={item.answer} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
