import React, { useState } from "react";

import { UserGroupIcon } from "@heroicons/react/24/outline";

const ReferralProgramTool = () => {
  const [currentGDC, setCurrentGDC] = useState(0);

  const handleRangeChange = (e) => {
    const value = e.target.value;

    setCurrentGDC(value);
  };

  return (
    <div className="col-span-8 w-full rounded-lg bg-white shadow">
      <div className="mb-5 rounded-t-lg bg-neon-orange-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <UserGroupIcon class="h-5 w-5" />
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
                the recruit’s gross production.
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs italic text-gray-500">
              Get 2% on the first year GDC of qualified referrals! Use the
              calculator below to see how much you can earn just by making an
              introduction.
            </p>
            <div className="mt-5">
              <div>
                <div className="relative">
                  <label className="text-sm font-semibold text-gray-500">
                    Prospects Current GDC
                  </label>
                  <p className="font-bold text-bright-blue-500">
                    $
                    {currentGDC
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                  <input
                    onChange={handleRangeChange}
                    className="w-full"
                    type="range"
                    value={currentGDC}
                    min={0}
                    max={3000000}
                  />
                  <span class="absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400">
                    Min ($0)
                  </span>
                  <span class="absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400">
                    Max ($300,000,000)
                  </span>
                </div>
                {currentGDC > 150000 && (
                  <div className="mt-10 ">
                    <p className="text-lg font-semibold text-neon-orange-500">
                      Your Potential Commission
                    </p>
                    <p className="font-semibold">
                      $
                      {Math.floor(currentGDC * 0.02)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <button className="rounded-lg bg-neon-orange-500 p-2 font-bold text-seabreeze-500">
                  fill out form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgramTool;
