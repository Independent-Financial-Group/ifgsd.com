import React from "react";
import Sidebar from "../../components/App/Sidebar/Sidebar";
import { useUser } from "@clerk/nextjs";

const index = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="dark:bg-slate-900 leading-default text-slate-500 m-0 bg-gray-50 font-sans text-base font-normal antialiased">
      <Sidebar userInfo={user} />
    </div>
  );
};

export default index;
