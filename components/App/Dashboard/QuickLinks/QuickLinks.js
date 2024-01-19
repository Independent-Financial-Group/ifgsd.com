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
    <div className="col-span-6 rounded-lg bg-white shadow">
      <div className="mb-5 rounded-t-lg bg-bright-blue-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <LinkIcon className="h-5 w-5" />
          Quick Links
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-5">
          {quickLinks.map((link) => {
            return (
              <a
                href="#"
                className="flex flex-col items-center justify-center rounded-lg p-2 font-semibold text-gray-900 transition-all hover:bg-hazard-blue-300 hover:text-seabreeze-500"
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
    </div>
  );
};

export default QuickLinks;
