import React, { useState, useEffect } from "react";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// CONTENTFUL IMPORTS
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const MarketResearch = ({ featuredModels }) => {
  return (
    <div className="col-span-12 rounded-lg bg-white shadow">
      <div className="rounded-t-lg bg-hazard-blue-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <ChartPieIcon className="h-5 w-5" />
          Models at a Glance
        </h2>
      </div>
      <div className="px-4 py-4">
        <ul className=" md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 xl:gap-5">
          {featuredModels.map((model) => {
            return (
              <li>
                <img
                  className="mx-auto"
                  src="https://images.ctfassets.net/9lvru9ro1ti1/7kY9AYABsnOtX4PEzOpJMn/304af97306dadb4b0bb5e2b2b8028448/pie-chart.png"
                />
                <h3 className="text-center font-semibold">
                  {model.fields.name}
                </h3>
                <Link
                  className="mx-auto mt-5 block w-fit rounded bg-neon-orange-500 p-2 font-semibold text-seabreeze-500"
                  href={`/app/portfolio-construction/models/${model.fields.slug}`}
                >
                  Learn More
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          className="mx-auto mt-32 block w-fit rounded bg-hazard-blue-500 p-2 font-semibold text-seabreeze-500"
          href="/app/portfolio-construction/models"
        >
          See All Models
        </Link>
      </div>
    </div>
  );
};

export default MarketResearch;
