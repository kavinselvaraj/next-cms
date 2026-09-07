import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { PageContext } from "@/slices";

export type BreadcrumbsProps = SliceComponentProps<
  Content.BreadcrumbsSlice,
  PageContext
>;

export default function Breadcrumbs({ slice, context }: BreadcrumbsProps) {
  const separator = slice.primary.separator || "/";
  const crumbs = (context?.breadcrumbs ?? []).filter((crumb) => crumb.label);

  if (crumbs.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ol>
        {crumbs.map((crumb, index) => (
          <li key={`${crumb.label}-${index}`}>
            {crumb.href ? <a href={crumb.href}>{crumb.label}</a> : crumb.label}
            {index < crumbs.length - 1 ? <span aria-hidden>{separator}</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
