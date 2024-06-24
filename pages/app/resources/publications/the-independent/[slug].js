import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../../../../../components/App/Layout/Layout";
import ContentContainer from "../../../../../components/App/ContentContainer/ContentContainer";
import PreviewBanner from "../../../../../components/App/PreviewBanner/PreviewBanner";

import * as contentful from "../../../../../utils/contentful";
import PageHeader from "../../../../../components/App/InternalPages/PageHeader/PageHeader";
import { formatDateAndTime } from "@contentful/f36-datetime";

import IssuuPublication from "../../../../../components/App/Resources/IssuuPublication/IssuuPublication";

export async function getStaticPaths() {
  const response = await contentful.client.getEntries({
    content_type: "publications",
    "fields.publicationType": "Independent",
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

  const articles = await client.getEntries({
    content_type: "publications",
    "fields.slug[match]": slug,
  });

  return {
    props: {
      article: articles.items[0],
      preview: preview || false,
    },
    revalidate: 10,
  };
};

const Article = ({ article, preview }) => {
  return (
    <>
      <Head>
        <title>{article.fields.title} | The Independent</title>
      </Head>
      <PageHeader
        pageName={article.fields.title}
        breadCrumb={formatDateAndTime(article.fields.date, "day")}
      />
      <Layout preview={preview}>
        <IssuuPublication src={article.fields.embedSourceLink} />
      </Layout>
    </>
  );
};

export default Article;
