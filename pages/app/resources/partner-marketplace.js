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

  const getPartners = async () => {
    const data = await contentful.client
      .getEntries({
        content_type: "partners",
      })
      .then((response) => {
        setElitePartners([...response.items]);
      });
  };

  useEffect(() => {
    getPartners();
  }, []);

  return (
    <>
      <Head>
        <title>Partner Market Place | Rep Portal</title>
      </Head>
      <Layout>
        <PageHeader pageName="Partner Marketplace" breadCrumb="Resources" />
        <ContentContainer>
          <GridTile colSpan={"col-span-6 pb-5"} tileTitle={"Elite Partners"}>
            <Splide
              aria-label="My Favorite Images"
              options={{
                type: "loop",
                perPage: 2,
                pagination: false,
                arrows: false,
                gap: "50px",
                autoScroll: {
                  speed: 0.3,
                },
                autoplay: true,
              }}
              tag="div"
              extensions={{ AutoScroll }}
            >
              {elitePartners.map((partner) => (
                <SplideSlide key={partner.fields.partnerName}>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={`https:${partner.fields.logo.fields.file.url}`}
                      alt={partner.fields.partnerName}
                      className="width-[25%] aspect-[3/2] object-contain"
                    />
                    <Link
                      href={"#"}
                      className="mt-2 w-fit rounded-lg bg-neon-orange-500 p-2 text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </GridTile>
          <GridTile colSpan={"col-span-6 pb-5"} tileTitle={"Platinum Partners"}>
            <Splide
              aria-label="My Favorite Images"
              options={{
                type: "loop",
                perPage: 2,
                pagination: false,
                arrows: false,
                gap: "50px",
                autoScroll: {
                  speed: 0.3,
                },
                autoplay: true,
              }}
              tag="div"
              extensions={{ AutoScroll }}
            >
              {elitePartners.map((partner) => (
                <SplideSlide key={partner.fields.partnerName}>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={`https:${partner.fields.logo.fields.file.url}`}
                      alt={partner.fields.partnerName}
                      className="width-[25%] aspect-[3/2] object-contain"
                    />
                    <Link
                      href={"#"}
                      className="mt-2 w-fit rounded-lg bg-neon-orange-500 p-2 text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </GridTile>
          <GridTile colSpan={"col-span-6 pb-5"} tileTitle={"Gold Partners"}>
            <Splide
              aria-label="My Favorite Images"
              options={{
                type: "loop",
                perPage: 2,
                pagination: false,
                arrows: false,
                gap: "50px",
                autoScroll: {
                  speed: 0.3,
                },
                autoplay: true,
              }}
              tag="div"
              extensions={{ AutoScroll }}
            >
              {elitePartners.map((partner) => (
                <SplideSlide key={partner.fields.partnerName}>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={`https:${partner.fields.logo.fields.file.url}`}
                      alt={partner.fields.partnerName}
                      className="width-[25%] aspect-[3/2] object-contain"
                    />
                    <Link
                      href={"#"}
                      className="mt-2 w-fit rounded-lg bg-neon-orange-500 p-2 text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </GridTile>
          <GridTile colSpan={"col-span-6 pb-5"} tileTitle={"Silver Partners"}>
            <Splide
              aria-label="My Favorite Images"
              options={{
                type: "loop",
                perPage: 2,
                pagination: false,
                arrows: false,
                gap: "50px",
                autoScroll: {
                  speed: 0.3,
                },
                autoplay: true,
              }}
              tag="div"
              extensions={{ AutoScroll }}
            >
              {elitePartners.map((partner) => (
                <SplideSlide key={partner.fields.partnerName}>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={`https:${partner.fields.logo.fields.file.url}`}
                      alt={partner.fields.partnerName}
                      className="width-[25%] aspect-[3/2] object-contain"
                    />
                    <Link
                      href={"#"}
                      className="mt-2 w-fit rounded-lg bg-neon-orange-500 p-2 text-white"
                    >
                      Learn More
                    </Link>
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
