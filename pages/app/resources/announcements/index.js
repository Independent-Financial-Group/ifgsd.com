import React from "react";

import Link from "next/link";
import Head from "next/head";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";

import * as contentful from "utils/contentful";
import { formatDateAndTime } from "@contentful/f36-datetime";

import { motion, AnimatePresence } from "framer-motion";

export const getStaticProps = async ({ preview }) => {
  const client = preview ? contentful.previewClient : contentful.client;

  const announcements = await client.getEntries({
    content_type: "announcements",
    order: "-fields.date",
  });

  return {
    props: {
      announcements: [...announcements.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
};

const index = ({ announcements, preview }) => {
  const priorities = [
    { id: "all", title: "All" },
    { id: "high", title: "High" },
    { id: "medium", title: "Medium" },
    { id: "Low", title: "Low" },
  ];
  const mediaTypes = [
    { id: "all", title: "All" },
    { id: "connect", title: "Connect" },
    { id: "blue chip", title: "Blue Chip" },
    { id: "independent", title: "The Independent" },
    { id: "metrics that matter", title: "Metrics that Matter" },
    { id: "podcast", title: "Podcast" },
    { id: "partner series", title: "Partner Series" },
    { id: "press release", title: "Press Release" },
  ];
  const departments = [];

  return (
    <>
      <Head>
        <title>Announcements | IFG</title>
      </Head>
      <Layout preview={preview}>
        <PageHeader pageName="Announcements" breadCrumb="Resources" />
        <ContentContainer>
          <AnimatePresence>
            <motion.section
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="col-span-9 rounded-lg bg-seabreeze-500"
            >
              <ol className="divide-y">
                {announcements.map((announcement) => (
                  <li
                    key={announcement.sys.id}
                    className="flex items-center gap-2 px-2 py-3"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-neon-orange-500">
                        {announcement.fields.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="my-2 flex gap-1">
                          {announcement.fields.priority && (
                            <div
                              class={`my-2 w-fit rounded-full ${
                                announcement.fields.priority == "High"
                                  ? "bg-red-100 ring-1 ring-inset ring-red-600"
                                  : announcement.fields.priority == "Medium"
                                  ? "bg-neon-orange-100 ring-1 ring-inset ring-neon-orange-600"
                                  : "bg-green-100 ring-1 ring-inset ring-green-600"
                              } px-4 py-2 text-xs font-bold ${
                                announcement.fields.priority == "High"
                                  ? "text-red-600"
                                  : announcement.fields.priority == "Medium"
                                  ? "text-neon-orange-600"
                                  : "text-green-600"
                              }`}
                            >
                              {announcement.fields.priority} Priority
                            </div>
                          )}
                          {announcement.fields.mediaType && (
                            <div className="my-2 w-fit rounded-full bg-hazard-blue-100 px-4 py-2 text-xs font-bold text-hazard-blue-600 ring-1 ring-inset ring-hazard-blue-600">
                              {announcement.fields.mediaType}
                            </div>
                          )}
                          <div className="my-2 w-fit rounded-full bg-gray-100 px-4 py-2 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-600">
                            {announcement.fields.department}
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 2 2"
                          className="fill-current h-0.5 w-0.5"
                        >
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                        <p className="text-sm font-medium text-gray-500">
                          {formatDateAndTime(announcement.fields.date, "day")}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-grow justify-end pr-8">
                      <Link
                        href={
                          announcement.fields.linkIsCustom
                            ? announcement.fields.slug
                            : `/app/resources/announcements/${announcement.fields.slug}`
                        }
                        className="rounded-lg bg-neon-orange-100 px-2 py-3 text-sm font-semibold text-neon-orange-500 ring-1 ring-inset ring-neon-orange-600 transition-all hover:-translate-y-1"
                      >
                        View
                      </Link>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.section>
          </AnimatePresence>
          <AnimatePresence>
            <motion.aside
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative col-span-3"
            >
              <div className="sticky top-10 rounded bg-hazard-blue-100 px-2 py-3 text-hazard-blue-600 shadow ring-1 ring-inset ring-hazard-blue-600">
                <p className="mb-5 text-lg font-bold">Filter</p>
                <div>
                  <label className="text-base font-semibold">By Priority</label>
                  <fieldset className="mt-1">
                    <legend className="sr-only">By Priority</legend>
                    <div className="space-y-2">
                      {priorities.map((priority) => (
                        <div key={priority.id} className="flex items-center">
                          <input
                            id={priority.id}
                            name="priority"
                            type="radio"
                            defaultChecked={priority.id === "email"}
                            className="h-4 w-4 border-gray-300 text-hazard-blue-600 focus:ring-hazard-blue-600"
                          />
                          <label
                            htmlFor={priority.id}
                            className="ml-3 block text-sm font-medium leading-6"
                          >
                            {priority.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
                <div className="my-5">
                  <label className="text-base font-semibold">
                    By Media Type
                  </label>
                  <fieldset className="mt-1">
                    <legend className="sr-only">By Media Type</legend>
                    <div className="space-y-2">
                      {mediaTypes.map((mediaType) => (
                        <div key={mediaType.id} className="flex items-center">
                          <input
                            id={mediaType.id}
                            name="media-type"
                            type="radio"
                            defaultChecked={mediaType.id === "email"}
                            className="h-4 w-4 border-gray-300 text-hazard-blue-600 focus:ring-hazard-blue-600"
                          />
                          <label
                            htmlFor={mediaType.id}
                            className="ml-3 block text-sm font-medium leading-6"
                          >
                            {mediaType.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block text-base font-semibold leading-6"
                  >
                    By Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-hazard-blue-600 ring-1 ring-inset ring-hazard-blue-300 focus:ring-2 focus:ring-hazard-blue-600 sm:text-sm sm:leading-6"
                    defaultValue="All"
                  >
                    <option>All</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </motion.aside>
          </AnimatePresence>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
