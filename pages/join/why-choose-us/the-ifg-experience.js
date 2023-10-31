import React from "react";

// IMPORT NEXT COMPONENTS
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// IMPORT COMPONENTS
import PublicLayout from "../../../components/PublicLayout/PublicLayout";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Container from "../../../components/Container/Container";

// IMPORT ASSETS
import assistance from "../../../public/_the-ifg-experience/images/assistance.webp";
import clientsFirst from "../../../public/_the-ifg-experience/images/clients-first.png";
import guidance from "../../../public/_the-ifg-experience/images/guidance.webp";
import hero from "../../../public/_the-ifg-experience/images/hero.webp";
import partners from "../../../public/_the-ifg-experience/images/partners.webp";
import support from "../../../public/_the-ifg-experience/images/support.webp";
import checkmarkBlue from "../../../public/_global-graphics/checkmark-blue.png";
import checkmarkOrange from "../../../public/_global-graphics/checkmark-orange.png";
import checkmarkWhite from "../../../public/_global-graphics/checkmark-white.png";
import highlight from "../../../public/_global-graphics/highlight.png";
import highlightWhite from "../../../public/_global-graphics/highlight-white.png";
import highlights from "../../../public/_the-ifg-experience/graphics/highlights.png";
import bars from "../../../public/_the-ifg-experience/graphics/bars.png";
import org from "../../../public/_the-ifg-experience/graphics/org.png";
import staff from "../../../public/_the-ifg-experience/graphics/staff.png";

const TheIfgExperience = () => {
  return (
    <>
      <Head>
        <title>The IFG Experience</title>
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={`bg-[url('/_the-ifg-experience/images/hero.webp')]`}
        >
          <div className="flex items-start gap-6">
            <h1 className="text-3xl font-bold text-seabreeze-500 md:text-5xl">
              <Image src={highlight} alt="highlight" className="inline" />{" "}
              The IFG Experience
            </h1>
          </div>
        </PageHeader>
        <section>
          <Container>
            <Breadcrumb />
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="lg:col-span-1">
                <Image
                  src={partners}
                  alt="group of surfers holding hands supporting each other"
                  className="rounded-[20px]"
                />
              </div>
              <div className="self-center lg:col-span-1">
                <h2 className="flex items-start gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} /> Your Transition Partner
                </h2>
                <p className="my-8 text-xl">
                  We understand making the transition to a new firm can be a
                  challenge. We’re proud to offer the most transition support in
                  the industry. At IFG, transitioning is a smooth and efficient
                  process, with the help of a dedicated transition team and
                  personalized support.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default TheIfgExperience;
