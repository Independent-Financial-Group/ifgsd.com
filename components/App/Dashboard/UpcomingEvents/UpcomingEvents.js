import React, { useState, useEffect } from "react";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// CONTENTFUL IMPORTS
import { formatDateAndTime } from "@contentful/f36-datetime";
import * as contentful from "../../../../utils/contentful";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import InfiniteScroll from "react-infinite-scroll-component";

const UpcomingEvents = ({ preview }) => {
  const [events, setEvents] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  const [page, setPage] = useState(1);
  const todaysDate = new Date().toJSON();

  const getEvents = async () => {
    const fetchLimit = 3 * page;
    const client = preview ? contentful.previewClient : contentful.client;

    const data = await client
      .getEntries({
        content_type: "events",
        order: "fields.date",
        "fields.date[gt]": todaysDate,
        limit: fetchLimit,
      })
      .then((response) => {
        setTotalLength(response.total);
        setEvents([...response.items]);
        setPage((prevState) => prevState + 1);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="col-span-5 h-[500px] rounded-lg bg-white shadow">
      <div className="rounded-t-lg bg-neon-orange-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <CalendarIcon className="h-5 w-5" />
          Upcoming Events
        </h2>
      </div>
      <div
        className="h-[90%] overflow-y-auto pl-4 pr-1 pt-4"
        id="upComingEventsScrollingDiv"
      >
        {events.length == 0 ? (
          <div className="flex h-full flex-col items-center justify-center">
            <h3 className="font-bold text-gray-500">No Upcoming Events</h3>
          </div>
        ) : (
          <ol className="divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
            <InfiniteScroll
              dataLength={events.length}
              scrollableTarget="upComingEventsScrollingDiv"
              next={getEvents}
              className="divide-y"
              loader={
                <p className="my-5 text-center text-xs text-gray-500">
                  Loading More...
                </p>
              }
              hasMore={events.length < totalLength}
              endMessage={
                <p className="py-5 text-center text-xs font-semibold text-neon-orange-500">
                  No More Events...
                </p>
              }
            >
              {events.map((event) => (
                <li key={event.sys.id} className="flex-auto px-1 py-3">
                  <h3 className="text-sm font-semibold leading-7">
                    {event.fields.eventName}
                  </h3>
                  <div className="flex flex-col gap-2 text-xs">
                    <p className="flex items-center gap-1 text-xs">
                      <CalendarIcon className="h-5" />
                      {formatDateAndTime(event.fields.date, "full")}{" "}
                      {event.fields.hideEndDate
                        ? ""
                        : `-${formatDateAndTime(event.fields.endDate, "full")}`}
                    </p>
                    <p className="flex items-center gap-1 text-xs">
                      <MapPinIcon className="h-5" />
                      {event.fields.location}
                    </p>
                  </div>
                  <p className="my-5 text-xs">
                    <Markdown
                      className="my-5 text-xs leading-5 [&_a]:my-2 [&_a]:flex [&_a]:w-fit [&_a]:items-center [&_a]:gap-2 [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_a_img]:h-4 [&_a_img]:w-4 [&_em]:text-xs [&_em]:text-blue-wave-500 [&_h3]:text-base [&_h3]:font-semibold [&_p]:mb-2 [&_ul]:list-inside [&_ul]:list-disc"
                      remarkPlugins={[remarkGfm]}
                    >
                      {event.fields.description}
                    </Markdown>
                    {event.fields.registrationLink && (
                      <a
                        className="font-semibold text-neon-orange-500"
                        href={event.fields.registrationLink}
                      >
                        Register &rarr;
                      </a>
                    )}
                  </p>
                  <div className="grid grid-cols-3 items-start gap-2 text-center text-xs font-semibold">
                    <div className="my-2 rounded-full bg-hazard-blue-100 px-4 py-2 text-hazard-blue-500">
                      {event.fields.type}
                    </div>
                    <div className="my-2 rounded-full bg-neon-orange-100 px-4 py-2 text-neon-orange-500">
                      {event.fields.host}
                    </div>
                    <div className="my-2 rounded-full bg-gray-100 px-4 py-2 text-gray-500">
                      {event.fields.department}
                    </div>
                  </div>
                </li>
              ))}
            </InfiniteScroll>
          </ol>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
