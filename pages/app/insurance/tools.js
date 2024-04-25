import React from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";

import * as contentful from "utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "tools",
  });

  return {
    props: {
      data: [...data.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const index = ({ data, preview }) => {
  console.log(data[1]);

  return (
    <>
      <Head>
        <title>Insurance Tools</title>
      </Head>
      <PageHeader pageName="Tools" breadCrumb="Insurance" />
      <Layout preview={preview}>
        <ContentContainer></ContentContainer>
      </Layout>
    </>
  );
};

export default index;
