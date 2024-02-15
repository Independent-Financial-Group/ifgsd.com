import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";

import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../components/App/ContentContainer/ContentContainer";
import { Tab } from "@headlessui/react";

import * as contentful from "../../../utils/contentful";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const affiliationData = await client.getEntries({
    content_type: "corporateDiscounts",
    order: "fields.companyName",
    "fields.category[match]": "Affiliation Benefits",
  });

  const technologyData = await client.getEntries({
    content_type: "corporateDiscounts",
    order: "fields.companyName",
    "fields.category[match]": "Technology",
  });

  const analysisToolsData = await client.getEntries({
    content_type: "corporateDiscounts",
    order: "fields.companyName",
    "fields.category[match]": "Investment & Portfolio Analysis Tools",
  });

  const marketingData = await client.getEntries({
    content_type: "corporateDiscounts",
    order: "fields.companyName",
    "fields.category[match]": "Marketing",
  });

  const educationAndTrainingData = await client.getEntries({
    content_type: "corporateDiscounts",
    order: "fields.companyName",
    "fields.category[match]": "Advanced Education & Training Services",
  });

  const businessOperationsData = await client.getEntries({
    content_type: "corporateDiscounts",
    order: "fields.companyName",
    "fields.category[match]": "Business Operations",
  });

  return {
    props: {
      preview: preview || false,
      affiliationData: [...affiliationData.items],
      technologyData: [...technologyData.items],
      analysisToolsData: [...analysisToolsData.items],
      marketingData: [...marketingData.items],
      educationAndTrainingData: [...educationAndTrainingData.items],
      businessOperationsData: [...businessOperationsData.items],
    },
    revalidate: 10,
  };
}

