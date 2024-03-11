import React, { useEffect } from "react";

import { useSession } from "next-auth/react";

const DashboardHeader = () => {
  const { data: session } = useSession();

  return (
    <header className="relative min-h-[20dvh] bg-[url('https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg')] bg-cover bg-no-repeat">
      <div className="flex min-h-[20dvh] flex-col justify-center bg-white/25 px-8 py-4 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-seabreeze-500">
          Hello, {session.user.name}!
        </h1>
        <p className=" text-pretty leading-7 text-seabreeze-500">
          This is a restricted area of our website dedicated solely to our
          valued independent representatives. Announcements sent to
          representatives of Independent Financial Group or posted on
          Independent Financial Group’s website are for internal use only. Do
          not forward, duplicate or distribute these announcements for personal
          or public use.
        </p>
      </div>
    </header>
  );
};

export default DashboardHeader;
