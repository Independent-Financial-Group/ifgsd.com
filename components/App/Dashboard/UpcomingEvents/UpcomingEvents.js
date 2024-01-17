import React from "react";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const UpcomingEvents = () => {
  const events = [
    {
      title: "title",
      date: "December 7, 2023",
      location: "Webinar",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      location: "Webinar",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      location: "Webinar",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      location: "Webinar",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      location: "Webinar",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      location: "Webinar",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      location: "Webinar",
      slug: "#",
    },
  ];

  return (
    <div className="col-span-3 h-[500px] rounded-lg bg-white shadow">
      <div className="bg-bright-blue-500 rounded-t-lg py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <CalendarIcon className="h-5 w-5" />
          Upcoming Events
        </h2>
      </div>
      <div className="h-[90%] overflow-y-auto pl-4 pr-1 pt-4">
        <ol className="mt-5  divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {events.map((event) => (
            <li key={event.title} className="flex-auto px-1 py-3">
              <h3 className="text-sm font-semibold leading-7">{event.title}</h3>
              <div className="flex gap-5 divide-x divide-gray-500 text-xs leading-8">
                <p className="flex items-center gap-1">
                  <CalendarIcon className="h-5" />
                  {event.date}
                </p>
                <p className="flex items-center gap-1 pl-4">
                  <MapPinIcon className="h-5" />
                  {event.location}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default UpcomingEvents;
