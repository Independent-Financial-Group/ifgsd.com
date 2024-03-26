import React from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/PageHeader/PageHeader";
import Button from "../../components/Button/Button";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import highlightBlue from "../../public/_global-graphics/highlight-blue.png";
import highlightOrange from "../../public/_global-graphics/image-highlight-orange.png";
import imageHighlightBlue from "../../public/_global-graphics/image-highlight-blue.png";
import gradientShadow from "../../public/_global-graphics/gradient-shadow.png";
import sectionImage1 from "../../public/_why-your-advisor-uses-ifg/images/person-on-a-boat-looking-at-horizon-compressed.webp";
import sectionImage2 from "../../public/_why-your-advisor-uses-ifg/images/family-walking-on-beach-compressed.webp";
import orangeWave from "../../public/_global-graphics/wave-orange.png";
import orangeWaveBold from "../../public/_global-graphics/wave-orange-bold.png";

import { AcademicCapIcon } from "@heroicons/react/24/solid";

const index = () => {
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
          </div>
        </PageHeader>
        <Container>
          <Breadcrumb />
        </Container>
        {/* <section className="my-10 lg:my-32">
          <Container>
            <div className="justify-items-center lg:grid lg:grid-cols-1">
              <div className="max-w-prose">
                <h2 className="mb-10 flex items-center gap-2 text-3xl font-bold text-neon-orange-500">
                  <Image
                    src={highlightBlue}
                    alt="decorative heading highlight graphic"
                    className="inline-block"
                  />
                  <span className="flex-grow-0 text-center">
                    Committed to Your Long-Term Financial Success
                  </span>
                  <Image
                    src={highlightBlue}
                    alt="decorative heading highlight graphic"
                    className="inline-block scale-x-[-1]"
                  />
                </h2>
                <div class="relative mb-5">
                  <div class="absolute -inset-2 rounded-lg bg-gradient-to-r from-neon-orange-600 via-neon-orange-600 to-hazard-blue-600 opacity-75 blur"></div>
                  <Image
                    src={sectionImage1}
                    className="relative flex items-center justify-center rounded-lg bg-gray-900 text-gray-300"
                  />
                </div>

                <p className="text-center text-lg leading-7">
                  The world of investing offers incredible opportunities along
                  with an array of complex options. What if you had a
                  knowledgeable and experienced partner standing by your side to
                  guide you through the maze of your financial investments?
                </p>
              </div>
            </div>
          </Container>
        </section> */}
        <section className="my-10 lg:my-32">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <h2 className="mb-10 flex flex-col gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image
                    src={highlightOrange}
                    alt="decorative heading highlight graphic"
                    className="inline-block"
                  />
                  <span className="flex-grow-0">Clients Come First</span>
                </h2>
                <ul className="leading-7">
                  <li className="flex items-start gap-x-3">
                    <div className="rounded-xl bg-neon-orange-500 p-2">
                      <AcademicCapIcon className="h-12 w-12 text-seabreeze-500" />
                    </div>
                    <span>
                      <strong className="font-semibold text-neon-orange-600">
                        Communication and Service.
                      </strong>{" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </li>
                  <li className="flex items-start gap-x-3">
                    <div className="rounded-xl bg-neon-orange-500 p-2">
                      <AcademicCapIcon className="h-12 w-12 text-seabreeze-500" />
                    </div>
                    <span>
                      <strong className="font-semibold text-neon-orange-600">
                        Access to Leading Investment Companies
                      </strong>{" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </li>
                  <li className="flex items-start gap-x-3">
                    <div className="rounded-xl bg-neon-orange-500 p-2">
                      <AcademicCapIcon className="h-12 w-12 text-seabreeze-500" />
                    </div>
                    <span>
                      <strong className="font-semibold text-neon-orange-600">
                        Product Availability
                      </strong>{" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </li>
                  <li className="flex items-start gap-x-3">
                    <div className="rounded-xl bg-neon-orange-500 p-2">
                      <AcademicCapIcon className="h-12 w-12 text-seabreeze-500" />
                    </div>
                    <span>
                      <strong className="font-semibold text-neon-orange-600">
                        Risk Management
                      </strong>{" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </li>
                </ul>
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
                <p className="mx-auto my-5 max-w-prose text-center text-lg font-semibold leading-7 text-gray-900">
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
                  <div className="text-shadow relative">
                    <Image
                      src={orangeWaveBold}
                      className="absolute top-7 -z-10 w-1/2"
                    />
                    Relationship
                  </div>
                </span>
              </h2>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, aspernatur! Error iure voluptatem nesciunt modi
                  aspernatur natus blanditiis, fugit et.
                </p>
                <ul className="mt-5 grid grid-cols-3 justify-center divide-x-2 rounded-lg bg-seabreeze-500 px-2 py-3 shadow-sm">
                  <li className="pl-2 pr-4">
                    <dt className="text-base font-semibold text-gray-900">
                      Offices
                    </dt>
                    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                      <div className="flex items-baseline text-2xl font-semibold text-neon-orange-600">
                        500+
                      </div>
                    </dd>
                  </li>
                  <li className="px-4">
                    <dt className="text-base font-semibold text-gray-900">
                      Offices
                    </dt>
                    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                      <div className="flex items-baseline text-2xl font-semibold text-neon-orange-600">
                        500+
                      </div>
                    </dd>
                  </li>
                  <li className="px-4">
                    <dt className="text-base font-semibold text-gray-900">
                      Offices
                    </dt>
                    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                      <div className="flex items-baseline text-2xl font-semibold text-neon-orange-600">
                        500+
                      </div>
                    </dd>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default index;
