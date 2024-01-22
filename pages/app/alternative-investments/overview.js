import React from "react";
import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/Internal-Pages/PageHeader/PageHeader";
import Head from "next/head";
import OverviewVideo from "../../../components/App/Internal-Pages/overview/OverviewVideo/OverviewVideo";
import DepartmentAnnouncements from "../../../components/App/Internal-Pages/overview/DepartmentAnnouncements/DepartmentAnnouncements";
import ContentLibrary from "../../../components/App/Internal-Pages/overview/ContentLibrary/ContentLibrary";
import TeamDirectory from "../../../components/App/Internal-Pages/overview/TeamDirectory/TeamDirectory";

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
          <OverviewVideo />
          <DepartmentAnnouncements department={"alts"} />
          <ContentLibrary />
          <TeamDirectory department="Alternative Investments" />
        </div>
      </Layout>
    </>
  );
};

export default overview;
