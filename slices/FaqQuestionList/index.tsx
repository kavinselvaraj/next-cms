import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type FaqQuestionListProps =
  SliceComponentProps<Content.FaqQuestionListSlice>;

function ChevronDown() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function FaqQuestionList({ slice }: FaqQuestionListProps) {
  return (
    <section
      className="faq-list"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.description} />
      <ol className="faq-list-items">
        {slice.items.map((item, index) => {
          const row = (
            <>
              <span className="faq-list-number">{index + 1}</span>
              <span className="faq-list-question">{item.question}</span>
              <ChevronDown />
            </>
          );

          return (
            <li key={`${item.question}-${index}`}>
              {item.href ? (
                <a className="faq-list-row" href={item.href}>
                  {row}
                </a>
              ) : (
                <div className="faq-list-row">{row}</div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
