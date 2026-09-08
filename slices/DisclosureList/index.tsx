import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronLink } from "@/components/prismic/chevron-link";

export type DisclosureListProps = SliceComponentProps<Content.DisclosureListSlice>;

export default function DisclosureList({ slice }: DisclosureListProps) {
  return (
    <Accordion
      type="multiple"
      defaultValue={slice.items.map((_, index) => `item-${index}`)}
      className="mt-6"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((item, index) => (
        <AccordionItem
          value={`item-${index}`}
          className="border-t! border-b-0! py-1 last:border-b!"
          key={`${item.title}-${index}`}
        >
          <AccordionTrigger className="items-center! gap-3 py-3!">
            <span className="flex-1 font-bold text-foreground">{item.title}</span>
          </AccordionTrigger>

          <AccordionContent className="pb-2! [&_a]:text-primary [&_p]:mb-3 [&_p]:leading-relaxed">
            <PrismicRichText field={item.body} />

            {isFilled.richText(item.box_body) ? (
              <div className="mb-4 rounded bg-muted px-5 py-4">
                {item.box_heading ? (
                  <h4 className="mb-2 text-[0.95rem] font-bold">{item.box_heading}</h4>
                ) : null}
                <PrismicRichText field={item.box_body} />
              </div>
            ) : null}

            {isFilled.link(item.link) ? (
              <ChevronLink field={item.link} chevron={false}>
                {item.link_label}
              </ChevronLink>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
