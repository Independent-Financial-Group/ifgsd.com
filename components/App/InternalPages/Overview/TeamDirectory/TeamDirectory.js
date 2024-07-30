import React, { useEffect, useState } from "react";
import {
  UserGroupIcon,
  EnvelopeOpenIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

// CONTENTFUL IMPORTS
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const TeamDirectory = ({ data, name, colSpan }) => {
  return (
    <div
      className={`${
        colSpan ? colSpan : "col-span-8"
      } h-[500px] rounded-lg bg-white shadow`}
    >
      <div className="rounded-t-lg bg-hazard-blue-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <UserGroupIcon className="h-5 w-5" />
          Your {name} Team
        </h2>
      </div>
      <ol className="h-[90%] divide-y divide-gray-100 overflow-y-auto px-4">
        {/* {isLoading && (
          <>
            <div class="w-full rounded-md p-4">
              <div class="flex animate-pulse space-x-4">
                <div class="h-10 w-10 rounded-full bg-gray-200"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 rounded bg-gray-200"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                      <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                    </div>
                    <div class="h-2 rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full rounded-md p-4">
              <div class="flex animate-pulse space-x-4">
                <div class="h-10 w-10 rounded-full bg-gray-200"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 rounded bg-gray-200"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                      <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                    </div>
                    <div class="h-2 rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full rounded-md p-4">
              <div class="flex animate-pulse space-x-4">
                <div class="h-10 w-10 rounded-full bg-gray-200"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 rounded bg-gray-200"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                      <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                    </div>
                    <div class="h-2 rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )} */}
        {data.map((person) => {
          return (
            <li
              key={person.fields.eMail}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-20 w-20 flex-none rounded-full bg-gray-50"
                  src={`https:${person.fields.headshot.fields.file.url}`}
                  alt={person.fields.headshot.fields.title}
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-base font-semibold leading-6 text-neon-orange-500">
                    {person.fields.fullName} {person.fields.lastName}
                  </p>
                  <p className="text-sm italic leading-6 text-gray-800">
                    {person.fields.title}
                  </p>
                  <div className="mt-1 flex items-center gap-1 truncate text-xs leading-5 text-gray-500">
                    <EnvelopeOpenIcon className="h-4 w-4" />
                    <p>{person.fields.eMail}</p>
                  </div>
                  <div className="mt-1 flex items-center gap-1 truncate text-xs leading-5 text-gray-500">
                    <PhoneIcon className="h-4 w-4" />
                    <p>(800) 269 - 1903 x{person.fields.extension}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TeamDirectory;
