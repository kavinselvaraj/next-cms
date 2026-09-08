import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

export type FileDownloadListProps =
  SliceComponentProps<Content.FileDownloadListSlice>;

export default function FileDownloadList({ slice }: FileDownloadListProps) {
  return (
    <div
      className="file-download-list"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((item, index) => (
        <div className="file-download-item" key={`${item.label}-${index}`}>
          {isFilled.link(item.file) ? (
            <PrismicNextLink field={item.file} className="file-download-button">
              {item.label}
            </PrismicNextLink>
          ) : (
            <span className="file-download-button">{item.label}</span>
          )}
          {item.file_size ? (
            <p className="file-download-size">File Size: {item.file_size}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
