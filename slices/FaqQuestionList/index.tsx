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

function ChevronRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="faq-category-chevron"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export default function FaqQuestionList({ slice }: FaqQuestionListProps) {
  if (slice.variation === "accordion") {
    return (
      <details
        className="faq-category"
        open
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <summary className="faq-category-summary">
          <PrismicRichText field={slice.primary.heading} />
          <ChevronRight />
        </summary>
        <ul className="faq-category-items">
          {slice.items.map((item, index) => (
            <li key={`${item.question}-${index}`}>
              {item.href ? (
                <a href={item.href}>{item.question}</a>
              ) : (
                <span>{item.question}</span>
              )}
            </li>
          ))}
        </ul>
      </details>
    );
  }

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
