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
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
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
                      Our team supports your advisor 24/7 so your advisor can
                      serve you and ensure that you understand every investment
                      decision made on your behalf.
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
                      IFG Registered Representatives have the tools and research
                      necessary to provide the highest-quality investment
                      solutions.
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
                      range non-proprietary products to meet your financial
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
              <div>
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
                    Get connected with an advisor today
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
            <div className="lg:grid lg:grid-cols-2">
              <h2 className="text-4xl font-bold text-hazard-blue-500">
                The Investor{" "}
                <span className="block">
                  <div className="text-shadow relative">Relationship</div>
                </span>
              </h2>
              <div>
                <p className="text-xl leading-7">
                  Our advisors provide their clients with investment advice,
                  free from sales pressure that isn&apos;t in the best interest
                  of the client. This translates into long-lasting relationships
                  built on unique levels of trust.
                </p>
                <ul className="mt-5 grid grid-cols-3 justify-center divide-x-2 rounded-lg bg-seabreeze-500 px-2 py-3 shadow-sm">
                  <li className="pl-2 pr-4">
                    <dt className="text-base font-semibold">
                      Accounts Nationwide
                    </dt>
                    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                      <div className="flex items-baseline text-2xl font-semibold text-neon-orange-600">
                        200k+
                      </div>
                    </dd>
                  </li>
                  <li className="px-4">
                    <dt className="text-base font-semibold">
                      Assets Under Advisement
                    </dt>
                    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                      <div className="flex items-baseline text-2xl font-semibold text-neon-orange-600">
                        $33B
                      </div>
                    </dd>
                  </li>
                  <li className="px-4">
                    <dt className="text-base font-semibold">
                      Offices Across the U.S.
                    </dt>
                    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                      <div className="flex items-baseline text-2xl font-semibold text-neon-orange-600">
                        375+
                      </div>
                    </dd>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
          <div className="mt-32 bg-hazard-blue-100 py-10">
            <Container>
              <ul className="lg:grid lg:grid-cols-4 lg:items-stretch lg:gap-5 [&>*]:flex [&>*]:flex-col [&>li>div]:flex-grow [&>li_ul>li]:text-xs [&>li_ul]:mt-5 [&>li_ul]:flex [&>li_ul]:flex-col [&>li_ul]:gap-2 [&_li>ul]:flex [&_li>ul]:flex-col [&_li>ul]:gap-2">
                <li>
                  <Image src={arrowOne} />
                  <div className="mt-5 rounded bg-white px-3 py-2">
                    <dt className="mt-2 text-2xl font-bold text-neon-orange-500">
                      The Client
                    </dt>
                    <ul className="list-inside list-disc">
                      <li>More than 200,000 accounts nationwide.</li>
                      <li>
                        Combined, our registered representatives have over $30
                        billion in assets under advisement.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Image src={arrowTwo} />
                  <div className="mt-5 rounded bg-white px-3 py-2">
                    <dt className="mt-2 text-2xl font-bold text-neon-orange-500">
                      The Advisor
                    </dt>
                    <ul className="list-inside list-disc">
                      <li>
                        Offers professional advice and investments, including
                        mutual funds, annuities, life insurance, fee-based asset
                        management, direct participation programs, stocks, and
                        bonds.
                      </li>
                      <li>
                        More than 625 affiliated representatives in 500+ offices
                        across the country.
                      </li>
                      <li>
                        No proprietary products or service influence, and access
                        to the nations leading investment companies.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Image src={arrowThree} />
                  <div className="mt-5 rounded bg-white px-3 py-2">
                    <Image
                      src={logoFull}
                      className="mx-auto h-20 w-3/4 object-contain"
                    />
                    <dt className="mt-2 text-2xl font-bold text-neon-orange-500">
                      The Broker-Dealer
                    </dt>
                    <ul className="list-inside list-disc">
                      <li>
                        Full-servicem, national independent broker-dealer firm
                      </li>
                      <li>
                        Provides service and support to the IFG Registered Reps
                      </li>
                      <li>
                        Member of Financial Industry Regulatory Authority
                        (FINRA) and Securities Investor Protection Corporation
                        (SIPC)
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Image src={arrowFour} />
                  <div className="mt-5 rounded bg-white px-3 py-2">
                    <img src="https://www.lifehealth.com/site/wp-content/uploads/2020/01/BNY-Mellon.jpg" />
                    <dt className="mt-2 text-2xl font-bold text-neon-orange-500">
                      The Clearing Firm
                    </dt>
                    <ul>
                      <li>
                        Pershing Provides Independent Financial Group with
                        securities clearing services. For almost 80 years, many
                        of the most complex financial institutions in the world
                        have chosen to work with BNY Mellon's Pershing. With a
                        network of 1,400 clients worldwide, Pershing provides
                        business-to-business solutions to clients representing
                        more than $1.8 trillion in global client assets.
                        Pershing is a part of BNY Mellon, a global investments
                        company with #33.1 trillion in assets under custody
                        and/or administration. They have been trusted, tested
                        and proven to protet their clients' interests while
                        providing the most innovative solutions possible.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </Container>
          </div>
        </section>
      </PublicLayout>
    </>
  );
};

export default index;