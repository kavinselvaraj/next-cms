import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type CalloutProps = SliceComponentProps<Content.CalloutSlice>;

export default function Callout({ slice }: CalloutProps) {
  const style = slice.primary.style || "Neutral";

  return (
    <Card
      className={`callout callout--${style.toLowerCase()}`}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isFilled.richText(slice.primary.heading) ? (
        <CardHeader>
          <CardTitle>
            <PrismicRichText field={slice.primary.heading} />
          </CardTitle>
        </CardHeader>
      ) : null}
      <CardContent>
        <PrismicRichText field={slice.primary.body} />
      </CardContent>
    </Card>
  );
}
