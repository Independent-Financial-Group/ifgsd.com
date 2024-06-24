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
    "fields.publicationType": "Connect",
    order: "-fields.date",
  });

  return {
    props: {
      connects: [...data.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const index = ({ connects, preview }) => {
  return (
    <>
      <Head>
        <title>IFG Connect | Publications</title>
      </Head>
      <PageHeader
        pageName="IFG Connect"
        breadCrumb="Resources > Publications"
      />
      <Layout preview={preview}>
        <ContentContainer>
          {connects.map((connect) => (
            <BlogCardSimple
              colSpan={"4"}
              title={connect.fields.title}
              slug={`${connect.fields.linkToConnect}`}
              thumbnail={connect.fields.thumbnail.fields.file.url}
              inNewTab
            />
          ))}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
