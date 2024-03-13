import React, { useState } from "react";

import Head from "next/head";
import Layout from "components/App/Layout/Layout";

import * as contentful from "utils/contentful";

export async function getStaticPaths() {
  const slugs = await contentful.client.getEntries({
    content_type: "contentLibrary",
    "fields.isDirectLink[in]": false,
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
      content: data.items[0],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const index = ({ content, preview }) => {
  const [pageType, setPageType] = useState(content.fields.category);

  return (
    <>
      <Head>
        <title>{content.fields.title} | Content Library</title>
      </Head>
      <Layout preview={preview}></Layout>
    </>
  );
};

export default index;
