import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import GridTile from "components/App/GridTile/GridTile";

import { Tab } from "@headlessui/react";

// SPLIDE
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// CONTENTFUL
import * as contentful from "../../../../utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const elitePartners = await client.getEntries({
    content_type: "partners",
    "fields.partnerLevel[match]": "Elite",
    order: "fields.partnerName",
  });

  const platinumPartners = await client.getEntries({
    content_type: "partners",
    "fields.partnerLevel[match]": "Platinum",
    order: "fields.partnerName",
  });

  const goldPartners = await client.getEntries({
    content_type: "partners",
    "fields.partnerLevel[match]": "Gold",
    order: "fields.partnerName",
  });

  const silverPartners = await client.getEntries({
    content_type: "partners",
    "fields.partnerLevel[match]": "Silver",
    order: "fields.partnerName",
  });

  return {
    props: {
      preview: preview || false,
      elitePartners: [...elitePartners.items],
      platinumPartners: [...platinumPartners.items],
      goldPartners: [...goldPartners.items],
      silverPartners: [...silverPartners.items],
    },
    revalidate: 10,
  };
}

const partnerMarketplace = ({
  preview,
  elitePartners,
  platinumPartners,
  goldPartners,
  silverPartners,
}) => {
  const tabLabels = ["Elite", "Platinum", "Gold", "Silver"];

  return (
    <>
      <Head>
        <title>Partner Market Place | Resources</title>
      </Head>
      <PageHeader pageName="Partner Marketplace" breadCrumb="Resources" />
      <Layout preview={preview}>
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
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-x-10 xl:gap-y-5">
                {elitePartners.map((partner) => (
                  <div>
                    <Link
                      href={partner.fields.linkToPartnerWebsite}
                      className="mb-5"
                      target="_blank"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={`${partner.fields.parterName} logo`}
                        className="mb-3 h-[150px] w-full object-contain"
                      />
                    </Link>
                    <h2 className="text-ifg-turqoise-500 text-center font-semibold">
                      {partner.fields.partnerName}
                    </h2>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-x-10 xl:gap-y-5">
                {platinumPartners.map((partner) => (
                  <div>
                    <Link
                      href={partner.fields.linkToPartnerWebsite}
                      className="mb-5"
                      target="_blank"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={`${partner.fields.parterName} logo`}
                        className="mb-3 h-[150px] w-full object-contain"
                      />
                    </Link>
                    <h2 className="text-ifg-turqoise-500 text-center font-semibold">
                      {partner.fields.partnerName}
                    </h2>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-x-10 xl:gap-y-5">
                {goldPartners.map((partner) => (
                  <div>
                    <Link
                      href={partner.fields.linkToPartnerWebsite}
                      className="mb-5"
                      target="_blank"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={`${partner.fields.parterName} logo`}
                        className="mb-3 h-[150px] w-full object-contain"
                      />
                    </Link>
                    <h2 className="text-ifg-turqoise-500 text-center font-semibold">
                      {partner.fields.partnerName}
                    </h2>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-x-10 xl:gap-y-5">
                {silverPartners.map((partner) => (
                  <div>
                    <Link
                      href={partner.fields.linkToPartnerWebsite}
                      className="mb-5"
                      target="_blank"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={`${partner.fields.parterName} logo`}
                        className="mb-3 h-[150px] w-full object-contain"
                      />
                    </Link>
                    <h2 className="text-ifg-turqoise-500 text-center font-semibold">
                      {partner.fields.partnerName}
                    </h2>
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

export default partnerMarketplace;
