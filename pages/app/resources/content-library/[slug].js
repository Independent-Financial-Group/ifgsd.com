import React, { useState } from "react";

import Head from "next/head";
import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import OverviewVideo from "components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { VideoCameraIcon } from "@heroicons/react/24/outline";

import * as contentful from "utils/contentful";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function getStaticPaths() {
  const slugs = await contentful.client.getEntries({
    content_type: "contentLibrary",
    "fields.isDirectLink": false,
    select: "fields.slug",
  });

  return {
    paths: slugs.items.map((slug) => {
      return {
        params: {
          slug: slug.fields.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview }) {
  const slug = params.slug;
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "contentLibrary",
    "fields.slug[match]": slug,
  });

  return {
    props: {
      content: data.items[0] || null,
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const index = ({ content, preview }) => {
  // const [pageType, setPageType] = useState(content.fields.category);

  return (
    <>
      <Head>
        <title>{!null && content.fields.title} | Content Library</title>
      </Head>
      <PageHeader
        pageName={content.fields.title}
        breadCrumb="Content Library"
      />
      <Layout preview={preview}>
        <ContentContainer>
          {content.fields.category == "Video" ? (
            <section className="col-span-full gap-5 xl:grid xl:grid-cols-2">
              <article className="rounded bg-white p-2">
                <Markdown
                  className="text-sm leading-7 [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_p]:mb-2"
                  remarkPlugins={[remarkGfm]}
                >
                  {content.fields.text}
                </Markdown>
              </article>
              <div className="col-span-1">
                <ReactPlayer
                  width={"100"}
                  url={content.fields.linkToVideo}
                  controls
                />
              </div>
            </section>
          ) : null}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
