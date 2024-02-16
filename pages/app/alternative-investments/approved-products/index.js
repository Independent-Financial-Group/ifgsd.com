import React, { Fragment } from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../../components/App/ContentContainer/ContentContainer";

import * as contentful from "../../../../utils/contentful";

import { Tab } from "@headlessui/react";

import { DocumentIcon } from "@heroicons/react/24/outline";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const reitProducts = await client.getEntries({
    content_type: "approvedProducts",
    order: "fields.type",
  });

  return {
    props: {
      reits: [...reitProducts.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const approvedProducts = ({ preview, reits }) => {
  const tabLabels = ["REITs", "1031s", "DPP", "iCapital"];

  return (
    <>
      <Head>
        <title>Approved Products | Alt. Investments</title>
      </Head>
      <Layout preview={preview}>
        <PageHeader
          pageName="Approved Products"
          breadCrumb="Alternative Investments"
        />
        <ContentContainer>
          <p className="col-span-4 text-sm italic text-gray-800">
            Please select from one of the tabs below to view approved products
            by category.
          </p>
          <Tab.Group as="div" className="col-span-full flex flex-col">
            <Tab.List className="flex gap-1 border-b border-neon-orange-200 text-left text-sm font-semibold">
              {tabLabels.map((label) => (
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "rounded-t-md bg-hazard-blue-500 px-2 py-3 text-sm font-semibold text-white shadow-sm focus:outline-none"
                          : "rounded-t-md bg-gray-300 px-2 py-3 text-sm text-gray-800"
                      }
                    >
                      {label}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-5 rounded bg-white px-4 py-5 shadow">
              <Tab.Panel>
                <div className="xl:grid xl:grid-cols-2 xl:gap-5">
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      IFG Required REIT Forms
                    </h2>
                    <p className="max-w-prose text-sm leading-7">
                      The following forms are required for REIT purchases.
                      Please refer to Gateway or Laserapp to download the most
                      updated form.
                    </p>
                    <ul className="mt-5 text-sm italic [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                      <li>
                        <DocumentIcon className="h-5 w-5 text-hazard-blue-600" />
                        Alternative Investment Suitability Questionnaire
                      </li>
                      <li>
                        <DocumentIcon className="h-5 w-5 text-hazard-blue-600" />
                        Pershing Private Investment form (for all Pershing
                        business).
                      </li>
                    </ul>
                  </div>
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      FOR BD Use Only
                    </h2>
                    <p className="max-w-prose text-sm leading-7">
                      Please ensure to call sponsor to verify minimums, and
                      suitability requirements for specific states into which
                      you will be directing solicitations prior to speaking with
                      any clients or prospective clients. For the most recent
                      information, please contact the Alternative Investment
                      Department.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full table-fixed divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                Sponsor
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Offering
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Objective
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Suitability
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Minimum
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Approval Date
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Contact/Phone
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {reits.map((reit) => (
                              <tr
                                key={reit.sys.id}
                                className="[&_td]:text-wrap"
                              >
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {reit.fields.sponsorName}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  <Link
                                    href={`/app/alternative-investments/approved-products/${reit.fields.slug}`}
                                    className="font-semibold text-neon-orange-500"
                                  >
                                    {reit.fields.offeringName}
                                  </Link>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {reit.fields.type}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {reit.fields.objective}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {reit.fields.suitability}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {reit.fields.minimum}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {reit.fields.status}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {reit.fields.followOnApprovalDate}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {reit.fields.contact}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {!reits.length && (
                          <h2 className="py-5 text-center text-lg font-semibold text-gray-500">
                            No Products Available. Please check back later.
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default approvedProducts;
