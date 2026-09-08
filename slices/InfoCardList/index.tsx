import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type InfoCardListProps = SliceComponentProps<Content.InfoCardListSlice>;

export default function InfoCardList({ slice }: InfoCardListProps) {
  return (
    <div
      className="info-card-list"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((item, index) => (
        <Card className="info-card" key={`${item.title}-${index}`}>
          {item.title ? (
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
          ) : null}
          <CardContent>
            <PrismicRichText field={item.body} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
