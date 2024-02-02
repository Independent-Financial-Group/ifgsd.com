import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import * as contentful from "../../../../../../utils/contentful";
import { formatDateAndTime } from "@contentful/f36-datetime";

const MarketResearch = () => {
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

  const [marketCommentary, setMarketCommentary] = useState([]);

  const getMarketCommentary = async () => {
    const data = await contentful.client
      .getEntries({
        content_type: "marketCommentary",
        order: "-fields.date",
      })
      .then((response) => setMarketCommentary([...response.items]));

    console.log(marketCommentary);
  };

  useEffect(() => {
    getMarketCommentary();
  }, []);

  return (
    <div className="col-span-4 h-[500px] rounded-lg bg-white shadow">
      <div className="rounded-t-lg bg-hazard-blue-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <MagnifyingGlassIcon className="h-5 w-5" />
          Market Commentary
        </h2>
      </div>
      <div className="h-[90%] overflow-y-auto pl-4 pr-1 pt-4">
        <ol className="divide-y divide-gray-100">
          {marketCommentary.map((article) => (
            <li key={article.sys.id} className="flex gap-x-4 px-3 py-5">
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {article.fields.title}
                </p>
                <div className="flex gap-2">
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {formatDateAndTime(article.fields.date, "day")}
                  </p>
                  <button className="inline-flex items-center rounded-full bg-hazard-blue-100 px-2 py-1 text-xs font-medium text-hazard-blue-500 ring-1 ring-inset ring-hazard-blue-500/10">
                    {article.fields.topic}
                  </button>
                </div>
                <p className="my-2 text-xs leading-7 text-gray-900">
                  {article.fields.excerpt}
                </p>
                <Link
                  href={``}
                  className="flex items-center justify-end gap-1 text-xs font-semibold hover:text-neon-orange-600"
                >
                  Read More <ChevronRightIcon className="h-3" />
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MarketResearch;
