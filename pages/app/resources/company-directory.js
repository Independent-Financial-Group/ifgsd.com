import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../components/App/ContentContainer/ContentContainer";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import * as contentful from "../../../utils/contentful";

import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { motion, AnimatePresence } from "framer-motion";

const EmployeeSearchAndFilter = ({
  departmentFilter,
  setDepartmentFilter,
  setQuery,
}) => {
  const departments = [
    "All Departments",
    "Accounting",
    "Alternative Investments",
    "Annuities",
    "Commissions",
    "Compliance",
    "Corporate Communications & Events",
    "Executive Office",
    "Facilities",
    "Insurance",
    "IT & Software Support",
    "Operations",
    "Recruiting",
    "Regional Consulting",
    "Registration & Licensing",
    "Research & Portfolio Construction",
    "Supervision",
    "Transition Services",
    "Virtual Services",
    "Wealth Management",
  ];

  return (
    <div className="my-5 flex items-center justify-center gap-5">
      <Listbox
        className="w-[300px]"
        value={departmentFilter}
        onChange={setDepartmentFilter}
      >
        <div className="relative mt-1 flex">
          <Listbox.Button className="flex w-full items-center gap-3 rounded-lg bg-white px-2 py-2 ring-gray-300">
            {departmentFilter}
            <ChevronDownIcon className="ml-auto h-5 w-5" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute top-full z-50 mt-2 flex h-[300px] flex-col gap-3 divide-y overflow-y-auto rounded-lg bg-white px-2 py-4 shadow-lg">
              {departments.map((department) => (
                <Listbox.Option
                  className="pt-3 hover:cursor-pointer"
                  key={department}
                  value={department}
                >
                  {department}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-600 sm:text-sm sm:leading-6"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

const EmployeeCard = ({ employeeData }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="relative col-span-4 rounded-lg bg-gray-100 px-2 py-5 text-gray-700 shadow hover:-translate-y-2 hover:cursor-pointer hover:shadow-lg"
      >
        <img
          src={`https:${employeeData.fields.headshot.fields.file.url}`}
          className="absolute -top-1/3 left-1/2 mx-auto h-28 w-28 -translate-x-1/2 rounded-full border-4 border-neon-orange-500 shadow-lg"
        />
        <h3 className="mt-8 text-center text-lg font-semibold text-hazard-blue-500">
          {employeeData.fields.fullName}
        </h3>
        <p className="line-clamp-1 text-center text-base font-semibold">
          {employeeData.fields.title}
        </p>
        <p className="text-center text-sm">{employeeData.fields.department}</p>
        <div className="my-5 flex flex-col items-center gap-3 text-center">
          <p className="text-sm">
            <EnvelopeIcon className="mr-3 inline-block h-4 w-4 text-gray-700" />
            {employeeData.fields.eMail}
          </p>
          <p className="flex-grow text-sm">
            <PhoneIcon className="mr-3 inline-block h-4 w-4 text-gray-700" />x
            {employeeData.fields.extension}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export async function getStaticProps({ preview }) {
  return {
    props: {
      preview: preview || false,
    },
  };
}

const companyDirectory = ({ preview }) => {
  const [directory, setDirectory] = useState([]);
  const [directoryIsLoading, setDirectoryIsLoading] = useState(false);
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [query, setQuery] = useState(null);

  const getDirectory = async (filter) => {
    setDirectoryIsLoading(true);

    if (filter !== "All Departments") {
      const data = await contentful.client
        .getEntries({
          content_type: "companyDirectory",
          order: "fields.fullName",
          "fields.department[in]": filter,
        })
        .then((response) => {
          setDirectory([...response.items]);
          setDirectoryIsLoading(false);
        });
    } else if (query) {
      const data = await contentful.client
        .getEntries({
          content_type: "companyDirectory",
          order: "fields.fullName",
          query: query,
        })
        .then((response) => {
          setDirectory([...response.items]);
          setDirectoryIsLoading(false);
        });
    } else {
      const data = await contentful.client
        .getEntries({
          content_type: "companyDirectory",
          order: "fields.fullName",
        })
        .then((response) => {
          setDirectory([...response.items]);
          setDirectoryIsLoading(false);
        });
    }
  };

  useEffect(() => {
    setDirectoryIsLoading(true);
    getDirectory(departmentFilter);
  }, [departmentFilter, query]);

  return (
    <>
      <Head>
        <title>Company Directory | Home Office</title>
      </Head>
      <PageHeader
        pageName="Home Office Company Directory"
        breadCrumb="Resources"
      />
      <Layout preview={preview}>
        <div className="my-10 flex flex-col gap-x-5 gap-y-24 px-8 xl:grid xl:grid-cols-12">
          <section className="col-span-full">
            <h2 className="text-center text-xl font-semibold text-hazard-blue-500">
              Using the Directory
            </h2>
            <p className="text-center text-sm">
              Search by Name, Title, Department, or type a Keyword, such as
              “Envestnet” or “Cashiering,” into the box below.
            </p>
            <EmployeeSearchAndFilter
              departmentFilter={departmentFilter}
              setDepartmentFilter={setDepartmentFilter}
              setQuery={setQuery}
            />
          </section>
          {directoryIsLoading && (
            <div className="col-span-full flex min-h-[calc(100vh-280px)] items-center justify-center">
              <h2>Loading</h2>
              <svg
                class="mr-3 h-5 w-5 animate-spin text-neon-orange-500"
                viewBox="0 0 24 24"
              ></svg>
            </div>
          )}
          {!directoryIsLoading && (
            <>
              {directory.map((employee) => {
                return <EmployeeCard employeeData={employee} />;
              })}
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default companyDirectory;
