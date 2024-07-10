import React from "react";
import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import Head from "next/head";

export async function getStaticProps({ preview }) {
  return {
    props: {
      preview: preview || false,
    },
  };
}

const overview = ({ preview }) => {
  return (
    <>
      <Head>
        <title>Service Status | Information Technology</title>
        <meta
          name="description"
          content="An overview of the Alternative Investments Department at IFG."
        />
      </Head>
      <PageHeader
        breadCrumb={"Information Technology"}
        pageName={"Service Status"}
      />
      <Layout preview={preview}>
        <iframe
          src="https://status.ifgsd.com/"
          frameborder="0"
          className="h-[calc(100vh-200px)] w-[100%]"
        />
      </Layout>
    </>
  );
};

export default overview;
