import React, { useEffect, useState } from "react";

import { MegaphoneIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import InfiniteScroll from "react-infinite-scroll-component";

// NEXT IMPORTS
import Link from "next/link";

// CONTENTFUL IMPORTS
import { formatDateAndTime } from "@contentful/f36-datetime";
import * as contentful from "../../../../utils/contentful";

const LatestAnnouncements = ({ preview }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  const [page, setPage] = useState(1);

  const getAnnouncements = async () => {
    const fetchLimit = 3 * page;

    const client = preview ? contentful.previewClient : contentful.client;

    const data = await client
      .getEntries({
        content_type: "announcements",
        order: "-fields.date",
        limit: fetchLimit,
      })
      .then((response) => {
        setTotalLength(response.total);
        setAnnouncements([...response.items]);
        setPage((prevState) => prevState + 1);
      });
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  return (
    <div className="col-span-6 h-[616px] rounded-lg bg-white shadow">
      <div className="rounded-t-lg bg-neon-orange-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <MegaphoneIcon className="h-5 w-5" />
          Latest Announcements
        </h2>
      </div>
      <div
        className="h-[90%] overflow-y-auto pl-4 pr-1 pt-4"
        id="latestAnnouncementsScrollingDiv"
      >
        <ol>
          <InfiniteScroll
            dataLength={announcements.length}
            scrollableTarget="latestAnnouncementsScrollingDiv"
            next={getAnnouncements}
            className="divide-y"
            loader={
              <p className="my-5 text-center text-xs text-gray-500">
                Loading More...
              </p>
            }
            hasMore={announcements.length < totalLength}
            endMessage={
              <p className="py-5 text-center text-xs font-semibold text-neon-orange-500">
                No More Announcements...
              </p>
            }
          >
            {announcements.map((announcement) => (
              <li
                key={announcement.fields.title}
                className="flex gap-x-4 px-3 py-5"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {announcement.fields.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {formatDateAndTime(announcement.fields.date, "day")}
                  </p>
                  <div className="flex gap-2">
                    {announcement.fields.priority && (
                      <div
                        class={`my-2 w-fit rounded-full ${
                          announcement.fields.priority == "High"
                            ? "bg-red-100"
                            : announcement.fields.priority == "Medium"
                            ? "bg-neon-orange-100"
                            : "bg-green-100"
                        } px-4 py-2 text-xs font-bold ${
                          announcement.fields.priority == "High"
                            ? "text-red-500"
                            : announcement.fields.priority == "Medium"
                            ? "text-neon-orange-500"
                            : "text-green-500"
                        }`}
                      >
                        {announcement.fields.priority} Priority
                      </div>
                    )}
                    {announcement.fields.mediaType && (
                      <div className="my-2 w-fit rounded-full bg-hazard-blue-100 px-4 py-2 text-xs font-bold text-hazard-blue-500">
                        {announcement.fields.mediaType}
                      </div>
                    )}
                    <div className="my-2 w-fit rounded-full bg-gray-100 px-4 py-2 text-xs font-bold text-gray-500">
                      {announcement.fields.department}
                    </div>
                  </div>
                  <p className="my-2 text-xs leading-7 text-gray-900">
                    {announcement.fields.excerpt}...
                  </p>
                  <div className="flex items-center justify-end">
                    <Link
                      href="#"
                      className="flex items-center gap-1 text-xs font-semibold hover:text-neon-orange-600"
                    >
                      Read More <ChevronRightIcon className="h-3" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </InfiniteScroll>
        </ol>
      </div>
    </div>
  );
};

export default LatestAnnouncements;
