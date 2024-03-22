import React, { Fragment, useState } from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../../components/App/ContentContainer/ContentContainer";

import * as contentful from "../../../../utils/contentful";

import { Tab } from "@headlessui/react";

import { DocumentIcon } from "@heroicons/react/24/outline";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { DocumentCheckIcon } from "@heroicons/react/24/outline";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

<DocumentArrowDownIcon className="h-6 w-6 text-gray-500" />;

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const reitProducts = await client.getEntries({
    content_type: "approvedProducts",
    order: "fields.productTypeCategory,fields.offeringName",
    "fields.productType[match]": "REIT",
  });

  const tenthirtyoneProducts = await client.getEntries({
    content_type: "approvedProducts",
    order: "fields.productTypeCategory,fields.offeringName",
    "fields.productType[match]": "1031",
  });

  const bdcProducts = await client.getEntries({
    content_type: "approvedProducts",
    order: "fields.productTypeCategory,fields.offeringName",
    "fields.productType[match]": "BDCs",
  });

  const iCapitalProducts = await client.getEntries({
    content_type: "approvedProducts",
    order: "fields.productTypeCategory,fields.offeringName",
    "fields.productType[match]": "iCapital",
  });

  const intervalFundProducts = await client.getEntries({
    content_type: "approvedProducts",
    order: "fields.productTypeCategory,fields.offeringName",
    "fields.productType[match]": "Interval Funds",
  });

  const nonTradedPreferredSecurities = await client.getEntries({
    content_type: "approvedProducts",
    order: "fields.productTypeCategory,fields.offeringName",
    "fields.productType[match]": "Non-Traded Preferred Securities",
  });

  const oilAndGas = await client.getEntries({
    content_type: "approvedProducts",
    order: "fields.productTypeCategory,fields.offeringName",
    "fields.productType[match]": "Oil & Gas",
  });

  const realEstate = await client.getEntries({
    content_type: "approvedProducts",
    order: "fields.productTypeCategory,fields.offeringName",
    "fields.productType[match]": "Real Estate",
  });

  const qualifiedOpportunityZoneFunds = await client.getEntries({
    content_type: "approvedProducts",
    order: "fields.productTypeCategory,fields.offeringName",
    "fields.productType[match]": "Qualified Opportunity Zone Funds",
  });

  return {
    props: {
      reits: [...reitProducts.items],
      tenthirtyOnes: [...tenthirtyoneProducts.items],
      BDCs: [...bdcProducts.items],
      iCapital: [...iCapitalProducts.items],
      intervalFunds: [...intervalFundProducts.items],
      nonTradedPreferredSecurities: [...nonTradedPreferredSecurities.items],
      oilAndGas: [...oilAndGas.items],
      realEstate: [...realEstate.items],
      qualifiedOpportunityZoneFunds: [...qualifiedOpportunityZoneFunds.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const approvedProducts = ({
  preview,
  reits,
  tenthirtyOnes,
  BDCs,
  iCapital,
  intervalFunds,
  nonTradedPreferredSecurities,
  oilAndGas,
  realEstate,
  qualifiedOpportunityZoneFunds,
}) => {
  const client = preview ? contentful.previewClient : contentful.client;
  const tabLabels = [
    "1031s",
    "BDCs",
    "iCapital",
    "Interval Funds",
    "Non-Traded Preferred Securities",
    "Oil & Gas",
    "Qualified Opportunity Zone Funds",
    "Real Estate",
    "REITs",
  ];
  const [reitsData, setReitsData] = useState(reits);
  const [tenThirtyOneData, setTenThirtyOneData] = useState(tenthirtyOnes);
  const [bdcData, setBDCData] = useState(BDCs);
  const [iCapitalData, setICapitalData] = useState(iCapital);
  const [intervalFundData, setIntervalFundData] = useState(intervalFunds);
  const [
    nonTradedPreferredSecuritiesData,
    setNonTradedPreferredSecuritiesData,
  ] = useState(nonTradedPreferredSecurities);
  const [oilAndGasData, setOilAndGasData] = useState(oilAndGas);
  const [realEstateData, setRealEstateData] = useState(realEstate);
  const [
    qualifiedOpportunityZoneFundsData,
    setQualifiedOpportunityZoneFundsData,
  ] = useState(qualifiedOpportunityZoneFunds);
  const [isReverseOrder, setIsReverseOrder] = useState(true);

  const getReits = async (e) => {
    setIsReverseOrder((prevState) => !prevState);
    const data = await client
      .getEntries({
        content_type: "approvedProducts",
        order: isReverseOrder
          ? "-fields.productTypeCategory,fields.offeringName"
          : "fields.productTypeCategory,fields.offeringName",
        "fields.productType[match]": "REIT",
      })
      .then((response) => setReitsData([...response.items]));
  };

  const getTenThirtyOnes = async (e) => {
    setIsReverseOrder((prevState) => !prevState);
    const data = await client
      .getEntries({
        content_type: "approvedProducts",
        order: isReverseOrder
          ? "-fields.productTypeCategory,fields.offeringName"
          : "fields.productTypeCategory,fields.offeringName",
        "fields.productType[match]": "1031",
      })
      .then((response) => setTenThirtyOneData([...response.items]));
  };

  const handleTabChange = (index, e) => {
    console.log(tabLabels[index]);
  };

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
          <Tab.Group
            as="div"
            className="col-span-full flex flex-col"
            onChange={handleTabChange}
          >
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
              {/* 1031 inventory tab panel */}
              <Tab.Panel>
                <div className="xl:grid xl:grid-cols-2 xl:gap-5">
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      Documents to Read
                    </h2>
                    <p className="mb-2 text-sm">
                      Please take a moment to read the following documents
                      before proceeding with 1031s
                    </p>
                    <ul className="flex flex-col gap-1 text-sm italic [&_li_a]:line-clamp-1">
                      <li className="flex items-center gap-1">
                        <DocumentArrowDownIcon className="h-5 w-5 text-hazard-blue-600" />
                        <Link
                          className="font-semibold"
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/43djEqzWiZUENcsjcGiwRI/d81235115dcd68c3808128e9b7d35b4f/1031_Pre-Approval_Memo.docx"
                          target="_blank"
                        >
                          1031 Pre-Approval Memo
                        </Link>
                      </li>
                      <li className="flex items-center gap-1">
                        <DocumentArrowDownIcon className="h-5 w-5 text-hazard-blue-600" />
                        <Link
                          className="font-semibold"
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/3Vho9gjCLkOJJYJxNXtmbp/4f745198d572088d99bb2fbcf7857b3e/REIT_Issued_DSTs_with_721_Exchange_Potential_Memo.pdf"
                          target="_blank"
                        >
                          REIT Issued DSTs with 721 Exchange Potential Memo
                        </Link>
                      </li>
                    </ul>
                    <h2 className="mt-5 text-lg font-semibold text-neon-orange-500">
                      IFG Required 1031 Forms
                    </h2>
                    <p className="max-w-prose text-sm">
                      The following forms are required for 1031 purchases.
                      Please refer to Gateway or Laserapp to download the most
                      updated form.
                    </p>
                    <ul className="mt-5 flex flex-col gap-1 text-sm italic [&_li]:flex [&_li]:items-center [&_li]:gap-2 [&_li_p]:line-clamp-1">
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        <p>1031 Pre-Approval Checklist</p>
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        <p>Accredited Investor Questionnaire</p>
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        <p>Alternative Investment Suitability Questionnaire</p>
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        <p>
                          Delaware Statutory Trust 1031 Exchange Acknowledgement
                        </p>
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        <p>Acknowledgement of Specific Risks Form</p>
                      </li>
                    </ul>
                  </div>
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      Investment Property Inventory
                    </h2>
                    <ul className="flex flex-col gap-1 text-sm italic">
                      <li className="flex items-center gap-1">
                        <DocumentArrowDownIcon className="h-5 w-5 text-hazard-blue-600" />
                        <Link
                          className="font-semibold"
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/5VLzmon7kq5L7CNdROhxFA/b4fdec4d82e47ffd0ae4a34195db1688/1031_Property_Inventory_Log.pdf"
                          target="_blank"
                        >
                          Property Inventory Log
                        </Link>
                      </li>
                      <li className="flex items-center gap-1">
                        <DocumentArrowDownIcon className="h-5 w-5 text-hazard-blue-600" />
                        <Link
                          className="font-semibold"
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/3OEzNLCOiVVI5HBLZKbu3S/954442f56babb875ed2db67fc1595f58/1031_Sponsor_Abbreviations.pdf"
                          target="_blank"
                        >
                          1031 Sponsor Abbreviations
                        </Link>
                      </li>
                      <li className="flex items-center gap-1">
                        <DocumentArrowDownIcon className="h-5 w-5 text-hazard-blue-600" />
                        <Link
                          className="font-semibold"
                          href="https://assets.ctfassets.net/9lvru9ro1ti1/1nYFLtLQsP2H5z7Z5hUkr1/ae831ceb9a257f584b452e01b699ba9b/1031_Investment_Property_Inventory.pdf"
                          target="_blank"
                        >
                          1031 Investment Property Inventory <sup>1</sup>
                        </Link>
                      </li>
                    </ul>
                    <p className=" mt-8 text-xs italic text-gray-500">
                      1. This document is updated during the first week of each
                      month. For recent approvals, see the inventory tables
                      below.
                    </p>
                  </div>
                </div>
                <div className="my-8 flow-root">
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
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hover:cursor-pointer"
                                onClick={getTenThirtyOnes}
                              >
                                Type
                                <ChevronUpDownIcon className="ml-2 inline-block h-5 w-5 text-gray-500" />
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Location
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
                                Projected First Year Return
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
                            {tenThirtyOneData.map((tenThirtyOne) => (
                              <tr
                                key={tenThirtyOne.sys.id}
                                className="[&_td]:text-wrap"
                              >
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {tenThirtyOne.fields.sponsorName}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  <Link
                                    href={`/app/alternative-investments/approved-products/${tenThirtyOne.fields.slug}`}
                                    className="font-semibold text-neon-orange-500"
                                  >
                                    {tenThirtyOne.fields.offeringName}
                                  </Link>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {tenThirtyOne.fields.productTypeCategory}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {tenThirtyOne.fields.location}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {tenThirtyOne.fields.minimum}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {tenThirtyOne.fields.projectedFirstYearReturn}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {tenThirtyOne.fields.status}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {tenThirtyOne.fields.approvalDate}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                  {tenThirtyOne.fields.contact}
                                  <br />
                                  {tenThirtyOne.fields.phone}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {!tenThirtyOneData.length && (
                          <h2 className="py-5 text-center text-lg font-semibold text-gray-500">
                            No Products Available. Please check back later.
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-neon-orange-500">
                  FOR BD Use Only
                </h2>
                <p className=" text-sm leading-7">
                  The percentages displayed next to the property locations
                  represent the Investor&apos;s pro rata ownership of each
                  property within the DST. Call sponsor to verify minimums, and
                  suitability requirements for specific states into which you
                  will be directing solicitations prior to speaking with any
                  clients or prospective clients. For the most recent
                  information, please contact the Alternative Investment
                  Department.
                </p>
              </Tab.Panel>
              {/* BDCs tab panel */}
              <Tab.Panel>
                <div>
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      IFG Required Forms
                    </h2>
                    <p className="max-w-prose text-sm">
                      The following forms are required for BDC purchases. Please
                      refer to Gateway or Laserapp to download the most updated
                      form.
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 text-sm italic [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Alternative Investment Suitability Questionnaire
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Pershing Private Investment form (for all Pershing
                        business).
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-8 flow-root">
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
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hover:cursor-pointer"
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
                            {bdcData &&
                              bdcData.map((bdc) => (
                                <tr
                                  key={bdc.sys.id}
                                  className="[&_td]:text-wrap"
                                >
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {bdc.fields.sponsorName}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    <Link
                                      href={`/app/alternative-investments/approved-products/${bdc.fields.slug}`}
                                      className="font-semibold text-neon-orange-500"
                                    >
                                      {bdc.fields.offeringName}
                                    </Link>
                                  </td>
                                  <td className="w-28 whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {bdc.fields.productTypeCategory}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {bdc.fields.objective}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {bdc.fields.suitability}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {bdc.fields.minimum}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {bdc.fields.status}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {bdc.fields.approvalDate}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {bdc.fields.contact}
                                    <br />
                                    {bdc.fields.phone}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        {!bdcData && (
                          <h2 className="py-5 text-center text-lg font-semibold text-gray-500">
                            No Products Available. Please check back later.
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-neon-orange-500">
                  FOR BD Use Only
                </h2>
                <p className="text-sm leading-7">
                  Please ensure to call sponsor to verify minimums, and
                  suitability requirements for specific states into which you
                  will be directing solicitations prior to speaking with any
                  clients or prospective clients. For the most recent
                  information, please contact the Alternative Investment
                  Department.
                </p>
              </Tab.Panel>
              {/* ICAPITAL PRODUCTS TAB PANEL */}
              <Tab.Panel>
                <div>
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      Resources
                    </h2>
                    <p className="max-w-prose text-sm">
                      The following forms are required for BDC purchases. Please
                      refer to Gateway or Laserapp to download the most updated
                      form.
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 text-sm italic [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Alternative Investment Suitability Questionnaire
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Pershing Private Investment form (for all Pershing
                        business).
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-8 flow-root">
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
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hover:cursor-pointer"
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Investment Types
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
                                Final Close
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Structure
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {iCapitalData &&
                              iCapitalData.map((product) => (
                                <tr
                                  key={product.sys.id}
                                  className="[&_td]:text-wrap"
                                >
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {product.fields.sponsorName}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    <Link
                                      href={`/app/alternative-investments/approved-products/${product.fields.slug}`}
                                      className="font-semibold text-neon-orange-500"
                                    >
                                      {product.fields.offeringName}
                                    </Link>
                                  </td>
                                  <td className="w-28 whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.productTypeCategory}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.investmentTypes}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.suitability}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.finalClose}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.structure}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        {!iCapitalData && (
                          <h2 className="py-5 text-center text-lg font-semibold text-gray-500">
                            No Products Available. Please check back later.
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-neon-orange-500">
                  FOR BD Use Only
                </h2>
                <p className="text-sm leading-7">
                  Please ensure to call sponsor to verify minimums, and
                  suitability requirements for specific states into which you
                  will be directing solicitations prior to speaking with any
                  clients or prospective clients. For the most recent
                  information, please contact the Alternative Investment
                  Department.
                </p>
              </Tab.Panel>
              {/* INTERVAL FUNDS TAB PANEL */}
              <Tab.Panel>
                <div>
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      Resources
                    </h2>
                    <p className="max-w-prose text-sm">
                      The following forms are required for BDC purchases. Please
                      refer to Gateway or Laserapp to download the most updated
                      form.
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 text-sm italic [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Alternative Investment Suitability Questionnaire
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Pershing Private Investment form (for all Pershing
                        business).
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-8 flow-root">
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
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hover:cursor-pointer"
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
                                Contact
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {intervalFundData &&
                              intervalFundData.map((product) => (
                                <tr
                                  key={product.sys.id}
                                  className="[&_td]:text-wrap"
                                >
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {product.fields.sponsorName}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    <Link
                                      href={`/app/alternative-investments/approved-products/${product.fields.slug}`}
                                      className="font-semibold text-neon-orange-500"
                                    >
                                      {product.fields.offeringName}
                                    </Link>
                                  </td>
                                  <td className="w-28 whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.productTypeCategory}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.objective}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.suitability}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.minimum}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.status}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.approvalDate}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.contact}
                                    <br />
                                    {product.fields.phone}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        {!intervalFundData && (
                          <h2 className="py-5 text-center text-lg font-semibold text-gray-500">
                            No Products Available. Please check back later.
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-neon-orange-500">
                  FOR BD Use Only
                </h2>
                <p className="text-sm leading-7">
                  Please ensure to call sponsor to verify minimums, and
                  suitability requirements for specific states into which you
                  will be directing solicitations prior to speaking with any
                  clients or prospective clients. For the most recent
                  information, please contact the Alternative Investment
                  Department.
                </p>
              </Tab.Panel>
              {/* NON TRADED PREFERRED SECURITIES */}
              <Tab.Panel>
                <div>
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      Resources
                    </h2>
                    <p className="max-w-prose text-sm">
                      The following forms are required for BDC purchases. Please
                      refer to Gateway or Laserapp to download the most updated
                      form.
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 text-sm italic [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Alternative Investment Suitability Questionnaire
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Pershing Private Investment form (for all Pershing
                        business).
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-8 flow-root">
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
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hover:cursor-pointer"
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
                                Contact
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {nonTradedPreferredSecuritiesData &&
                              nonTradedPreferredSecuritiesData.map(
                                (product) => (
                                  <tr
                                    key={product.sys.id}
                                    className="[&_td]:text-wrap"
                                  >
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                      {product.fields.sponsorName}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      <Link
                                        href={`/app/alternative-investments/approved-products/${product.fields.slug}`}
                                        className="font-semibold text-neon-orange-500"
                                      >
                                        {product.fields.offeringName}
                                      </Link>
                                    </td>
                                    <td className="w-28 whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.productTypeCategory}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.objective}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.suitability}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.minimum}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.status}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.approvalDate}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.contact}
                                      <br />
                                      {product.fields.phone}
                                    </td>
                                  </tr>
                                ),
                              )}
                          </tbody>
                        </table>
                        {!nonTradedPreferredSecuritiesData && (
                          <h2 className="py-5 text-center text-lg font-semibold text-gray-500">
                            No Products Available. Please check back later.
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-neon-orange-500">
                  FOR BD Use Only
                </h2>
                <p className="text-sm leading-7">
                  Please ensure to call sponsor to verify minimums, and
                  suitability requirements for specific states into which you
                  will be directing solicitations prior to speaking with any
                  clients or prospective clients. For the most recent
                  information, please contact the Alternative Investment
                  Department.
                </p>
              </Tab.Panel>
              {/*  OIL AND GAS */}
              <Tab.Panel>
                <div>
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      Resources
                    </h2>
                    <p className="max-w-prose text-sm">
                      The following forms are required for BDC purchases. Please
                      refer to Gateway or Laserapp to download the most updated
                      form.
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 text-sm italic [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Alternative Investment Suitability Questionnaire
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Pershing Private Investment form (for all Pershing
                        business).
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-8 flow-root">
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
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hover:cursor-pointer"
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
                                Contact
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {oilAndGasData &&
                              oilAndGasData.map((product) => (
                                <tr
                                  key={product.sys.id}
                                  className="[&_td]:text-wrap"
                                >
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {product.fields.sponsorName}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    <Link
                                      href={`/app/alternative-investments/approved-products/${product.fields.slug}`}
                                      className="font-semibold text-neon-orange-500"
                                    >
                                      {product.fields.offeringName}
                                    </Link>
                                  </td>
                                  <td className="w-28 whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.productTypeCategory}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.objective}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.suitability}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.minimum}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.status}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.approvalDate}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.contact}
                                    <br />
                                    {product.fields.phone}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        {!oilAndGasData && (
                          <h2 className="py-5 text-center text-lg font-semibold text-gray-500">
                            No Products Available. Please check back later.
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-neon-orange-500">
                  FOR BD Use Only
                </h2>
                <p className="text-sm leading-7">
                  Please ensure to call sponsor to verify minimums, and
                  suitability requirements for specific states into which you
                  will be directing solicitations prior to speaking with any
                  clients or prospective clients. For the most recent
                  information, please contact the Alternative Investment
                  Department.
                </p>
              </Tab.Panel>
              {/* QUALIFIED OPPORTUNITY ZONE FUNDS */}
              <Tab.Panel>
                <div>
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      Resources
                    </h2>
                    <p className="max-w-prose text-sm">
                      The following forms are required for BDC purchases. Please
                      refer to Gateway or Laserapp to download the most updated
                      form.
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 text-sm italic [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Alternative Investment Suitability Questionnaire
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Pershing Private Investment form (for all Pershing
                        business).
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-8 flow-root">
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
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hover:cursor-pointer"
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
                                Contact
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {qualifiedOpportunityZoneFundsData &&
                              qualifiedOpportunityZoneFundsData.map(
                                (product) => (
                                  <tr
                                    key={product.sys.id}
                                    className="[&_td]:text-wrap"
                                  >
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                      {product.fields.sponsorName}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      <Link
                                        href={`/app/alternative-investments/approved-products/${product.fields.slug}`}
                                        className="font-semibold text-neon-orange-500"
                                      >
                                        {product.fields.offeringName}
                                      </Link>
                                    </td>
                                    <td className="w-28 whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.productTypeCategory}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.objective}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.suitability}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.minimum}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.status}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.approvalDate}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                      {product.fields.contact}
                                      <br />
                                      {product.fields.phone}
                                    </td>
                                  </tr>
                                ),
                              )}
                          </tbody>
                        </table>
                        {!qualifiedOpportunityZoneFundsData.length && (
                          <h2 className="py-5 text-center text-lg font-semibold text-gray-500">
                            No Products Available. Please check back later.
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-neon-orange-500">
                  FOR BD Use Only
                </h2>
                <p className=" text-sm leading-7">
                  Please ensure to call sponsor to verify minimums, and
                  suitability requirements for specific states into which you
                  will be directing solicitations prior to speaking with any
                  clients or prospective clients. For the most recent
                  information, please contact the Alternative Investment
                  Department.
                </p>
              </Tab.Panel>
              {/* REAL ESTATE LLCS AND LPS */}
              <Tab.Panel>
                <div>
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      Resources
                    </h2>
                    <p className="max-w-prose text-sm">
                      The following forms are required for BDC purchases. Please
                      refer to Gateway or Laserapp to download the most updated
                      form.
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 text-sm italic [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Alternative Investment Suitability Questionnaire
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Pershing Private Investment form (for all Pershing
                        business).
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-8 flow-root">
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
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hover:cursor-pointer"
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
                                Contact
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {realEstateData &&
                              realEstateData.map((product) => (
                                <tr
                                  key={product.sys.id}
                                  className="[&_td]:text-wrap"
                                >
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {product.fields.sponsorName}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    <Link
                                      href={`/app/alternative-investments/approved-products/${product.fields.slug}`}
                                      className="font-semibold text-neon-orange-500"
                                    >
                                      {product.fields.offeringName}
                                    </Link>
                                  </td>
                                  <td className="w-28 whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.productTypeCategory}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.objective}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.suitability}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.minimum}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.status}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.approvalDate}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.contact}
                                    <br />
                                    {product.fields.phone}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        {!realEstateData && (
                          <h2 className="py-5 text-center text-lg font-semibold text-gray-500">
                            No Products Available. Please check back later.
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-neon-orange-500">
                  FOR BD Use Only
                </h2>
                <p className="text-sm leading-7">
                  Please ensure to call sponsor to verify minimums, and
                  suitability requirements for specific states into which you
                  will be directing solicitations prior to speaking with any
                  clients or prospective clients. For the most recent
                  information, please contact the Alternative Investment
                  Department.
                </p>
              </Tab.Panel>
              {/* REITS */}
              <Tab.Panel>
                <div>
                  <div className="w-fit rounded bg-gray-100 px-4 py-2">
                    <h2 className="text-lg font-semibold text-neon-orange-500">
                      Resources
                    </h2>
                    <p className="max-w-prose text-sm">
                      The following forms are required for BDC purchases. Please
                      refer to Gateway or Laserapp to download the most updated
                      form.
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 text-sm italic [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Alternative Investment Suitability Questionnaire
                      </li>
                      <li>
                        <DocumentCheckIcon className="h-5 w-5 text-hazard-blue-600" />
                        Pershing Private Investment form (for all Pershing
                        business).
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-8 flow-root">
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
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hover:cursor-pointer"
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
                                Contact
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {reitsData &&
                              reitsData.map((product) => (
                                <tr
                                  key={product.sys.id}
                                  className="[&_td]:text-wrap"
                                >
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {product.fields.sponsorName}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    <Link
                                      href={`/app/alternative-investments/approved-products/${product.fields.slug}`}
                                      className="font-semibold text-neon-orange-500"
                                    >
                                      {product.fields.offeringName}
                                    </Link>
                                  </td>
                                  <td className="w-28 whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.productTypeCategory}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.objective}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.suitability}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.minimum}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.status}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.approvalDate}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-900">
                                    {product.fields.contact}
                                    <br />
                                    {product.fields.phone}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        {!reitsData && (
                          <h2 className="py-5 text-center text-lg font-semibold text-gray-500">
                            No Products Available. Please check back later.
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-neon-orange-500">
                  FOR BD Use Only
                </h2>
                <p className="text-sm leading-7">
                  Please ensure to call sponsor to verify minimums, and
                  suitability requirements for specific states into which you
                  will be directing solicitations prior to speaking with any
                  clients or prospective clients. For the most recent
                  information, please contact the Alternative Investment
                  Department.
                </p>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default approvedProducts;
