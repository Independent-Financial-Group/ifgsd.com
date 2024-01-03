import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex h-screen flex-col-reverse items-center justify-center gap-16 px-4 py-24 outline md:gap-28 md:px-44 md:py-20 lg:flex-row lg:px-24 lg:py-24">
      <div className="max-w-screen-xl">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-2xl font-bold text-gray-800">
                Looks like the page you're looking for doesn't exist!
              </h1>
              <p className="my-8 text-gray-800">
                Sorry about that! Please visit our hompage to get where you need
                to go.
              </p>
              <Link
                href="/"
                className="md my-6 rounded border bg-neon-orange-500 px-8 py-4 text-center text-white hover:bg-neon-orange-700 focus:outline-none focus:ring-2 focus:ring-neon-orange-700 focus:ring-opacity-50 sm:w-full lg:w-auto"
              >
                Take me there!
              </Link>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
};

export default Custom404;
