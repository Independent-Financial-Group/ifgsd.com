import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../../components/App/Layout/Layout";
import ContentContainer from "../../../components/App/ContentContainer/ContentContainer";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import GridTile from "../../../components/App/GridTile/GridTile";
import { Tab } from "@headlessui/react";

// SPLIDE
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// CONTENTFUL
import * as contentful from "../../../utils/contentful";

const partnerMarketplace = () => {
  const tabLabels = ["Elite", "Platinum", "Gold", "Silver"];
  const [elitePartners, setElitePartners] = useState([]);
  const [platinumPartners, setPlatinumPartners] = useState([]);
  const [goldPartners, setGoldPartners] = useState([]);
  const [silverPartners, setSilverPartners] = useState([]);

  const getPartners = async () => {
    const eliteData = await contentful.client
      .getEntries({
        content_type: "partners",
        "fields.partnerLevel[match]": "Elite",
        order: "fields.partnerName",
      })
      .then((response) => {
        setElitePartners([...response.items]);
      });
    const platinumData = await contentful.client
      .getEntries({
        content_type: "partners",
        "fields.partnerLevel[match]": "Platinum",
        order: "fields.partnerName",
      })
      .then((response) => {
        setPlatinumPartners([...response.items]);
      });
    const goldData = await contentful.client
      .getEntries({
        content_type: "partners",
        "fields.partnerLevel[match]": "Gold",
        order: "fields.partnerName",
      })
      .then((response) => {
        setGoldPartners([...response.items]);
      });
    const silverData = await contentful.client
      .getEntries({
        content_type: "partners",
        "fields.partnerLevel[match]": "Silver",
        order: "fields.partnerName",
      })
      .then((response) => {
        setSilverPartners([...response.items]);
      });
  };

  useEffect(() => {
    getPartners();
  }, []);

  // const splideOptions = {
  //   type: "slide",
  //   pagination: true,
  //   arrows: true,
  //   gap: "80px",
  //   classes: {
  //     arrow:
  //       "bg-neon-orange-500 absolute rounded-full p-2 z-50 disabled:bg-gray-100 h-10 w-10 [&>svg]:disabled:!fill-gray-500 [&>svg]:!fill-seabreeze-500 [&>svg]:!w-6 [&>svg]:!h-6 top-1/2 -translate-y-1/2",
  //     pagination: "flex items-center justify-center gap-3",
  //     page: "bg-hazard-blue-500 z-50 h-2 w-2 rounded-full",
  //   },
  //   breakpoints: {
  //     640: {
  //       perPage: 1,
  //     },
  //     768: {
  //       perPage: 2,
  //     },
  //     1024: {
  //       perPage: 4,
  //     },
  //     1280: {
  //       perPage: 4,
  //     },
  //     1536: {
  //       perPage: 4,
  //     },
  //   },
  //   padding: { left: 80, right: 80 },
  // };

  return (
    <>
      <Head>
        <title>Partner Market Place | Resources</title>
      </Head>
      <Layout>
        <PageHeader pageName="Partner Marketplace" breadCrumb="Resources" />
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
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mb-5 outline"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={`${partner.fields.parterName} logo`}
                        className="mb-3 h-[150px] w-full object-contain"
                      />
                    </a>
                    <h2 className="font-semibold text-gray-900">
                      {partner.fields.partnerName}
                    </h2>
                    <p className="my-3 line-clamp-3 text-sm leading-7 text-gray-600">
                      {partner.fields.about}
                    </p>
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mx-auto block w-fit rounded bg-hazard-blue-500 p-2 text-white hover:cursor-pointer "
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-x-10 xl:gap-y-5">
                {platinumPartners.map((partner) => (
                  <div>
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mb-5 outline"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={`${partner.fields.parterName} logo`}
                        className="mb-3 h-[150px] w-full object-contain"
                      />
                    </a>
                    <h2 className="font-semibold text-gray-900">
                      {partner.fields.partnerName}
                    </h2>
                    <p className="my-3 line-clamp-3 text-sm leading-7 text-gray-600">
                      {partner.fields.about}
                    </p>
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mx-auto block w-fit rounded bg-hazard-blue-500 p-2 text-white hover:cursor-pointer "
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-x-10 xl:gap-y-5">
                {goldPartners.map((partner) => (
                  <div>
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mb-5 outline"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={`${partner.fields.parterName} logo`}
                        className="mb-3 h-[150px] w-full object-contain"
                      />
                    </a>
                    <h2 className="font-semibold text-gray-900">
                      {partner.fields.partnerName}
                    </h2>
                    <p className="my-3 line-clamp-3 text-sm leading-7 text-gray-600">
                      {partner.fields.about}
                    </p>
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mx-auto block w-fit rounded bg-hazard-blue-500 p-2 text-white hover:cursor-pointer "
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="xl:grid xl:grid-cols-3 xl:gap-x-10 xl:gap-y-5">
                {silverPartners.map((partner) => (
                  <div>
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mb-5 outline"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={`${partner.fields.parterName} logo`}
                        className="mb-3 h-[150px] w-full object-contain"
                      />
                    </a>
                    <h2 className="font-semibold text-gray-900">
                      {partner.fields.partnerName}
                    </h2>
                    <p className="my-3 line-clamp-3 text-sm leading-7 text-gray-600">
                      {partner.fields.about}
                    </p>
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mx-auto block w-fit rounded bg-hazard-blue-500 p-2 text-white hover:cursor-pointer "
                    >
                      Learn More
                    </a>
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
