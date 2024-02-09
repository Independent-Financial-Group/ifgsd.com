import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../../components/App/Layout/Layout";
import ContentContainer from "../../../components/App/ContentContainer/ContentContainer";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import GridTile from "../../../components/App/GridTile/GridTile";

// SPLIDE
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// CONTENTFUL
import * as contentful from "../../../utils/contentful";

const partnerMarketplace = () => {
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

  const splideOptions = {
    type: "slide",
    pagination: true,
    arrows: true,
    gap: "80px",
    classes: {
      arrow:
        "bg-neon-orange-500 absolute rounded-full p-2 z-50 disabled:bg-gray-100 h-10 w-10 [&>svg]:disabled:!fill-gray-500 [&>svg]:!fill-seabreeze-500 [&>svg]:!w-6 [&>svg]:!h-6 top-1/2 -translate-y-1/2",
      pagination: "flex items-center justify-center gap-3",
      page: "bg-hazard-blue-500 z-50 h-2 w-2 rounded-full",
    },
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 4,
      },
      1280: {
        perPage: 4,
      },
      1536: {
        perPage: 4,
      },
    },
    padding: { left: 80, right: 80 },
  };

  return (
    <>
      <Head>
        <title>Partner Market Place | Rep Portal</title>
      </Head>
      <Layout>
        <PageHeader pageName="Partner Marketplace" breadCrumb="Resources" />
        <ContentContainer>
          <GridTile
            colSpan={"col-span-full pb-5"}
            tileTitle={"Elite Partners"}
            titleHex="bg-gradient-to-r from-red-500 to-orange-500"
          >
            <Splide
              aria-label="My Favorite Images"
              options={splideOptions}
              tag="div"
            >
              {elitePartners.map((partner) => (
                <SplideSlide key={partner.fields.partnerName}>
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      target="_blank"
                      rel="nofollow noopener"
                      className="hover:cursor-pointer"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={partner.fields.partnerName}
                        className="width-[25%] aspect-[3/2] object-contain"
                      />
                    </a>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </GridTile>
          <GridTile
            colSpan={"col-span-full pb-5"}
            tileTitle={"Platinum Partners"}
            titleHex="bg-gradient-to-r from-green-400 via-green-200 to-green-400"
          >
            <Splide
              aria-label="My Favorite Images"
              options={splideOptions}
              tag="div"
            >
              {platinumPartners.map((partner) => (
                <SplideSlide key={partner.fields.partnerName}>
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={partner.fields.partnerName}
                        className="width-[25%] aspect-[3/2] object-contain"
                      />
                    </a>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </GridTile>
          <GridTile
            colSpan={"col-span-full pb-5"}
            tileTitle={"Gold Partners"}
            titleHex="bg-gradient-to-r from-yellow-400 to-yellow-300"
          >
            <Splide
              aria-label="My Favorite Images"
              options={splideOptions}
              tag="div"
            >
              {goldPartners.map((partner) => (
                <SplideSlide key={partner.fields.partnerName}>
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={partner.fields.partnerName}
                        className="width-[25%] aspect-[3/2] object-contain"
                      />
                    </a>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </GridTile>
          <GridTile
            colSpan={"col-span-full pb-5"}
            tileTitle={"Silver Partners"}
            titleHex="bg-gradient-to-r from-gray-300 to-gray-500"
          >
            <Splide
              aria-label="My Favorite Images"
              options={splideOptions}
              tag="div"
            >
              {silverPartners.map((partner) => (
                <SplideSlide key={partner.fields.partnerName}>
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href={partner.fields.linkToPartnerWebsite}
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <img
                        src={`https:${partner.fields.logo.fields.file.url}`}
                        alt={partner.fields.partnerName}
                        className="width-[25%] aspect-[3/2] object-contain"
                      />
                    </a>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </GridTile>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default partnerMarketplace;
