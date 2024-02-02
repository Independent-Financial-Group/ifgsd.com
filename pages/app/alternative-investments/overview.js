import React from "react";
import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import Head from "next/head";
import OverviewVideo from "../../../components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import DepartmentAnnouncements from "../../../components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import ContentLibrary from "../../../components/App/InternalPages/Overview/ContentLibrary/ContentLibrary";
import TeamDirectory from "../../../components/App/InternalPages/Overview/TeamDirectory/TeamDirectory";
import ProductAdBanner from "../../../components/App/InternalPages/Overview/ProductAdBanner/ProductAdBanner";

const overview = () => {
  return (
    <>
      <Head>
        <title>Overview | Alternative Investments</title>
        <meta
          name="description"
          content="An overview of the Alternative Investments Department at IFG."
        />
      </Head>
      <Layout>
        <PageHeader
          pageName={"Alternative Investments Overview"}
          headerText={
            "Within the Alternative Investments web pages, you have access to DPP, REIT and 1031 offerings as well as latest news."
          }
        />
        <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
          <OverviewVideo url="https://vimeo.com/245828169?share=copy" />
          <DepartmentAnnouncements department={"alts"} />
          <ProductAdBanner
            url={
              "https://images.ctfassets.net/9lvru9ro1ti1/2mtjSuITOLE31fF5OV45XY/354efb69633de440ea2533a25c7f4220/sealy_banner_ad_2023.jpg"
            }
          />
          <ContentLibrary />
          <TeamDirectory department="Alternative Investments" />
        </div>
      </Layout>
    </>
  );
};

export default overview;
