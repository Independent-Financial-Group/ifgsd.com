import React from "react";
import { useUser } from "@clerk/nextjs";
import Layout from "../../components/App/Layout/Layout";
import DashboardHeader from "../../components/App/Dashboard/DashboardHeader/DashboardHeader";
import QuickLinks from "../../components/App/Dashboard/QuickLinks/QuickLinks";
import LatestAnnouncements from "../../components/App/Dashboard/LatestAnnouncements/LatestAnnouncements";
import UpcomingEvents from "../../components/App/Dashboard/UpcomingEvents/UpcomingEvents";

const index = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <h1>Test</h1>;
  }

  return (
    <Layout>
      <DashboardHeader />
      <div className="my-10 grid grid-cols-12 gap-5 px-8">
        <QuickLinks />
        <LatestAnnouncements />
        <UpcomingEvents />
      </div>
    </Layout>
  );
};

export default index;
