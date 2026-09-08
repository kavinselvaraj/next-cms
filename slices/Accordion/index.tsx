import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type AccordionProps = SliceComponentProps<Content.AccordionSlice>;

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
      className="accordion-chevron"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Accordion({ slice }: AccordionProps) {
  return (
    <div
      className="accordion"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((item, index) => (
        <details className="accordion-item" open key={`${item.title}-${index}`}>
          <summary className="accordion-summary">
            <span className="accordion-number">{index + 1}</span>
            <span className="accordion-title">{item.title}</span>
            <ChevronDown />
          </summary>

          <div className="accordion-panel">
            {item.note ? (
              <div className="accordion-note">
                <p>{item.note}</p>
              </div>
            ) : null}

            <PrismicRichText field={item.body} />

            {isFilled.richText(item.necessities) ? (
              <>
                {item.necessities_heading ? (
                  <p className="accordion-necessities-heading">
                    {item.necessities_heading}
                  </p>
                ) : null}
                <div className="necessities-box">
                  <PrismicRichText field={item.necessities} />
                </div>
              </>
            ) : null}

            {isFilled.link(item.link) ? (
              <PrismicNextLink field={item.link} className="accordion-link">
                {item.link_label}
              </PrismicNextLink>
            ) : null}

            {isFilled.link(item.link2) ? (
              <PrismicNextLink field={item.link2} className="accordion-link">
                {item.link2_label}
              </PrismicNextLink>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
