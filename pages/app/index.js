import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/App/Layout/Layout";
import DashboardHeader from "../../components/App/Dashboard/DashboardHeader/DashboardHeader";
import QuickLinks from "../../components/App/Dashboard/QuickLinks/QuickLinks";
import LatestAnnouncements from "../../components/App/Dashboard/LatestAnnouncements/LatestAnnouncements";
import UpcomingEvents from "../../components/App/Dashboard/UpcomingEvents/UpcomingEvents";
import ReferralProgramTool from "../../components/App/ReferralProgramTool/ReferralProgramTool";
import AdSquare from "../../components/App/Dashboard/AdSquare/AdSquare";

import { useSession } from "next-auth/react";

export async function getStaticProps({ preview }) {
  return {
    props: {
      preview: preview || false,
    },
  };
}

const index = ({ preview }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(
      `use effect running on status updates for useSession: ${status}`,
    );
  }, [status]);

  console.log(
    `Session within the app page: ${JSON.stringify(session, null, 3)}`,
  );

  return (
    <>
      <Head>
        <title>Rep Portal | Independent Financial Group</title>
      </Head>
      <Layout preview={preview}>
        <DashboardHeader />
        <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
          <QuickLinks />
          <LatestAnnouncements preview={preview} />
          <UpcomingEvents preview={preview} />
          <AdSquare />
          <ReferralProgramTool />
        </div>
      </Layout>
    </>
  );
};

export default index;
