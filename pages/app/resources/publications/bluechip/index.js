import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../../../components/App/Layout/Layout";
import ContentContainer from "../../../../../components/App/ContentContainer/ContentContainer";
import PageHeader from "../../../../../components/App/InternalPages/PageHeader/PageHeader";
import BlogCardSimple from "../../../../../components/App/BlogCardSimple/BlogCardSimple";

import * as contentful from "../../../../../utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "publications",
    "fields.publicationType": "Blue Chip",
    order: "-fields.date",
  });

  return {
    props: {
      magazines: [...data.items],
      revalidate: 10,
      preview: preview || false,
    },
  };
}

const index = ({ magazines, preview }) => {
  return (
    <>
      <Head>
        <title>Blue Chip | Publications</title>
      </Head>
      <Layout preview={preview}>
        <PageHeader
          pageName="Blue Chip"
          breadCrumb="Resources > Publications"
        />
        <ContentContainer>
          {magazines.map((magazine) => (
            <BlogCardSimple
              colSpan={"4"}
              title={magazine.fields.title}
              slug={`/app/resources/publications/bluechip/${magazine.fields.slug}`}
              edition={magazine.fields.edition}
              thumbnail={magazine.fields.thumbnail.fields.file.url}
            />
          ))}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
