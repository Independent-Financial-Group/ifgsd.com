import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { VideoCameraIcon } from "@heroicons/react/24/outline";

const OverviewVideo = ({ url }) => {
  return (
    <div className="col-span-6 rounded-lg bg-white shadow">
      <div className="mb-5 rounded-t-lg bg-hazard-blue-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <VideoCameraIcon className="h-5 w-5" />
          Introduction
        </h2>
      </div>
      <div className="px-4">
        <p className="text-sm leading-7 text-gray-700">
          Watch this introduction video for an overview of our department and
          what you can find here.
        </p>
        <ReactPlayer url={url} controls width={"100%"} />
      </div>
    </div>
  );
};

export default OverviewVideo;