const corporateDiscounts = ({
  preview,
  affiliationData,
  technologyData,
  analysisToolsData,
  marketingData,
  educationAndTrainingData,
  businessOperationsData,
}) => {
  const tabLabels = [
    "Affiliation Benefits",
    "Technology",
    "Investment & Portfolio Analysis Tools",
    "Marketing",
    "Advanced Education & Training Services",
    "Business Operations",
  ];

  return (
    <>
      <Head>
        <title>Corporate Discounts | Resources</title>
      </Head>
      <Layout preview={preview}>
        <PageHeader pageName="Corporate Discounts" breadCrumb="Resources" />
        <ContentContainer>
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
                {affiliationData.map((discount) => (
                  <div>
                    <img
                      src={`https:${discount.fields.companyLogo.fields.file.url}`}
                      className="h-40 w-40 object-contain"
                    />
                    <h2 className="text-lg font-semibold">
                      {discount.fields.companyName}
                    </h2>
                    <Markdown
                      className="columns-2 text-sm leading-7 [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_p]:mb-2"
                      remarkPlugins={[remarkGfm]}
                    >
                      {discount.fields.description}
                    </Markdown>
                    {discount.fields.contactNames && (
                      <div className="mt-5 w-fit rounded bg-neon-orange-100 p-2 text-sm text-neon-orange-500">
                        <p className="font-semibold">
                          Your Discount Contact(s):
                        </p>
                        {discount.fields.contactNames.map((name, i) => (
                          <>
                            {<p>{name}</p>}
                            {discount.fields.contactEmails &&
                            discount.fields.contactEmails.length > 0 ? (
                              <p className="italic">
                                {discount.fields.contactEmails[i]}
                              </p>
                            ) : null}
                            {discount.fields.contactNumbers &&
                            discount.fields.contactNumbers.length > 0 ? (
                              <p>{discount.fields.contactNumbers[i]}</p>
                            ) : null}
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-5">
                {technologyData.map((discount) => (
                  <div>
                    <img
                      src={`https:${discount.fields.companyLogo.fields.file.url}`}
                      className="h-40 w-40 object-contain"
                    />
                    <h2 className="text-lg font-semibold">
                      {discount.fields.companyName}
                    </h2>
                    <Markdown
                      className="text-sm leading-7 [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_p]:mb-2"
                      remarkPlugins={[remarkGfm]}
                    >
                      {discount.fields.description}
                    </Markdown>
                    {discount.fields.contactNames && (
                      <div className="mt-5 rounded bg-neon-orange-100 p-2 text-sm text-neon-orange-500">
                        <p className="font-semibold">
                          Your Discount Contact(s):
                        </p>
                        {discount.fields.contactNames.map((name, i) => (
                          <>
                            {<p>{name}</p>}
                            {discount.fields.contactEmails &&
                            discount.fields.contactEmails.length > 0 ? (
                              <p className="italic">
                                {discount.fields.contactEmails[i]}
                              </p>
                            ) : null}
                            {discount.fields.contactNumbers &&
                            discount.fields.contactNumbers.length > 0 ? (
                              <p>{discount.fields.contactNumbers[i]}</p>
                            ) : null}
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-5">
                {analysisToolsData.map((discount) => (
                  <div>
                    <img
                      src={`https:${discount.fields.companyLogo.fields.file.url}`}
                      className="h-40 w-40 object-contain"
                    />
                    <h2 className="text-lg font-semibold">
                      {discount.fields.companyName}
                    </h2>
                    <Markdown
                      className="text-sm leading-7 [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_p]:mb-2"
                      remarkPlugins={[remarkGfm]}
                    >
                      {discount.fields.description}
                    </Markdown>
                    {discount.fields.contactNames && (
                      <div className="mt-5 rounded bg-neon-orange-100 p-2 text-sm text-neon-orange-500">
                        <p className="font-semibold">
                          Your Discount Contact(s):
                        </p>
                        {discount.fields.contactNames.map((name, i) => (
                          <>
                            {<p>{name}</p>}
                            {discount.fields.contactEmails &&
                            discount.fields.contactEmails.length > 0 ? (
                              <p className="italic">
                                {discount.fields.contactEmails[i]}
                              </p>
                            ) : null}
                            {discount.fields.contactNumbers &&
                            discount.fields.contactNumbers.length > 0 ? (
                              <p>{discount.fields.contactNumbers[i]}</p>
                            ) : null}
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-5">
                {marketingData.map((discount) => (
                  <div>
                    <img
                      src={`https:${discount.fields.companyLogo.fields.file.url}`}
                      className="h-40 w-40 object-contain"
                    />
                    <h2 className="text-lg font-semibold">
                      {discount.fields.companyName}
                    </h2>
                    <Markdown
                      className="text-sm leading-7 [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_p]:mb-2"
                      remarkPlugins={[remarkGfm]}
                    >
                      {discount.fields.description}
                    </Markdown>
                    {discount.fields.contactNames && (
                      <div className="mt-5 rounded bg-neon-orange-100 p-2 text-sm text-neon-orange-500">
                        <p className="font-semibold">
                          Your Discount Contact(s):
                        </p>
                        {discount.fields.contactNames.map((name, i) => (
                          <>
                            {<p>{name}</p>}
                            {discount.fields.contactEmails &&
                            discount.fields.contactEmails.length > 0 ? (
                              <p className="italic">
                                {discount.fields.contactEmails[i]}
                              </p>
                            ) : null}
                            {discount.fields.contactNumbers &&
                            discount.fields.contactNumbers.length > 0 ? (
                              <p>{discount.fields.contactNumbers[i]}</p>
                            ) : null}
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-5">
                {educationAndTrainingData.map((discount) => (
                  <div>
                    <img
                      src={`https:${discount.fields.companyLogo.fields.file.url}`}
                      className="h-40 w-40 object-contain"
                    />
                    <h2 className="text-lg font-semibold">
                      {discount.fields.companyName}
                    </h2>
                    <Markdown
                      className="text-sm leading-7 [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_p]:mb-2"
                      remarkPlugins={[remarkGfm]}
                    >
                      {discount.fields.description}
                    </Markdown>
                    {discount.fields.contactNames && (
                      <div className="mt-5 rounded bg-neon-orange-100 p-2 text-sm text-neon-orange-500">
                        <p className="font-semibold">
                          Your Discount Contact(s):
                        </p>
                        {discount.fields.contactNames.map((name, i) => (
                          <>
                            {<p>{name}</p>}
                            {discount.fields.contactEmails &&
                            discount.fields.contactEmails.length > 0 ? (
                              <p className="italic">
                                {discount.fields.contactEmails[i]}
                              </p>
                            ) : null}
                            {discount.fields.contactNumbers &&
                            discount.fields.contactNumbers.length > 0 ? (
                              <p>{discount.fields.contactNumbers[i]}</p>
                            ) : null}
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-5">
                {businessOperationsData.map((discount) => (
                  <div>
                    <img
                      src={`https:${discount.fields.companyLogo.fields.file.url}`}
                      className="h-40 w-40 object-contain"
                    />
                    <h2 className="text-lg font-semibold">
                      {discount.fields.companyName}
                    </h2>
                    <Markdown
                      className="text-sm leading-7 [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_p]:mb-2"
                      remarkPlugins={[remarkGfm]}
                    >
                      {discount.fields.description}
                    </Markdown>
                    {discount.fields.contactNames && (
                      <div className="mt-5 rounded bg-neon-orange-100 p-2 text-sm text-neon-orange-500">
                        <p className="font-semibold">
                          Your Discount Contact(s):
                        </p>
                        {discount.fields.contactNames.map((name, i) => (
                          <>
                            {<p>{name}</p>}
                            {discount.fields.contactEmails &&
                            discount.fields.contactEmails.length > 0 ? (
                              <p className="italic">
                                {discount.fields.contactEmails[i]}
                              </p>
                            ) : null}
                            {discount.fields.contactNumbers &&
                            discount.fields.contactNumbers.length > 0 ? (
                              <p>{discount.fields.contactNumbers[i]}</p>
                            ) : null}
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default corporateDiscounts;
