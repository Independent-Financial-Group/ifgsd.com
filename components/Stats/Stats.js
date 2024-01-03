import React from "react";

// NEXT IMPORTS
import Image from "next/image";

// GRAPHICS
import laurel from "../../public/_home/graphics/laurel-branded-200.png";

import { motion } from "framer-motion";

const Stats = ({ content }) => {
  return (
    <>
      <div className="relative lg:mt-60">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute -top-1/2 left-1/2 -z-10 -translate-x-1/2 py-8 text-center font-bold text-[#E2E7EB] md:text-[230px] lg:py-0 lg:text-left lg:text-[255px]"
        >
          Rankings
        </motion.h2>
        <h3 className="mb-5 text-center text-4xl font-bold text-neon-orange-500">
          Built to be the Best
        </h3>
        <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-5">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image src={laurel} alt="award graphic" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-neon-orange-500">
                #17
              </p>
            </div>
            <div>
              <a
                href="/#award-reference-1"
                className="block text-center text-xl font-bold text-neon-orange-500"
              >
                Largest Independent Broker-Dealer <sup>1</sup>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image src={laurel} alt="award graphic" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-neon-orange-500">
                #2
              </p>
            </div>
            <div>
              <a
                href="/#award-reference-2"
                className="block text-center text-xl font-bold text-neon-orange-500"
              >
                Overall Satisfaction <sup>2</sup>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image src={laurel} alt="award graphic" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-neon-orange-500">
                #7
              </p>
            </div>
            <div>
              <a
                href="/#award-reference-3"
                className="block text-center text-xl font-bold text-neon-orange-500"
              >
                Fastest-Growing Privately Held Company in San Diego <sup>3</sup>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image src={laurel} alt="award graphic" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-neon-orange-500">
                9X
              </p>
            </div>
            <div>
              <a
                href="/#award-reference-4"
                className="block text-center text-xl font-bold text-neon-orange-500"
              >
                Inc. 5000 Fastest Growing Companies Finalist <sup>4</sup>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image src={laurel} alt="award graphic" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-bold text-neon-orange-500">
                Top 10
              </p>
            </div>
            <div>
              <a
                href="/#award-reference-56"
                className="block text-center text-xl font-bold text-neon-orange-500"
              >
                In Total Advisor Payout Among Independent Broker-Dealers{" "}
                <sup>5</sup>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image src={laurel} alt="award graphic" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-bold text-neon-orange-500">
                Top 10
              </p>
            </div>
            <div>
              <a
                href="/#award-reference-56"
                className="block text-center text-xl font-bold text-neon-orange-500"
              >
                In Revenue Growth Among Independent Broker-Dealers <sup>6</sup>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
