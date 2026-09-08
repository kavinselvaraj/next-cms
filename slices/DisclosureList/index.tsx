import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type DisclosureListProps = SliceComponentProps<Content.DisclosureListSlice>;

export default function DisclosureList({ slice }: DisclosureListProps) {
  return (
    <Accordion
      type="multiple"
      defaultValue={slice.items.map((_, index) => `item-${index}`)}
      className="disclosure-list"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((item, index) => (
        <AccordionItem
          value={`item-${index}`}
          className="disclosure-item"
          key={`${item.title}-${index}`}
        >
          <AccordionTrigger className="disclosure-trigger">
            <span className="disclosure-title">{item.title}</span>
          </AccordionTrigger>

          <AccordionContent className="disclosure-panel">
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
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
