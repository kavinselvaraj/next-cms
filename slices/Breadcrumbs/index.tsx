import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { PageContext } from "@/slices";

export type BreadcrumbsProps = SliceComponentProps<
  Content.BreadcrumbsSlice,
  PageContext
>;

function HomeIcon() {
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
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

function ChevronSeparator() {
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
      className="breadcrumbs-chevron"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export default function Breadcrumbs({ slice, context }: BreadcrumbsProps) {
  const crumbs = (context?.breadcrumbs ?? []).filter((crumb) => crumb.label);

  if (crumbs.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="breadcrumbs"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ol>
        <li>
          <a href="/" className="breadcrumbs-home" aria-label="Home">
            <HomeIcon />
          </a>
          <ChevronSeparator />
        </li>
        {crumbs.map((crumb, index) => (
          <li key={`${crumb.label}-${index}`}>
            {crumb.href ? (
              <a href={crumb.href}>{crumb.label}</a>
            ) : (
              <span className="breadcrumbs-current">{crumb.label}</span>
            )}
            {index < crumbs.length - 1 ? <ChevronSeparator /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
