import React from "react";
import { useUser } from "@clerk/nextjs";
import Layout from "../../components/App/Layout/Layout";
import DashboardHeader from "../../components/App/Dashboard/DashboardHeader/DashboardHeader";
import QuickLinks from "../../components/App/Dashboard/QuickLinks/QuickLinks";
import LatestAnnouncements from "../../components/App/Dashboard/LatestAnnouncements/LatestAnnouncements";
import UpcomingEvents from "../../components/App/Dashboard/UpcomingEvents/UpcomingEvents";
import ReferralProgramTool from "../../components/App/ReferralProgramTool/ReferralProgramTool";
import AdSquare from "../../components/App/Dashboard/AdSquare/AdSquare";

const index = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <h1>Test</h1>;
  }

  return (
    <Layout>
      <DashboardHeader />
      <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
        <QuickLinks />
        <LatestAnnouncements />
        <UpcomingEvents />
        <ReferralProgramTool />
        <AdSquare />
      </div>
    </Layout>
  );
};

export default index;
