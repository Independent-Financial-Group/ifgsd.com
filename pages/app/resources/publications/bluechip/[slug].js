import React, { useEffect } from "react";
import Layout from "../../../../../components/App/Layout/Layout";
import Head from "next/head";
import ContentContainer from "../../../../../components/App/ContentContainer/ContentContainer";

import * as contentful from "../../../../../utils/contentful";
import PageHeader from "../../../../../components/App/InternalPages/PageHeader/PageHeader";
import { formatDateAndTime } from "@contentful/f36-datetime";

import IssuuPublication from "../../../../../components/App/Resources/IssuuPublication/IssuuPublication";

export async function getStaticPaths() {
  const response = await contentful.client.getEntries({
    content_type: "publications",
    "fields.publicationType": "Blue Chip",
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
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ params, preview, draftMode }) => {
  const slug = params.slug;
  const client =
    preview || draftMode ? contentful.previewClient : contentful.client;

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
        <title>{article.fields.title} | Blue Chip</title>
      </Head>
      <PageHeader
        pageName={article.fields.title}
        breadCrumb={formatDateAndTime(article.fields.date, "day")}
      />
      <Layout preview={preview}>
        <div className="col-span-full flex min-h-[calc(100vh-200px)] items-center">
          <IssuuPublication src={article.fields.embedSourceLink} />
        </div>
      </Layout>
    </>
  );
};

export default Article;
