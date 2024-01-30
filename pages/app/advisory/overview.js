import React from "react";
import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import Head from "next/head";

const overview = () => {
  return (
    <>
      <Head>
        <title>Overview | Advisory</title>
        <meta
          name="description"
          content="An overview of the Alternative Investments Department at IFG."
        />
      </Head>
      <Layout>
        <PageHeader pageName={"Advisory Overview"} />
      </Layout>
    </>
  );
};

export default overview;
