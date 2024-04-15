import React from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/PageHeader/PageHeader";
import Button from "../../components/Button/Button";
import { motion, AnimatePresence } from "framer-motion";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import highlightOrange from "../../public/_global-graphics/image-highlight-orange.png";
import imageHighlightBlue from "../../public/_global-graphics/image-highlight-blue.png";
import sectionImage2 from "../../public/_why-your-advisor-uses-ifg/images/family-walking-on-beach-compressed.webp";
import orangeWave from "../../public/_global-graphics/wave-orange.png";
import orangeWaveBold from "../../public/_global-graphics/wave-orange-bold.png";
import arrowOne from "../../public/_why-your-advisor-uses-ifg/graphics/investor-relation-arrow-1.png";
import arrowTwo from "../../public/_why-your-advisor-uses-ifg/graphics/investor-relation-arrow-2.png";
import arrowThree from "../../public/_why-your-advisor-uses-ifg/graphics/investor-relation-arrow-3.png";
import arrowFour from "../../public/_why-your-advisor-uses-ifg/graphics/investor-relation-arrow-4.png";
import serviceIcon from "../../public/_why-your-advisor-uses-ifg/graphics/customer-service-icon-white.svg";
import unlocked from "../../public/_why-your-advisor-uses-ifg/graphics/unlock.svg";
import products from "../../public/_why-your-advisor-uses-ifg/graphics/products.svg";
import risk from "../../public/_why-your-advisor-uses-ifg/graphics/risk.svg";
import logoFull from "../../public/logo-full-color.png";
import relationshipInfographic from "../../public/_why-your-advisor-uses-ifg/graphics/relationship-infographic.png";
import pershingLogo from "../../public/_why-your-advisor-uses-ifg/images/pershing-logo.png";
import blurGradientBlue from "../../public/_leadership/graphics/blur-gradient-left.png";
import blurGradientOrange from "../../public/_leadership/graphics/blur-gradient-right.png";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import laJollaCoveDrone from "../../public/_why-your-advisor-uses-ifg/images/la-jolla-cove-drone-compressed.jpg";

