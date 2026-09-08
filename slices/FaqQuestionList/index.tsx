import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqQuestionListProps =
  SliceComponentProps<Content.FaqQuestionListSlice>;

function ChevronRight({ className }: { className?: string }) {
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
      className={className}
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export default function FaqQuestionList({ slice }: FaqQuestionListProps) {
  if (slice.variation === "accordion") {
    return (
      <Accordion
        type="single"
        collapsible
        defaultValue={slice.primary.current ? "category" : undefined}
        className="faq-category"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <AccordionItem value="category" className="faq-category-item">
          <AccordionTrigger className="faq-category-summary">
            <PrismicRichText field={slice.primary.heading} />
          </AccordionTrigger>
          <AccordionContent className="faq-category-content">
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
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  if (slice.variation === "grid") {
    return (
      <section
        className="faq-topic-group"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="faq-topic-group-heading">
          <PrismicRichText field={slice.primary.heading} />
        </div>
        <div className="faq-topic-links">
          {slice.items.map((item, index) =>
            item.href ? (
              <a key={`${item.question}-${index}`} href={item.href}>
                {item.question}
              </a>
            ) : (
              <span key={`${item.question}-${index}`}>{item.question}</span>
            ),
          )}
        </div>
      </section>
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
              <span className="faq-list-question">{item.question}</span>
              <ChevronRight className="faq-list-chevron" />
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
