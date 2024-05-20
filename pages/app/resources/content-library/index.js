import React, { useEffect, useState } from "react";
import Head from "next/head";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import * as contentful from "utils/contentful";
import { formatDateAndTime } from "@contentful/f36-datetime";

// ICONS
import { HashtagIcon } from "@heroicons/react/24/outline";

// UTILS
import { departments } from "utils/globals";
import Link from "next/link";

const ContentFilter = ({ selectedDepartment, setSelectedDepartment }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setSelectedDepartment(value);
  };

  return (
    <div className="sticky top-10 rounded bg-hazard-blue-100 px-3 py-2 shadow ring-2 ring-inset ring-hazard-blue-600">
      <h3 className="mb-5 text-lg font-bold text-hazard-blue-500">Filter</h3>
      <div>
        <label
          htmlFor="location"
          className="block text-base font-semibold leading-6 text-hazard-blue-500"
        >
          By Department
        </label>
        <select
          id="department"
          name="department"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-hazard-blue-600 ring-1 ring-inset ring-hazard-blue-300 focus:ring-2 focus:ring-hazard-blue-600 sm:text-sm sm:leading-6"
          defaultValue={selectedDepartment}
          onChange={handleChange}
        >
          {departments.map((department) => (
            <option key={department.id} value={department.id}>
              {department.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const ContentCard = ({ data }) => {
  return (
    <Link
      href={
        data.fields.isDirectLink
          ? data.fields.slug
          : `/app/resources/content-library/${data.fields.slug}`
      }
      className="transition-all hover:-translate-y-3 hover:scale-105 hover:shadow-md"
    >
      <article className="rounded-lg bg-seabreeze-500 px-3 py-2 shadow">
        <div className="flex">
          <span className="text-xs text-neon-orange-500">
            {formatDateAndTime(data.fields.date, "day")}
          </span>
          <div className="flex flex-grow justify-end">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {data.fields.department}
            </span>
          </div>
        </div>
        <div className="my-5">
          <h2 className="font-bold">{data.fields.title}</h2>
          <span className="flex text-xs">
            {data.fields.subcategory && (
              <>
                <HashtagIcon className="h-4 w-4 text-gray-500" />{" "}
                {data.fields.subcategory}
              </>
            )}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {data.fields.description
            ? data.fields.description
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
      </article>
    </Link>
  );
};

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "contentLibrary",
    order: "-fields.date",
  });

  return {
    props: {
      preview: preview || false,
      data: [...data.items],
    },
    revalidate: 5,
  };
}

const index = ({ data, preview }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [contentData, setContentData] = useState(data);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const getFilteredContent = async (department) => {
    const client = preview ? contentful.previewClient : contentful.client;
    setIsLoading(true);
    const data = await client
      .getEntries({
        content_type: "contentLibrary",
        ...(department !== "All" && { "fields.department[match]": department }),
        order: "-fields.date",
      })
      .then((response) => {
        setContentData([...response.items]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getFilteredContent(selectedDepartment);
  }, [selectedDepartment]);

  return (
    <>
      <Head>
        <title>Content Library | IFG Rep Portal</title>
      </Head>
      <PageHeader pageName="IFG Content Library" breadCrumb={"Resources"} />
      <Layout preview={preview}>
        <ContentContainer>
          <section className="col-span-9 xl:grid xl:grid-cols-2 xl:gap-5">
            {contentData.map((content) => (
              <ContentCard data={content} />
            ))}
          </section>
          <aside className="relative col-span-3">
            <ContentFilter
              setSelectedDepartment={setSelectedDepartment}
              selectedDepartment={selectedDepartment}
            />
          </aside>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
