import React from "react";
import Sidebar from "../../components/App/Sidebar/Sidebar";
import { useUser } from "@clerk/nextjs";
import Layout from "../../components/App/Layout/Layout";

const index = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <Layout>
      <h1>Testing</h1>
    </Layout>
  );
};

export default index;
