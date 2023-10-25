import React, { useEffect } from "react";

import Link from "next/link";

const BranchAnnouncement = ({ newBranch }) => {
  const fields = newBranch.fields;

  return (
    <div className="relative h-[500px] overflow-hidden rounded-[40px] bg-blue-wave-700/10 text-seabreeze-500">
      <div className="h-full rounded-[40px] bg-hazard-blue-500/50 px-4 py-8 sm:py-16 lg:px-6">
        <div className="absolute inset-0 -z-50 object-cover">
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/862579473?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <h2 className="text-4xl font-bold uppercase lg:text-7xl">
            IFG Welcomes
          </h2>
          <p className="my-4 text-lg font-semibold lg:text-xl">
            {`${fields.repNames[0]} ${fields.repNames[1]}`} with {fields.dba}{" "}
            from {fields.officeLocation}
          </p>
          <Link
            className="rounded-lg bg-neon-orange-500 px-4 py-2 font-bold"
            href="#"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BranchAnnouncement;
