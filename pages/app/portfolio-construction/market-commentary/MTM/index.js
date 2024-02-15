import React, { useState, useEffect } from "react";
import Layout from "../../../../../components/App/Layout/Layout";
import PageHeader from "../../../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../../../components/App/ContentContainer/ContentContainer";
import BlogCardSimple from "../../../../../components/App/BlogCardSimple/BlogCardSimple";

import * as contentful from "../../../../../utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "marketCommentary",
    "fields.topic[match]": "Metrics that Matter",
    order: "-fields.date",
  });

  return {
    props: {
      metricsArticles: [...data.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const index = ({ metricsArticles, preview }) => {
  return (
    <Layout preview={preview}>
      <PageHeader
        pageName="Metrics that Matter"
        breadCrumb="Portfolio Construction > Market Commentary"
      />
      <ContentContainer>
        <ol className="col-span-12 gap-5 xl:grid xl:grid-cols-3">
          {metricsArticles.map((article) => {
            return (
              <li key={article.sys.id}>
                <BlogCardSimple
                  title={article.fields.title}
                  date={article.fields.date}
                  thumbnail={article.fields.thumbnail.fields.file.url}
                  slug={`/app/portfolio-construction/market-commentary/MTM/${article.fields.slug}`}
                  excerpt={article.fields.excerpt}
                />
              </li>
            );
          })}
        </ol>
      </ContentContainer>
    </Layout>
  );
};

export default index;
