import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type DisclosureListProps = SliceComponentProps<Content.DisclosureListSlice>;

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
      className="disclosure-chevron"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function DisclosureList({ slice }: DisclosureListProps) {
  return (
    <div
      className="disclosure-list"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((item, index) => (
        <details className="disclosure-item" open key={`${item.title}-${index}`}>
          <summary className="disclosure-summary">
            <span className="disclosure-title">{item.title}</span>
            <ChevronDown />
          </summary>

          <div className="disclosure-panel">
            <PrismicRichText field={item.body} />

            {isFilled.richText(item.box_body) ? (
              <div className="disclosure-box">
                {item.box_heading ? <h4>{item.box_heading}</h4> : null}
                <PrismicRichText field={item.box_body} />
              </div>
            ) : null}

            {isFilled.link(item.link) ? (
              <PrismicNextLink field={item.link} className="disclosure-link">
                {item.link_label}
              </PrismicNextLink>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
