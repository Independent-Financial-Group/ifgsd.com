import React, { useState } from "react";

const JobBoard = ({ jobs }) => {
  const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const options = { year: "numeric", month: "long", day: "numeric" };
  console.log();

  return (
    <>
      <h3 className="mb-12 text-4xl font-bold text-blue-wave-500">
        {jobs.length} Positions Open
      </h3>
      <ul className="flex flex-col gap-y-4">
        {jobs.map((job) => {
          return (
            <li className="border-b-2 border-gray-200 py-4" key={job.id}>
              <div>
                <a href={job.postingUrl}>
                  <h3 className="text-2xl font-bold text-sunburst-500">
                    {job.title.label}
                  </h3>
                  <p>
                    <span className="font-semibold">Department</span>:{" "}
                    {job.department.label}
                  </p>
                  <p>
                    <span className="font-semibold">Location</span>:{" "}
                    {job.location.label}
                  </p>
                  <p>
                    <span className="font-semibold">Date Posted</span>:{" "}
                    {new Date(job.postedDate).toLocaleString("en-US", options)}
                  </p>
                </a>
                <p></p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default JobBoard;
