import React, { useState, useEffect } from "react";
import { MegaphoneIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { formatDateAndTime } from "@contentful/f36-datetime";

const DepartmentAnnouncements = ({ data, name }) => {
  return (
    <div className="col-span-full h-[500px] rounded-lg bg-white shadow">
      <div className="rounded-t-lg bg-hazard-blue-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <MegaphoneIcon className="h-5 w-5" />
          What's Happening in {name}?
        </h2>
      </div>
      <div className="h-[90%] overflow-y-auto pl-4 pr-1 pt-4">
        {!data && (
          <div className="flex h-full items-center justify-center text-center text-xl font-semibold text-gray-300">
            <h3>No Updates</h3>
          </div>
        )}
        {data && (
          <ol className="divide-y divide-gray-100">
            {data.map((announcement) => (
              <li key={announcement.sys.id} className="flex gap-x-4 px-3 py-5">
                <div>
                  {announcement.fields.mediaThumbnail && (
                    <img
                      src={`https:${announcement.fields.mediaThumbnail.fields.file.url}`}
                      alt={announcement.fields.mediaThumbnail.fields.title}
                      className="aspect-video max-w-[300px] object-contain"
                    />
                  )}
                </div>
                <div className="w-full">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {announcement.fields.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {formatDateAndTime(announcement.fields.date, "day")}
                  </p>
                  <p className="my-2 text-xs leading-7 text-gray-900">
                    {announcement.fields.excerpt}
                  </p>
                  <Link
                    href={
                      announcement.fields.linkIsCustom
                        ? announcement.fields.slug
                        : `/app/resources/announcements/${announcement.fields.slug}`
                    }
                    className="flex items-center justify-end gap-1 text-xs font-semibold hover:text-neon-orange-600"
                  >
                    Read More <ChevronRightIcon className="h-3" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default DepartmentAnnouncements;
