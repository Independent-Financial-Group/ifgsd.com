import React, { useEffect } from "react";
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
    revalidate: 5,
  };
};

const Article = ({ article, preview }) => {
  return (
    <Layout preview={preview}>
      <PageHeader
        pageName={article.fields.title}
        breadCrumb={formatDateAndTime(article.fields.date, "day")}
      />
      <IssuuPublication src={article.fields.embedSourceLink} />
    </Layout>
  );
};

export default Article;
