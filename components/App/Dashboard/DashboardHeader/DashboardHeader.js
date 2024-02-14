import React from "react";

import { useUser } from "@clerk/nextjs";

const DashboardHeader = () => {
  const { user } = useUser();

  return (
    <header className="relative h-[20dvh] bg-[url('https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg')] bg-cover  bg-no-repeat">
      <div className="h-full bg-white/25 bg-cover px-8 py-4 backdrop-blur-md">
        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2">
          <h1 className="text-3xl font-bold text-seabreeze-500">
            {user.lastSignInAt ? "Welcome Back, " : "Hello, "}
            {user.firstName}!
          </h1>
          <p className=" text-pretty leading-7 text-seabreeze-500">
            This is a restricted area of our website dedicated solely to our
            valued independent representatives. Announcements sent to
            representatives of Independent Financial Group or posted on
            Independent Financial Group’s website are for internal use only. Do
            not forward, duplicate or distribute these announcements for
            personal or public use.
          </p>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
