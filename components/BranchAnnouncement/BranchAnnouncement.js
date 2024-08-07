import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BranchAnnouncement = ({ newBranch }) => {
  const fields = newBranch.fields;

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative h-[500px] overflow-hidden rounded-[40px] bg-[url('https://images.pexels.com/photos/1556797/pexels-photo-1556797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat text-seabreeze-500 lg:bg-none"
    >
      <div className="h-full rounded-[40px] bg-hazard-blue-500/50 px-4 py-8 sm:py-16 lg:px-6">
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <h2 className="text-4xl font-bold uppercase lg:text-7xl">
            IFG Welcomes
          </h2>
          <p className="my-4 text-lg font-semibold lg:text-xl">
            {fields.repNames.map((name) => (
              <span>{name}</span>
            ))}{" "}
            with {fields.dba} from {fields.officeLocation}
          </p>
          {/* <Link
            className="rounded-lg bg-neon-orange-500 px-4 py-2 font-bold"
            href="#"
          >
            Read More
          </Link> */}
        </div>
        <div className="absolute inset-0 -z-50 hidden object-cover lg:block">
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/862579473?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1"
              allow="autoplay; fullscreen; picture-in-picture"
              suppressHydrationWarning
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
      </div>
    </motion.div>
  );
};

export default BranchAnnouncement;
