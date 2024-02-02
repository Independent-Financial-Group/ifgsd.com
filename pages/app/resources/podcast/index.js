import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../../components/App/ContentContainer/ContentContainer";

const index = () => {
  return (
    <>
      <Head>
        <title>The Playbook | Podcast</title>
      </Head>
      <Layout>
        <PageHeader breadCrumb="IFG's Podcast Series" pageName="The Playbook" />
        <ContentContainer>
          <section className="col-span-12 items-center xl:grid xl:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-hazard-blue-500">
                Real Time Updates
              </h2>
              <p className="mt-5 max-w-prose text-lg leading-7">
                Join us for real-time updates from IFG leadership, valuable
                insights from our partners, answers to your questions, and much
                more.
              </p>
            </div>
            <img src="https://new.ifgsd.com/wp-content/uploads/2023/04/thePlaybookScreencap-compressed-1-1024x596.webp" />
          </section>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
