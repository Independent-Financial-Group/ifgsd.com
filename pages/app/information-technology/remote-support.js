import React from "react";
import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import Head from "next/head";

const overview = () => {
  return (
    <>
      <Head>
        <title>Remote Support | Information Technology</title>
        <meta
          name="description"
          content="An overview of the Alternative Investments Department at IFG."
        />
      </Head>
      <Layout>
        <PageHeader
          breadCrumb={"Information Technology"}
          pageName={"Remote Support"}
        />
        <iframe
          src="https://ifgsd.screenconnect.com/"
          frameborder="0"
          className="h-[calc(100vh-200px)] w-[100%]"
        />
      </Layout>
    </>
  );
};

export default overview;
