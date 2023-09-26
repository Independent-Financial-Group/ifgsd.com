import React from "react";
import Link from "next/link";

import HomeSlideshow from "../HomeSlideshow/HomeSlideshow";

const Stats = ({ content }) => {
  return (
    <>
      <div className="relative lg:mt-60">
        <h2 className="absolute -top-full left-1/2 -translate-x-1/2 -z-10 py-8 text-center md:text-[230px] lg:text-[255px] font-bold text-[#E2E7EB] lg:py-0 lg:text-left">
          Rankings
        </h2>
        <h3 className="mb-5 text-center text-4xl font-bold text-neon-orange-500">
          Built to be the Best
        </h3>
        <dl className="flex font-bold">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <dt className="order-last mt-4 text-center text-xs text-neon-orange-500 lg:text-left lg:text-lg">
              Largest Independent Broker-Dealer*
            </dt>

            <dd>
              <img className="max-w-fit" src="/home/award-ribbon-1.png" />
            </dd>
          </div>

          <div className="flex flex-col items-center lg:flex-row">
            <dt className="order-last mt-4 text-center text-xs text-neon-orange-500 lg:text-left lg:text-lg">
              Overall Experience Satisfaction**
            </dt>

            <dd>
              <img className="max-w-fit" src="/home/award-ribbon-2.png" />
            </dd>
          </div>

          <div className="flex flex-col items-center lg:flex-row">
            <dt className="order-last mt-4 text-center text-xs text-neon-orange-500 lg:text-left lg:text-lg">
              Largest Privately Held Company in San Diego***
            </dt>

            <dd>
              <img className="max-w-fit" src="/home/award-ribbon-3.png" />
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default Stats;