const index = () => {
  const demoVariants = {
    hidden: {
      opacity: 0,
      y: "5rem",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Why Your Advisor Uses IFG | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={"bg-[url('/_why-your-advisor-uses-ifg/images/hero.webp')]"}
        >
          <div>
            <h1 className="mb-8 flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
              <Image
                src={highlight}
                alt="decorative heading highlight graphic"
              />
              Why Your Advisor Uses IFG
            </h1>
            <p className="max-w-prose text-lg leading-7 text-seabreeze-500">
              As an independent broker-dealer, we provide our advisors the
              services, technology, operational infrastructure, and freedom of
              products to make sound investment recommendations and build solid
              financial plans that are truly in their client's best interest.
            </p>
          </div>
        </PageHeader>
        <Container>
          <Breadcrumb />
        </Container>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="grid gap-5 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <h2 className="mb-10 flex flex-col gap-2 text-4xl font-bold text-hazard-blue-500">
                  <Image
                    src={highlightOrange}
                    alt="decorative heading highlight graphic"
                    className="inline-block"
                  />
                  <span className="flex-grow-0">Clients Come First</span>
                </h2>
                <motion.ul
                  variants={demoVariants}
                  whileInView="animate"
                  viewport={{ once: true, margin: "-100px" }}
                  initial="hidden"
                  className="flex flex-col gap-10 leading-7"
                >
                  <motion.li
                    variants={demoVariants}
                    className="flex items-start gap-x-3"
                  >
                    <div className="rounded-xl bg-neon-orange-500 p-2">
                      <Image
                        src={serviceIcon}
                        className="aspect-square w-24 object-contain"
                      />
                    </div>
                    <span className="flex-grow">
                      <strong className="font-semibold text-neon-orange-600">
                        Communication and Service.
                      </strong>{" "}
                      Our team supports your advisor so they can serve you and
                      ensure that you understand every investment decision made
                      on your behalf.
                    </span>
                  </motion.li>
                  <motion.li
                    variants={demoVariants}
                    className="flex items-start gap-x-3"
                  >
                    <div className="rounded-xl bg-neon-orange-500 p-2">
                      <Image
                        src={unlocked}
                        className="aspect-square w-24 object-contain"
                      />
                    </div>
                    <span className="flex-grow">
                      <strong className="font-semibold text-neon-orange-600">
                        Access to Leading Investment Companies.
                      </strong>{" "}
                      IFG advisors have the tools and research necessary to
                      provide the highest-quality investment solutions.
                    </span>
                  </motion.li>
                  <motion.li
                    variants={demoVariants}
                    className="flex items-start gap-x-3"
                  >
                    <div>
                      <Image
                        src={products}
                        className="aspect-square w-36 rounded bg-neon-orange-500 p-2"
                      />
                    </div>
                    <span className="flex-grow">
                      <strong className="font-semibold text-neon-orange-600">
                        Product Availability.
                      </strong>{" "}
                      Our relationships with some of the world's premier
                      financial companies give your advisor access to a wide
                      range of non-proprietary products to meet your financial
                      needs.
                    </span>
                  </motion.li>
                  <motion.li
                    variants={demoVariants}
                    className="flex items-start gap-x-3"
                  >
                    <div>
                      <Image
                        src={risk}
                        className="aspect-square w-28 rounded bg-neon-orange-500 object-contain p-2"
                      />
                    </div>
                    <span className="flex-grow">
                      <strong className="font-semibold text-neon-orange-600">
                        Risk Management.
                      </strong>{" "}
                      Our risk management, due diligence, and supervisory
                      services are designed to support your long-term financial
                      success.
                    </span>
                  </motion.li>
                </motion.ul>
              </div>
              <div className="order-1 lg:order-2">
                <Image
                  src={sectionImage2}
                  className="rounded-2xl border-4 border-seabreeze-500"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="min-h-screen bg-[url('/_why-your-advisor-uses-ifg/images/person-on-a-boat-looking-at-horizon-compressed.webp')] bg-cover bg-fixed bg-no-repeat">
          <div className="relative min-h-screen bg-white/25 bg-scroll backdrop-blur-sm">
            <Container>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center">
                <h2 className="my-5 max-w-prose text-6xl font-bold text-neon-orange-500">
                  Committed to Your Long-Term Financial Success
                </h2>
                <Image
                  src={imageHighlightBlue}
                  alt="decorative heading highlight graphic"
                  className="my-5 inline-block"
                />
                <p className="mx-auto my-5 max-w-prose text-center text-lg font-semibold leading-7">
                  The world of investing offers incredible opportunities along
                  with an array of complex options. What if you had a
                  knowledgeable and experienced partner standing by your side to
                  guide you through the maze of your financial investments?{" "}
                  <span className="text-hazard-blue-500">
                    Get connected with an IFG advisor today
                  </span>
                  .
                </p>
                <Button href={"/join/contact"} type="primary">
                  Contact
                </Button>
              </div>
            </Container>
          </div>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <h2 className="w-fit rounded-md bg-neon-orange-500 p-4 text-4xl font-bold text-seabreeze-500">
                  The Investor{" "}
                  <span className="block">
                    <div className="text-shadow relative">Relationship</div>
                  </span>
                </h2>
              </div>
              <div>
                <p className="text-xl leading-7">
                  Our advisors provide their clients with investment advice,
                  free from sales pressure that isn&apos;t in the best interest
                  of the client. This translates into long-lasting relationships
                  built on unique levels of trust.
                </p>
                <ul className="mt-5 grid items-center gap-5 divide-y-2 rounded-lg bg-seabreeze-500 px-2 py-3 shadow-sm lg:grid-cols-3 lg:justify-center lg:divide-x-2 lg:divide-y-0 [&_li]:pt-2">
                  <li className="pl-2 pr-4">
                    <dt className="text-base font-semibold">
                      Accounts Nationwide
                    </dt>
                    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                      <div className="flex items-baseline text-2xl font-semibold text-neon-orange-500">
                        240k+
                      </div>
                    </dd>
                  </li>
                  <li className="px-4">
                    <dt className="text-base font-semibold">
                      Assets Under Advisement
                    </dt>
                    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                      <div className="flex items-baseline text-2xl font-semibold text-neon-orange-500">
                        $33B
                      </div>
                    </dd>
                  </li>
                  <li className="px-4">
                    <dt className="text-base font-semibold">
                      Offices Across the U.S.
                    </dt>
                    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                      <div className="flex items-baseline text-2xl font-semibold text-neon-orange-500">
                        375+
                      </div>
                    </dd>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
          <div className="relative bg-[url('/_why-your-advisor-uses-ifg/images/la-jolla-cove-drone-compressed.jpg')] bg-cover lg:mt-20 lg:block  lg:h-[900px]">
            <div className="h-[100%] bg-white/20">
              <Container classes={"relative lg:flex lg:items-center"}>
                <Image
                  src={relationshipInfographic}
                  unoptimized
                  className="mx-auto hidden w-1/2 lg:block"
                />
                <ul className="grid gap-5 [&>li]:rounded-md [&>li]:bg-white [&>li]:px-3 [&>li]:py-4 [&>li]:shadow-md [&>li]:ring [&>li]:ring-inset [&>li]:ring-hazard-blue-500  lg:[&>li]:w-[26ch] [&_li>h3]:text-lg [&_li>h3]:font-semibold [&_li>h3]:text-neon-orange-500 [&_li>p]:text-xs [&_li>p]:leading-6 lg:[&_li>p]:w-[32ch]">
                  <li className="lg:absolute lg:bottom-[25%] lg:left-[5%]">
                    <h3>
                      <span className="lg:hidden">1 -</span>The Client
                    </h3>
                    <p>
                      More than 200,000 accounts nationwide are managed by our
                      advisors, collectively overseeing over $30 billion in
                      assets under advisement.
                    </p>
                  </li>
                  <ArrowDownIcon className="mx-auto h-10 w-10 font-bold text-neon-orange-500 lg:hidden" />
                  <li className="lg:absolute lg:bottom-[10%] lg:right-[8%]">
                    <h3>
                      <span className="lg:hidden">2 - </span>The Advisor
                    </h3>
                    <p>
                      More than 625 affiliated in 500+ offices across the
                      country offer professional advice and investments,
                      encompassing mutual funds, annuities, life insurance,
                      fee-based asset management, direct participation programs,
                      stocks, and bonds, without any proprietary products or
                      service influence, granting access to the nation's leading
                      investment companies.
                    </p>
                  </li>
                  <ArrowDownIcon className="mx-auto h-10 w-10 font-bold text-neon-orange-500 lg:hidden" />
                  <li className="lg:absolute lg:left-10 lg:top-[15%]">
                    <Image src={logoFull} className="w-1/4 lg:w-1/2" />
                    <h3>
                      <span className="lg:hidden">3 - </span>The Broker-Dealer
                    </h3>
                    <p>
                      As a full-service, national independent broker-dealer
                      firm, we provide service and support to the IFG advisor,
                      and we are a member of the Financial Industry Regulatory
                      Authority{" "}
                      <a
                        className="font-bold text-neon-orange-500"
                        href="https://finra.org"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        (FINRA)
                      </a>{" "}
                      and the Securities Investor Protection Corporation{" "}
                      <a
                        className="font-bold text-neon-orange-500"
                        href="https://sipc.org"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        (SIPC)
                      </a>
                      .
                    </p>
                  </li>
                  <ArrowDownIcon className="mx-auto h-10 w-10 font-bold text-neon-orange-500 lg:hidden" />
                  <li className="lg:absolute lg:right-10 lg:top-[5%]">
                    <Image src={pershingLogo} className="w-1/2 lg:w-auto" />
                    <h3>
                      <span className="lg:hidden">4 - </span>The Clearing Firm
                    </h3>
                    <p>
                      For nearly 80 years, Pershing, a division of BNY Mellon,
                      has offered securities clearing services to top financial
                      institutions worldwide, serving a network of 1,400 clients
                      representing over $1.8 trillion in global assets, known
                      for safeguarding clients' interests and delivering
                      innovative solutions.
                    </p>
                  </li>
                </ul>
              </Container>
            </div>
          </div>
        </section>
      </PublicLayout>
    </>
  );
};

export default index;
