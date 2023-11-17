import React, { useEffect, useState, CSSProperties } from "react";

// IMPORT NEXTJS
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

// IMPORT COMPONENTS
import PublicLayout from "../components/PublicLayout/PublicLayout";
import PageHeader from "../components/PageHeader/PageHeader";
import Container from "../components/Container/Container";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AdvisorEmailForm from "../components/AdvisorEmailForm/AdvisorEmailForm";

// REACT SPINNER
import ClipLoader from "react-spinners/ClipLoader";

// IMPORT ASSETS
import highlight from "../public/_global-graphics/highlight.png";
import logo from "../public/ifg-icon.png";
import { previewData } from "next/dist/client/components/headers";

// CONTENTFUL
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  setSkipNumber,
  setIsLoading,
}) => {
  const handleNextPage = (e) => {
    // setIsLoading(true);
    setCurrentPage((prevState) => prevState + 1);
    setSkipNumber((prevState) => prevState + 12);
    console.log();
  };

  const handlePrevPage = () => {
    // setIsLoading(true);
    setCurrentPage((prevState) => prevState - 1);
    setSkipNumber((prevState) => prevState - 12);
  };

  return (
    <div className="mx-auto my-5 inline-flex w-full items-center justify-center gap-3">
      <button
        onClick={handlePrevPage}
        disabled={currentPage == 1}
        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-neon-orange-600 text-seabreeze-100 disabled:bg-gray-200 disabled:text-gray-900 rtl:rotate-180"
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <p className="text-xs text-gray-900">
        {currentPage}
        <span className="mx-0.25">/</span>
        {totalPages}
      </p>

      <button
        className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-neon-orange-600 text-seabreeze-100 disabled:text-gray-900 rtl:rotate-180"
        onClick={handleNextPage}
        disabled={currentPage == totalPages}
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

const AdvisorCard = ({ key, fullName, city = "N/A", state = "N/A" }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      key={key}
      className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
    >
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {fullName}
            </h3>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">
            {city + ", " + state}
          </p>
        </div>
        <Image
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src={logo}
          alt=""
        />
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <button
              onClick={() => setOpen(true)}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-hazard-blue-500"
            >
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
              Email
            </button>
          </div>
        </div>
      </div>
      <AdvisorEmailForm open={open} setOpen={setOpen} />
    </li>
  );
};

const advisorLookup = () => {
  const [paginationCount, setPaginationCount] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [directory, setDirectory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [skipNumber, setSkipNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const directory = await client.getEntries({
        content_type: "advisorDirectory",
        order: "fields.lastName",
        query: searchTerm,
        limit: 12,
        skip: skipNumber,
      });

      setDirectory([...directory.items]);
      setPaginationCount(Math.ceil(directory.total / 12));
    };

    fetchData();

    setIsLoading(false);
  }, [searchTerm, skipNumber]);

  const handleChange = (e) => {
    const value = e.target.value;
    setIsLoading(true);

    setTimeout(() => {
      setSearchTerm(value);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Advisor Lookup | Independent Financial Group | San Diego</title>
      </Head>
      <PublicLayout>
        <header className="relative h-[calc(35vh-60px)] rounded-b-[20px] bg-neon-orange-500">
          <Container>
            <div className="absolute top-1/2 -translate-y-1/2 ">
              <h1 className="text-5xl font-bold text-seabreeze-500">
                Advisor Lookup
              </h1>
              <p className="my-5 max-w-prose text-base text-seabreeze-500">
                Look for a financial professional with Independent Financial
                Group
              </p>
            </div>
          </Container>
        </header>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="mx-auto mb-10 w-1/3">
              <label
                htmlFor="first-name"
                className="block text-center text-sm font-semibold leading-6 text-hazard-blue-500"
              >
                Search
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Search by name, city, or state abbreviation"
                  className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon-orange-500 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
            {isLoading && (
              <div className="absolute left-1/2 -translate-x-1/2">
                <ClipLoader
                  color={"#FF7F4F"}
                  loading={isLoading}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            )}
            {!isLoading && (
              <>
                <Pagination
                  currentPage={currentPage}
                  totalPages={paginationCount}
                  setCurrentPage={setCurrentPage}
                  setSkipNumber={setSkipNumber}
                  setIsLoading={setIsLoading}
                />
                <ul className="grid grid-cols-3 gap-5">
                  {directory.map((advisor) => {
                    return (
                      <AdvisorCard
                        key={advisor.sys.id}
                        fullName={advisor.fields.fullName}
                        city={advisor.fields.city}
                        state={advisor.fields.state}
                        setSkipNumber={setSkipNumber}
                      />
                    );
                  })}
                </ul>
                <Pagination
                  currentPage={currentPage}
                  totalPages={paginationCount}
                  setCurrentPage={setCurrentPage}
                  setSkipNumber={setSkipNumber}
                  setIsLoading={setIsLoading}
                />
              </>
            )}
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default advisorLookup;
