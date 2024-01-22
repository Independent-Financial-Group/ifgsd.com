import React, { useEffect, useState } from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";

// CONTENTFUL IMPORTS
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const TeamDirectory = ({ department }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTeamMembers = async (department) => {
      const initialData = await client
        .getEntries({
          content_type: "companyDirectory",
          "fields.department[match]": department,
          order: "sys.createdAt",
        })
        .then((response) => {
          setData(response.items);
          setIsLoading(false);
          console.log(data);
        });
    };

    getTeamMembers(department);
  }, []);

  return (
    <div className="col-span-4 rounded-lg bg-white shadow">
      <div className="mb-5 rounded-t-lg bg-hazard-blue-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <UserGroupIcon className="h-5 w-5" />
          Your Alts Team
        </h2>
      </div>
      <ol className="divide-y divide-gray-100 px-4">
        {isLoading && (
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
        )}
        {!isLoading &&
          data.map((person) => {
            return (
              <li
                key={person.fields.eMail}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={`https:${person.fields.headshot.fields.file.url}`}
                    alt={person.fields.headshot.fields.title}
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.fields.fullName}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.fields.eMail}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {person.fields.title}
                  </p>
                </div>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default TeamDirectory;
