import React from "react";

import { MegaphoneIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// NEXT IMPORTS
import Link from "next/link";

const LatestAnnouncements = () => {
  const announcements = [
    {
      title: "title",
      date: "December 7, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis...",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis...",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis...",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis...",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis...",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis...",
      slug: "#",
    },
    {
      title: "title",
      date: "December 7, 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis...",
      slug: "#",
    },
  ];

  return (
    <div className="col-span-3 h-[500px] rounded-lg bg-white pl-4 pr-1 pt-4 shadow">
      <h2 className="mb-5 flex gap-2 font-bold text-hazard-blue-500">
        <MegaphoneIcon className="h-5 w-5" />
        Latest Announcements
      </h2>
      <ol className="h-[90%] divide-y divide-gray-100 overflow-y-auto">
        {announcements.map((announcement) => (
          <li key={announcement.title} className="flex gap-x-4 px-3 py-5">
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {announcement.title}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {announcement.date}
              </p>
              <p className="my-2 text-xs leading-7 text-gray-900">
                {announcement.excerpt}
              </p>
              <Link
                href="#"
                className="flex items-center justify-end gap-1 text-xs font-semibold hover:text-neon-orange-600"
              >
                Read More <ChevronRightIcon className="h-3" />
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LatestAnnouncements;
