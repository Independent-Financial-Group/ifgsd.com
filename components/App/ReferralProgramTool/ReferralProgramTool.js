import React, { useState } from "react";

import { UserGroupIcon } from "@heroicons/react/24/outline";

import ReferralProgramForm from "../ReferralProgramForm/ReferralProgramForm";

const ReferralProgramTool = () => {
  return (
    <div className="col-span-12 w-full rounded-lg bg-white shadow">
      <div className="mb-5 rounded-t-lg bg-neon-orange-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <UserGroupIcon className="h-5 w-5" />
          Advisor Referral Program
        </h2>
      </div>
      <div>
        <div className="p-4 xl:grid  xl:grid-cols-2 xl:gap-5">
          <div>
            <img
              src="https://images.ctfassets.net/9lvru9ro1ti1/0qYmRakTmoBJAMBwJZegu/4b1a9287c627a1936da26257e99425e4/advisor-referral-program-image.jpg"
              alt="advisor referral program"
              className="h-[200px] w-full rounded-lg object-cover shadow-md"
            />
            <h3 className="mt-5 font-semibold text-neon-orange-500">
              How it works
            </h3>
            <p className="text-sm leading-7">
              Complete the form to your right to submit your referral candidate.
              The IFG Recruiting team will be in touch to follow up and help
              move your candidate through the process of joining their new firm.
            </p>
            <div>
              <p className="text-sm">
                <span className="text-sm font-bold uppercase leading-7 text-hazard-blue-500">
                  Refer & recruit.
                </span>{" "}
                Refer a new representative and make a significant contribution
                by bringing them aboard.
              </p>
              <p className="my-2 text-sm">
                <span className=" font-bold uppercase leading-7 text-hazard-blue-500">
                  Recruit Produces $150,000+.
                </span>{" "}
                New advisor produces a minimum of $150,000 in gross commissions
                during his or her first 12 months with IFG.
              </p>
              <p className="text-sm">
                <span className="text-sm font-bold uppercase leading-7 text-hazard-blue-500">
                  Earn 2%.
                </span>{" "}
                As the referring representative, you will receive a 2% bonus on
                the recruit&apos;s gross production.
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs italic text-gray-500">
              Get 2% on the first year GDC of qualified referrals! Use the
              calculator below to see how much you can earn just by making an
              introduction.
            </p>
            <ReferralProgramForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgramTool;
