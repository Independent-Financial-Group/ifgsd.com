import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";

import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../components/App/ContentContainer/ContentContainer";
import { Tab } from "@headlessui/react";

import * as contentful from "../../../utils/contentful";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const corporateDiscounts = () => {
  const tabLabels = [
    "Affiliation Benefits",
    "Technology",
    "Investment & Portfolio Analysis Tools",
    "Marketing",
    "Advanced Education & Training Services",
    "Business Operations",
  ];

  const [affiliationDiscounts, setAffiliationDiscounts] = useState([]);
  const [technologyDiscounts, setTechnologyDiscounts] = useState([]);
  const [
    investmentAndPortfolioToolsDiscounts,
    setInvestmentAndPortfolioToolsDiscounts,
  ] = useState([]);
  const [marketingDiscounts, setMarketingDiscounts] = useState([]);
  const [
    educationAndTrainingServicesDiscounts,
    setEducationAndTrainingServicesDiscounts,
  ] = useState([]);
  const [businessOperationsDiscounts, setBusinessOperationsDiscounts] =
    useState([]);

  const getCorporateDiscounts = async (category) => {
    const affiliationData = await contentful.client
      .getEntries({
        content_type: "corporateDiscounts",
        order: "fields.companyName",
        "fields.category[match]": "Affiliation Benefits",
      })
      .then((response) => {
        setAffiliationDiscounts([...response.items]);
      });

    const technologyData = await contentful.client
      .getEntries({
        content_type: "corporateDiscounts",
        order: "fields.companyName",
        "fields.category[match]": "Technology",
      })
      .then((response) => {
        console.log(response.items);
        setTechnologyDiscounts([...response.items]);
      });

    const analysisToolsData = await contentful.client
      .getEntries({
        content_type: "corporateDiscounts",
        order: "fields.companyName",
        "fields.category[match]": "Investment & Portfolio Analysis Tools",
      })
      .then((response) => {
        setInvestmentAndPortfolioToolsDiscounts([...response.items]);
      });

    const marketingData = await contentful.client
      .getEntries({
        content_type: "corporateDiscounts",
        order: "fields.companyName",
        "fields.category[match]": "Marketing",
      })
      .then((response) => {
        setMarketingDiscounts([...response.items]);
      });

    const educationAndTrainingData = await contentful.client
      .getEntries({
        content_type: "corporateDiscounts",
        order: "fields.companyName",
        "fields.category[match]": "Advanced Education & Training Services",
      })
      .then((response) => {
        setEducationAndTrainingServicesDiscounts([...response.items]);
      });

    const businessOperationsData = await contentful.client
      .getEntries({
        content_type: "corporateDiscounts",
        order: "fields.companyName",
        "fields.category[match]": "Business Operations",
      })
      .then((response) => {
        setBusinessOperationsDiscounts([...response.items]);
      });
  };

  useEffect(() => {
    getCorporateDiscounts();
  }, []);

  return (
    <>
      <Head>
        <title>Corporate Discounts | Resources</title>
      </Head>
      <Layout>
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
                {affiliationDiscounts.map((discount) => (
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
                {technologyDiscounts.map((discount) => (
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
                {investmentAndPortfolioToolsDiscounts.map((discount) => (
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
                {marketingDiscounts.map((discount) => (
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
                {educationAndTrainingServicesDiscounts.map((discount) => (
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
                {businessOperationsDiscounts.map((discount) => (
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
