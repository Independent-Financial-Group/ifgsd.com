import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/App/Layout/Layout";
import DashboardHeader from "../../components/App/Dashboard/DashboardHeader/DashboardHeader";
import QuickLinks from "../../components/App/Dashboard/QuickLinks/QuickLinks";
import LatestAnnouncements from "../../components/App/Dashboard/LatestAnnouncements/LatestAnnouncements";
import UpcomingEvents from "../../components/App/Dashboard/UpcomingEvents/UpcomingEvents";
import ReferralProgramTool from "../../components/App/ReferralProgramTool/ReferralProgramTool";
import AdSquare from "../../components/App/Dashboard/AdSquare/AdSquare";
import Disclosure from "components/App/Dashboard/Disclosure/Disclosure";
import ContentLibrary from "components/App/InternalPages/Overview/ContentLibrary/ContentLibrary";

import { useSession } from "next-auth/react";

export async function getStaticProps({ preview }) {
  return {
    props: {
      preview: preview || false,
    },
  };
}

const index = ({ preview }) => {
  return (
    <>
      <Head>
        <title>Rep Portal | Independent Financial Group</title>
      </Head>
      <DashboardHeader />
      <Layout preview={preview}>
        <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
          <QuickLinks />
          <LatestAnnouncements preview={preview} />
          <UpcomingEvents preview={preview} />
          {/* <AdSquare /> */}
          <ContentLibrary
            fixedHeight
            colSpan={"col-span-7"}
            tileTitleColor="bg-neon-orange-500"
          />
          <ReferralProgramTool />
        </div>
      </Layout>
      <Disclosure />
    </>
  );
};

export default index;
