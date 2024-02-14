import React from "react";
import Link from "next/link";

import { formatDateAndTime } from "@contentful/f36-datetime";

const BlogCardSimple = ({
  date,
  title,
  excerpt,
  slug = "#",
  thumbnail,
  edition,
  colSpan,
  inNewTab,
}) => {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-lg shadow transition hover:shadow-lg col-span-${colSpan}`}
    >
      <img
        alt="Office"
        src={`https:${thumbnail}`}
        className="h-56 w-full object-cover"
      />

      <div className="flex flex-grow flex-col bg-white p-4 sm:p-6">
        {date && (
          <time datetime="2022-10-10" className="block text-xs text-gray-500">
            {date && formatDateAndTime(date, "day")}
          </time>
        )}

        {edition && (
          <span className="inline-flex w-fit items-center rounded-full bg-hazard-blue-100 px-2 py-1 text-xs font-medium text-hazard-blue-800 ring-1 ring-inset ring-hazard-blue-600/20">
            {edition}
          </span>
        )}

        {inNewTab && (
          <a href={slug} target="_blank" rel="noreferrer noopener">
            <h3 className="mt-0.5 line-clamp-2 text-lg text-gray-900 hover:text-hazard-blue-500">
              {title}
            </h3>
          </a>
        )}

        {!inNewTab && (
          <Link href={slug}>
            <h3 className="mt-0.5 line-clamp-2 text-lg text-gray-900 hover:text-hazard-blue-500">
              {title}
            </h3>
          </Link>
        )}

        <p className="mt-auto line-clamp-3 text-sm/relaxed leading-6 text-gray-500">
          {excerpt}
        </p>
      </div>
    </article>
  );
};

export default BlogCardSimple;
