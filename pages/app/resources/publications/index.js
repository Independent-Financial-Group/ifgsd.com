import React from "react";
import Head from "next/head";
import Layout from "../../../../components/App/Layout/Layout";
import ContentContainer from "../../../../components/App/ContentContainer/ContentContainer";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";

const index = () => {
  return (
    <>
      <Head>
        <title>Publications | Resources</title>
      </Head>
      <Layout>
        <PageHeader pageName="Publications" breadCrumb="Resources" />
        <ContentContainer>
          <div>
            <iframe
              allow="clipboard-write"
              sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
              allowfullscreen="true"
              src="https://e.issuu.com/embed.html?backgroundColor=%23ECF1F5&backgroundColorFullscreen=%23ECF1F5&d=independent_q4_2023_pub_final&hideIssuuLogo=true&hideShareButton=true&pageLayout=singlePage&showOtherPublicationsAsSuggestions=true&u=independentfinancialgroup"
            ></iframe>
          </div>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
