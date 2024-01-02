import React, { useState } from "react";

// IMPORT COMPONENTS
import Button from "../Button/Button";

const JobBoard = ({ jobs }) => {
  const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const options = { year: "numeric", month: "long", day: "numeric" };

  if (!jobs) {
    return (
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-center">
        <p className="text-5xl font-bold text-neon-orange-500">
          Thank you for your interest.
        </p>
        <h3 className="my-5 text-2xl font-bold text-gray-300">
          We do not have any current positions open.
        </h3>
      </div>
    );
  }

  return (
    <>
      <h3 className="mb-12 text-4xl font-bold text-neon-orange-500">
        {jobs.length} Open Positions
      </h3>
      <ul className="flex flex-col gap-y-4">
        {jobs.map((job) => {
          return (
            <li className="rounded-xl bg-white px-5 py-8" key={job.id}>
              <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:items-center">
                <div>
                  <p className="text-base font-bold text-gray-300">
                    {job.department.label}
                  </p>
                  <h3 className="text-3xl font-bold text-hazard-blue-500">
                    {job.title.label}
                  </h3>
                  <p className="text-gray-500">
                    {new Date(job.postedDate).toLocaleString("en-US", options)}
                  </p>
                </div>
                <div className="justify-self-end">
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    {job.location.label}
                  </p>
                </div>
                <div className="justify-self-end">
                  <Button href={job.postingUrl} type={"primary"}>
                    Apply
                  </Button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default JobBoard;
