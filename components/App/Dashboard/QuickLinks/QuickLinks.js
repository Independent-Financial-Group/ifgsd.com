import React from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const QuickLinks = () => {
  const quickLinks = [
    {
      name: "Gateway",
    },
    {
      name: "Form CRS",
    },
    {
      name: "Podcast",
    },
    {
      name: "Alt. Investments",
    },
    {
      name: "Advisory",
    },
    {
      name: "Annuities",
    },
    {
      name: "Market Linked Products",
    },
    {
      name: "Commissions & Fees",
    },
    {
      name: "Technology",
    },
  ];

  return (
    <div className=" col-span-6 rounded-lg bg-white p-5 shadow">
      <h2 className="mb-5 flex gap-2 font-bold text-hazard-blue-500">
        <LinkIcon className="h-5 w-5" />
        Quick Links
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {quickLinks.map((link) => {
          return (
            <a
              href="#"
              className="flex flex-col items-center justify-center rounded-lg p-2 font-bold text-neon-orange-500 transition-all hover:bg-hazard-blue-300 hover:text-seabreeze-500"
            >
              <div>
                <LinkIcon className="mx-auto h-10" />
              </div>
              <div className="mt-5">
                <p className="w-full text-center">{link.name}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
