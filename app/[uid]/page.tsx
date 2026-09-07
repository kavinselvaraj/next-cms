import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components, PageContext } from "@/slices";

type PageProps = { params: { uid: string } };

export default async function Page({ params }: PageProps) {
  const client = createClient();
  const page = await client
    .getByUID("content_page", params.uid)
    .catch(() => notFound());

  const context: PageContext = {
    breadcrumbs: [
      {
        label: page.data.breadcrumb_level_1_label,
        href: page.data.breadcrumb_level_1_href,
      },
      {
        label: page.data.breadcrumb_level_2_label,
        href: page.data.breadcrumb_level_2_href,
      },
      {
        label: page.data.breadcrumb_level_3_label,
        href: page.data.breadcrumb_level_3_href,
      },
    ],
  };

  return (
    <div className="page-layout">
      <div className="page-heading">
        <SliceZone
          slices={page.data.heading}
          components={components}
          context={context}
        />
      </div>

      <main className="page-main">
        <SliceZone
          slices={page.data.main}
          components={components}
          context={context}
        />
      </main>

      <aside className="page-aside">
        <SliceZone
          slices={page.data.aside}
          components={components}
          context={context}
        />
      </aside>

      <footer className="page-footer">
        <SliceZone
          slices={page.data.footer}
          components={components}
          context={context}
        />
      </footer>
    </div>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("content_page", params.uid)
    .catch(() => notFound());

  return { title: page.uid };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("content_page");

  return pages.map((page) => ({ uid: page.uid! }));
}
