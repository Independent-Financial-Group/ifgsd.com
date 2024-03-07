import React from "react";

import Link from "next/link";

import Layout from "/components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";

import * as contentful from "/utils/contentful";
import { formatDateAndTime } from "@contentful/f36-datetime";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import options from "rich-text-options";

export async function getStaticPaths() {
  const response = await contentful.client.getEntries({
    content_type: "announcements",
  });

  const paths = response.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  if (!response.items.length) {
    return {
      redirect: {
        destination: "/app",
        permanent: false,
      },
    };
  }

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params, preview }) => {
  const slug = params.slug;
  const client = preview ? contentful.previewClient : contentful.client;

  const announcement = await client.getEntries({
    content_type: "announcements",
    "fields.slug[match]": slug,
  });

  const moreAnnouncements = await client.getEntries({
    content_type: "announcements",
    limit: 8,
  });

  return {
    props: {
      announcement: announcement.items[0],
      moreAnnouncements: [...moreAnnouncements.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
};

const Announcement = ({ announcement, moreAnnouncements, preview }) => {
  return (
    <Layout preview={preview}>
      <PageHeader
        pageName={announcement.fields.title}
        breadCrumb={formatDateAndTime(announcement.fields.date, "day")}
      />
      <ContentContainer>
        <article className="col-span-9 rounded-lg bg-seabreeze-500 px-4">
          <span className="mt-4 inline-flex items-center rounded-md bg-neon-orange-100 px-2 py-1 text-sm font-semibold text-neon-orange-600 ring-1 ring-inset ring-neon-orange-500/10">
            {announcement.fields.department}
          </span>
          {documentToReactComponents(announcement.fields.content, options)}
        </article>
        <aside className="relative col-span-3">
          <div className="sticky top-10 rounded bg-hazard-blue-100 px-2 py-3 text-hazard-blue-600 ring-1 ring-inset ring-hazard-blue-600">
            <h3 className="mb-2 text-lg font-semibold">More Announcements</h3>
            <ol className="flex flex-col gap-2">
              {moreAnnouncements.map((announcement) => (
                <li key={announcement.sys.id}>
                  <Link
                    href={
                      announcement.fields.linkIsCustom
                        ? announcement.fields.slug
                        : `/app/resources/${announcement.fields.slug}`
                    }
                    className="line-clamp-1"
                  >
                    {announcement.fields.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </ContentContainer>
    </Layout>
  );
};

export default Announcement;
