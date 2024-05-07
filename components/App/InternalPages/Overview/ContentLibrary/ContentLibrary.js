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

const ContentLibrary = ({
  department,
  preview,
  colSpan,
  tileTitle,
  fixedHeight,
}) => {
  const [content, setContent] = useState([]);

  const getContent = async (department, preview) => {
    if (department) {
      const client = preview ? contentful.previewClient : contentful.client;
      const data = await client
        .getEntries({
          content_type: "contentLibrary",
          "fields.department[match]": department,
          order: "fields.subcategory,fields.title",
        })
        .then((response) => {
          const groupedItems = response.items.reduce((result, item) => {
            const subcategory = item.fields.subcategory;

            if (!result[subcategory]) {
              result[subcategory] = [];
            }

            result[subcategory].push(item);

            return result;
          }, []);

          setContent(groupedItems);
        });
    }
  };

  useEffect(() => {
    getContent(department);
  }, []);

  return (
    <div
      className={`${colSpan ? colSpan : "col-span-4"} ${
        !fixedHeight ? null : "h-[500px]"
      } rounded-lg bg-white  shadow`}
    >
      <div className="rounded-t-lg bg-hazard-blue-500 py-2">
        <h2 className="ml-4 flex gap-2 font-bold text-seabreeze-500">
          {tileTitle ? (
            tileTitle
          ) : (
            <>
              <BuildingLibraryIcon className="h-5 w-5" />
              Content Library
            </>
          )}
        </h2>
      </div>
      <div className="h-[90%] overflow-y-auto">
        {Object.keys(content).length > 0 ? (
          Object.keys(content).map((subcategory) => (
            <div key={subcategory} className="relative">
              <div className="sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-neon-orange-100 px-3 py-1.5 text-sm font-semibold leading-6 text-neon-orange-600">
                <h3>
                  {subcategory == "undefined" ? "All/Mixed" : subcategory}
                </h3>
              </div>
              <ul role="list" className="divide-y divide-gray-100 px-4">
                {content[subcategory].map((item) => (
                  <li key={item.sys.id} className="py-5">
                    <div className="min-w-0">
                      {item.fields.category == "File" ? (
                        <Link
                          href={`https:${item.fields.file.fields.file.url}`}
                          className="text-xs font-semibold "
                        >
                          <h3 className="text-sm font-semibold leading-6 text-gray-900 hover:text-neon-orange-600">
                            {item.fields.title}
                          </h3>
                        </Link>
                      ) : (
                        <Link
                          href={
                            item.fields.isDirectLink
                              ? item.fields.slug
                              : `/app/resources/content-library/${item.fields.slug}`
                          }
                          className="text-xs font-semibold"
                        >
                          <h3 className="text-sm font-semibold leading-6 text-gray-900 hover:text-neon-orange-600">
                            {item.fields.title}
                          </h3>
                        </Link>
                      )}
                      {/* <h3 className="text-sm font-semibold leading-6 text-gray-900">
                        {item.fields.title}
                      </h3> */}
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
                      <p className="my-2 line-clamp-2 text-xs leading-5 text-gray-900">
                        {item.fields.description}
                      </p>
                      {/* {item.fields.category == "File" ? (
                        <Link
                          href={`https:${item.fields.file.fields.file.url}`}
                          className="flex items-center justify-end gap-1 text-xs font-semibold hover:text-neon-orange-600"
                        >
                          Access <ChevronRightIcon className="h-3" />
                        </Link>
                      ) : (
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
                      )} */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="font-bold text-gray-300">No Content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentLibrary;
