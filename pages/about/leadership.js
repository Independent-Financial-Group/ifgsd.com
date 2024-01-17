import React, { useState } from "react";

// NEXT IMPORTS
import Image from "next/image";

// IMPORT COMPONENTS
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import LeadershipBioModal from "../../components/LeadershipBioModal/LeadershipBioModal";
import Head from "next/head";
import Container from "../../components/Container/Container";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/PageHeader/PageHeader";

// IMPORT ASSETS
import dave from "../../public/_leadership/images/dfischer-headshot.jpg";
import scott from "../../public/_leadership/images/sheising-headshot.jpg";
import orangeCircle from "../../public/_leadership/graphics/circle-orange.png";
import GradientLeft from "../../public/_leadership/graphics/blur-gradient-left.png";
import gradientRight from "../../public/_leadership/graphics/blur-gradient-right.png";
import oranmentBlue from "../../public/_leadership/graphics/ornament-blue.png";

// CONTENTFUL IMPORTS
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const initialData = await client.getEntries({
    content_type: "leadership",
    "metadata.tags.sys.id[in]": "seniorLeadership",
    order: "sys.createdAt",
  });

  const formattedData = initialData.items.map((item) => {
    return {
      ...item.fields,
      id: item.sys.id,
    };
  });

  return { props: { formattedData, initialData }, revalidate: 10 };
}

const leadership = ({ formattedData: data, initialData }) => {
  const [openModal, setOpenModal] = useState();
  const [currentBio, setCurrentBio] = useState();
  const [selectedBio, setSelectedBio] = useState();

  const handleClick = (e) => {
    setOpenModal("default");
    setSelectedBio(e.target.dataset.id);
  };

  return (
    <>
      <Head>
        <title>Leadership Team | Independent Financial Group San Diego</title>
        <meta
          name="description"
          content="Independent Financial Group's leadership team leverages years of financial expertise to craft a top-tier broker-dealer."
        />
        <meta name="robots" content="follow, index" />
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={"bg-[url('/_leadership/images/hero.webp')]"}
          centerElement
        >
          <div>
            <h1 className="mb-8 text-center text-5xl font-bold text-seabreeze-500">
              Our Leadership Team
            </h1>
            <p className="text-center text-xl text-seabreeze-500 lg:mx-auto lg:w-3/4">
              Independent Financial Group&apos;s leadership team leverages years
              of financial expertise to craft a top-tier broker-dealer.
            </p>
          </div>
        </PageHeader>
        <section className="mb-32">
          <Container>
            <Image
              src={orangeCircle}
              alt="decorative circle graphic"
              className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 md:top-1/3"
            />
            <Breadcrumb />
            <h2 className="mb-5 text-center text-4xl font-bold text-neon-orange-500">
              Founders
            </h2>
            <div className="relative grid grid-cols-2 justify-center gap-5">
              <Image
                src={oranmentBlue}
                className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
                alt="decorative ornament graphic"
              />
              <div>
                <Image
                  className="mx-auto mb-5 rounded-[20px]"
                  src={scott}
                  alt="Portrait of IFG founder Scott Heising"
                />
                <h3 className="text-xl font-bold">Scott Heising</h3>
                <p className="text-bold">President, CEO, & Founder</p>
                <button
                  onClick={handleClick}
                  data-id="1SqrtnbS3q0nD35NMb8Lk0"
                  className="font-bold text-neon-orange-500"
                >
                  Read Bio &rarr;
                </button>
              </div>
              <div>
                <Image
                  className="mx-auto mb-5 rounded-[20px]"
                  src={dave}
                  alt="portrait of IFG co-founder Dave Fischer"
                />
                <h3 className="text-xl font-bold">David Fischer</h3>
                <p className="text-bold">Co-Founder & CMO</p>
                <button
                  data-id="60UCpXYh3gLMMrUu7WaqZg"
                  onClick={handleClick}
                  className="font-bold text-neon-orange-500"
                >
                  Read Bio &rarr;
                </button>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <h2 className="mb-10 text-center text-4xl font-bold text-hazard-blue-500">
              Senior Leadership
            </h2>
            <div className="grid grid-cols-4 gap-x-5 gap-y-10 md:grid-cols-6 lg:gap-x-0">
              <Image
                src={gradientRight}
                alt="decorative graphic"
                className="absolute -right-1/4 -z-10 lg:right-0"
              />
              <Image
                src={GradientLeft}
                alt="decorative graphic"
                className="absolute -left-1/4 top-full -z-10 lg:left-0"
              />
              {data.map((person, i) => {
                return (
                  <div
                    className={
                      i >= 6
                        ? `${
                            i >= 6
                              ? "col-span-2 md:col-span-3 md:justify-self-center"
                              : ""
                          }`
                        : "col-span-2"
                    }
                    key={person.id}
                  >
                    <img
                      className="mx-auto mb-5 w-[254px] rounded-bl-full rounded-br-full rounded-tl-full"
                      src={`https:${person.headshot.fields.file.url}`}
                    />
                    <h3 className="text-xl font-bold">{person.name}</h3>
                    <p className="text-bold">{person.title}</p>
                    <button
                      className="font-bold text-neon-orange-500"
                      onClick={handleClick}
                      data-id={person.id}
                    >
                      Read Bio &rarr;
                    </button>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
        <LeadershipBioModal
          openModal={openModal}
          entryId={selectedBio}
          setOpenModal={setOpenModal}
          bioId={selectedBio}
        />
      </PublicLayout>
    </>
  );
};

export default leadership;
