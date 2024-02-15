import React, { useState, useEffect } from "react";
import Layout from "../../../../../components/App/Layout/Layout";
import PageHeader from "../../../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../../../components/App/ContentContainer/ContentContainer";
import BlogCardSimple from "../../../../../components/App/BlogCardSimple/BlogCardSimple";

// CONTENTFUL IMPORTS
import * as contentful from "../../../../../utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "marketCommentary",
    "fields.topic[match]": "Portfolio Construction Research",
    order: "-fields.date",
  });

  return {
    props: {
      researchArticles: [...data.items],
      preview: preview || false,
      revalidate: 10,
    },
  };
}

const index = ({ preview, researchArticles }) => {
  return (
    <Layout preview={preview}>
      <PageHeader
        pageName="Portfolio Construction Research"
        breadCrumb="Portfolio Construction > Market Commentary"
      />
      <ContentContainer>
        <ol className="col-span-12 gap-5 xl:grid xl:grid-cols-3">
          {researchArticles.map((article) => {
            return (
              <li key={article.sys.id}>
                <BlogCardSimple
                  title={article.fields.title}
                  date={article.fields.date}
                  thumbnail={
                    article.fields.thumbnail
                      ? article.fields.thumbnail.fields.file.url
                      : ""
                  }
                  slug={`/app/portfolio-construction/market-commentary/portfolio-construction-research/${article.fields.slug}`}
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
