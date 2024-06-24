import Head from "next/head";
import Link from "next/link";
import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";

import * as contentful from "/utils/contentful";
import ContentContainer from "components/App/ContentContainer/ContentContainer";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const mutualFunds = await client.getEntries({
    content_type: "mutualFunds",
    order: "fields.title",
  });

  return {
    props: {
      preview: preview || false,
      mutualFunds: [...mutualFunds.items],
    },
    revalidate: 10,
  };
}

const Page = ({ mutualFunds, preview }) => {
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [displayedFunds, setDisplayedFunds] = useState(
    mutualFunds.slice(startIndex, endIndex),
  );

  const totalPages = mutualFunds.length / 10;

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    setStartIndex((prevState) => prevState + 10);
    setEndIndex((prevState) => prevState + 10);
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1),
      setStartIndex((prevState) => prevState - 10);
    setEndIndex((prevState) => prevState - 10);
  };

  useEffect(() => {
    setDisplayedFunds(mutualFunds.slice(startIndex, endIndex));
    console.log("RUNNING EFFECT");
  }, [page, startIndex, endIndex]);

  return (
    <>
      <Head>
        <title>Mutual Funds | Advisory</title>
      </Head>
      <PageHeader pageName="Mutual Funds" breadCrumb="Advisory" />
      <Layout preview={preview}>
        <ContentContainer>
          <section className="col-span-full rounded bg-hazard-blue-500 shadow">
            <table className="w-full divide-y divide-gray-300">
              <thead className="text-seabreeze-500">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-3"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold"
                  >
                    Contact Number
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold"
                  >
                    Link
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#ECF1F5]">
                {displayedFunds.map((fund) => (
                  <tr key={fund.sys.id} className="even:bg-seabreeze-100">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {fund.fields.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {fund.fields.contactNumber}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <Link
                        href={fund.fields.link}
                        target="_blank"
                        className="flex w-fit items-center gap-2 font-semibold text-blue-wave-500"
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        <p>{fund.fields.link}</p>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav
              className="flex w-full items-center justify-between rounded-b border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{startIndex + 1}</span>{" "}
                  to <span className="font-medium">{endIndex}</span> of{" "}
                  <span className="font-medium">{mutualFunds.length}</span>{" "}
                  results
                </p>
              </div>
              <div className="flex flex-1 justify-between sm:justify-end">
                <button
                  className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-neon-orange-500 ring-1 ring-inset ring-gray-300 hover:bg-neon-orange-100 focus-visible:outline-offset-0 disabled:bg-gray-200 disabled:text-gray-500"
                  disabled={startIndex == 0}
                  onClick={handlePrevPage}
                >
                  Previous
                </button>
                <button
                  className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-neon-orange-500 ring-1 ring-inset ring-gray-300 hover:bg-neon-orange-100 focus-visible:outline-offset-0 disabled:bg-gray-200 disabled:text-gray-500"
                  disabled={page == totalPages}
                  onClick={handleNextPage}
                >
                  Next
                </button>
              </div>
            </nav>
          </section>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default Page;
