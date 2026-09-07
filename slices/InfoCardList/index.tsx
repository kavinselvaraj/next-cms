import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type InfoCardListProps = SliceComponentProps<Content.InfoCardListSlice>;

export default function InfoCardList({ slice }: InfoCardListProps) {
  return (
    <div
      className="info-card-list"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((item, index) => (
        <div className="info-card" key={`${item.title}-${index}`}>
          {item.title ? <h3>{item.title}</h3> : null}
          <PrismicRichText field={item.body} />
        </div>
      ))}
    </div>
  );
}
