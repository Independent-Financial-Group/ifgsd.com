import React, { useEffect } from "react";

import { useSession } from "next-auth/react";

const DashboardHeader = () => {
  const { data: session } = useSession();

  console.log(session);

  return (
    <header className="relative min-h-[10dvh] bg-[url('https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg')] bg-cover bg-no-repeat lg:ml-72">
      <div className="flex min-h-[10dvh] flex-col justify-center bg-white/25 px-8 py-4 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-seabreeze-500">
          Hello, {session ? session.user.name : ""}!
        </h1>
      </div>
    </header>
  );
};

export default DashboardHeader;
