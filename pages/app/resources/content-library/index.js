import React, { useEffect, useState } from "react";
import Head from "next/head";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import * as contentful from "utils/contentful";
import { formatDateAndTime } from "@contentful/f36-datetime";

// ICONS
import {
  HashtagIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";

// UTILS
import { departments } from "utils/globals";
import Link from "next/link";

const SearchBar = ({ searchTerm, setSearchTerm, getSearchedContent }) => {
  const handleClick = () => {
    getSearchedContent(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor="search"
        className="sr-only ml-px block pl-4 text-sm font-medium leading-6 text-gray-900"
      >
        Search
      </label>
      <p className="font-medium italic">
        Input a search term and click on the search button
      </p>
      <div className="relative mt-2">
        <input
          id="search"
          name="search"
          type="text"
          value={searchTerm}
          placeholder="Search"
          className="block w-full rounded-full border-0 py-1.5 pl-4 pr-14 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ifg-turqoise-500 sm:text-sm sm:leading-6"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="absolute right-0 top-0 rounded-full bg-neon-orange-500 p-1.5"
        >
          <MagnifyingGlassCircleIcon className="h-6 w-6 text-white " />
        </button>
      </div>
    </div>
  );
};

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
      className="rounded-lg bg-white px-3 py-2 shadow transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-md"
    >
      <article className="">
        <div className="flex">
          <span className="text-xs font-semibold text-neon-orange-500">
            {formatDateAndTime(data.fields.date, "day")}
          </span>
          <div className="flex flex-grow justify-end">
            <span className="inline-flex items-center rounded-md bg-ifg-turqoise-100 px-2 py-1 text-xs font-medium text-ifg-turqoise-700 ring-1 ring-inset ring-blue-700/10">
              {data.fields.department}
            </span>
          </div>
        </div>
        <div className="my-5 space-y-2">
          {data.fields.thumbnail && (
            <img
              src={`https:${data.fields.thumbnail.fields.file.url}`}
              className="h-24 w-full object-contain"
            />
          )}
          <img src="" />
          <h2 className="font-bold">{data.fields.title}</h2>
          <span className="flex text-xs">
            {data.fields.subcategory && (
              <>
                <HashtagIcon className="h-4 w-4" /> {data.fields.subcategory}
              </>
            )}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {data.fields.description ? data.fields.description : null}
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
  const [searchTerm, setSearchTerm] = useState("");
  const client = preview ? contentful.previewClient : contentful.client;

  const getFilteredContent = async (department) => {
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

  const getSearchedContent = async (searchTerm) => {
    setIsLoading(true);
    const data = await client
      .getEntries({
        content_type: "contentLibrary",
        ...(selectedDepartment !== "All" && {
          "fields.department[match]": selectedDepartment,
        }),
        query: searchTerm,
        order: "-fields.date",
      })
      .then((response) => {
        setContentData([...response.items]);
        setIsLoading(false);
      });
  };

  const handleSearch = (e) => {
    e.target.value;
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
          <section className="col-span-9">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              getSearchedContent={getSearchedContent}
            />
          </section>
          <section className="lg:col-span-9 lg:grid lg:auto-rows-fr lg:grid-cols-3 lg:gap-5">
            {contentData.map((content) => (
              <ContentCard key={content.sys.id} data={content} />
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
