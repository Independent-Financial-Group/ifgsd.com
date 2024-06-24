import React, { useState, useEffect } from "react";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../../components/App/ContentContainer/ContentContainer";
import Head from "next/head";
import BlogCardSimple from "../../../../components/App/BlogCardSimple/BlogCardSimple";

import * as contentful from "../../../../utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "education",
    "fields.department[match]": "Information Technology",
    order: "-fields.date",
  });

  return {
    props: {
      articles: [...data.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const overview = ({ articles, preview }) => {
  return (
    <>
      <Head>
        <title>Education | Information Technology</title>
        <meta
          name="description"
          content="Educational resources from the information technology department."
        />
      </Head>
      <PageHeader
        breadCrumb={"Information Technology"}
        pageName={"Education"}
      />
      <Layout preview={preview}>
        <ContentContainer>
          {articles.map((article) => {
            return (
              <BlogCardSimple
                title={article.fields.title}
                key={article.sys.id}
                excerpt={article.fields.excerpt}
                colSpan={"4"}
                slug={`/app/information-technology/education/${article.fields.slug}`}
              />
            );
          })}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
