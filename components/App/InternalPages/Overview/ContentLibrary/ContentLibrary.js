import React, { useEffect, useState } from "react";
import {
  BuildingLibraryIcon,
  ChevronRightIcon,
  LinkIcon,
  DocumentIcon,
  VideoCameraIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import * as contentful from "utils/contentful";
import { formatDateAndTime } from "@contentful/f36-datetime";

const ContentLibrary = ({ department, preview }) => {
  const [content, setContent] = useState([]);

  const getContent = async (department, preview) => {
    if (department) {
      const client = preview ? contentful.previewClient : contentful.client;
      const data = await client
        .getEntries({
          content_type: "contentLibrary",
          "fields.department[match]": department,
          order: "-fields.date",
        })
        .then((response) => {
          setContent([...response.items]);
        });
    }
  };

  useEffect(() => {
    getContent(department);
  }, []);

  return (
    <div className="col-span-4 h-[500px] rounded-lg bg-white  shadow">
      <div className="rounded-t-lg bg-hazard-blue-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          <BuildingLibraryIcon className="h-5 w-5" />
          Content Library
        </h2>
      </div>
      <div className="h-[90%] overflow-y-auto pl-4 pr-1 pt-4">
        <ol className="divide-y divide-gray-100">
          {content.length > 0 ? (
            content.map((item) => (
              <li key={item.sys.id} className="flex gap-x-4 px-3 py-5">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    {item.fields.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-neon-orange-100 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-neon-orange-500/10">
                      {item.fields.category == "Video" ? (
                        <PlayIcon className="h-5 w-5 font-bold text-neon-orange-500" />
                      ) : item.fields.category == "File" ? (
                        <DocumentIcon className="h-5 w-5 font-bold text-neon-orange-500" />
                      ) : (
                        <LinkIcon className="h-5 w-5 font-bold text-neon-orange-500" />
                      )}
                    </span>
                    <p className="mt-1 truncate text-xs font-semibold leading-5 text-gray-500">
                      {formatDateAndTime(item.fields.date, "day")}
                    </p>
                  </div>
                  <p className="my-2 line-clamp-2 text-xs leading-7 text-gray-900">
                    {item.fields.description}
                  </p>
                  <Link
                    href={
                      item.fields.isDirectLink
                        ? item.fields.slug
                        : `/app/resources/content-library/${item.fields.slug}`
                    }
                    className="flex items-center justify-end gap-1 text-xs font-semibold hover:text-neon-orange-600"
                  >
                    Access <ChevronRightIcon className="h-3" />
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <p className="font-bold text-gray-300">No Content</p>
            </div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default ContentLibrary;
