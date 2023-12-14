import React from "react";
import Sidebar from "../../components/App/Sidebar/Sidebar";
import { useUser } from "@clerk/nextjs";
import Layout from "../../components/App/Layout/Layout";
import DashboardHeader from "../../components/App/DashboardHeader/DashboardHeader";

const index = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <Layout>
      <DashboardHeader />
    </Layout>
  );
};

export default index;
