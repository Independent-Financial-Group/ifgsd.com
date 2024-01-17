import React from "react";

// NEXT IMPORTS
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// COMPONENTS
import PublicLayout from "../../../components/PublicLayout/PublicLayout";
import Container from "../../../components/Container/Container";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

// ASSETS
import highlight from "../../../public/_global-graphics/highlight.png";
import highlightBlue from "../../../public/_global-graphics/highlight-blue.png";
import culturePyramid from "../../../public/_mission-and-values/graphics/culture-pyramid.png";
import handshake from "../../../public/_home/graphics/handshake.png";
import balance from "../../../public/_home/graphics/balance.png";
import person from "../../../public/_home/graphics/person.png";
import charityCulture from "../../../public/_mission-and-values/images/charity-culture.png";
import quoteLeft from "../../../public/_mission-and-values/graphics/quote-left.png";
import quoteRight from "../../../public/_mission-and-values/graphics/quote-right.png";
import gradientShadow from "../../../public/_global-graphics/gradient-shadow.png";
import employeeHeadshot from "../../../public/_mission-and-values/images/employee-headshot.webp";
import gradientWave from "../../../public/_mission-and-values/graphics/gradient-wave.png";

const ourMission = () => {
  return (
    <>
      <Head>
        <title>
          Our Mission & Values | Independent Financial Group San Diego
        </title>
        <meta
          name="description"
          content="IFG's Mission & Values. Integrity, Balance, and Independence."
        />
        <meta name="robots" content="follow, index" />
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={`bg-[url('/_mission-and-values/images/hero.webp')]`}
        >
          <div className="flex gap-6">
            <h1 className="text-3xl font-bold text-seabreeze-500 md:text-5xl">
              <Image src={highlight} alt="highlight" className="inline" />{" "}
              Mission & Values
            </h1>
          </div>
        </PageHeader>
        <section className="my-8 lg:my-32">
          <Container>
            <Breadcrumb />
            <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
              <div className="self-center">
                <h2 className="mb-5 flex items-start gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="highlight" /> Our Culture
                </h2>
                <p className="text-xl">
                  Independent Financial Group is dedicated to quality of service
                  above all else. Unsatisfied with the culture of Large
                  Broker-Dealers, IFG was founded in 2003 to put the advisor
                  first and create a truly independent business model. We are
                  nimble and able to personalize our services to support our
                  advisors&apos; needs.
                </p>
              </div>
              <div>
                <Image
                  src={culturePyramid}
                  alt="illustration of the IFG's culture"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="my-8 rounded-[20px] bg-gradient-to-r from-hazard-blue-500 to-blue-wave-300 py-24 text-white lg:my-32">
          <Container>
            <h2 className="mb-20 text-center text-3xl font-bold">
              Our Core Values
            </h2>
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5 lg:grid-cols-3 lg:grid-rows-1">
              <div className="text-center md:col-span-2 md:lg:col-span-1">
                <Image
                  className="mx-auto"
                  src={handshake}
                  alt="icon of handshake"
                />
                <h3 className="my-5 text-2xl font-bold">Integrity</h3>
                <p className="text-xl md:max-w-prose">
                  We will always run our business ethically and maintain a solid
                  relationship with our regulating authorities
                </p>
              </div>
              <div className="text-center md:col-span-1 lg:border-x-2 lg:border-seabreeze-500 lg:px-5">
                <Image
                  className="mx-auto"
                  src={balance}
                  alt="icon of handshake"
                />
                <h3 className="my-5 text-2xl font-bold">Balance</h3>
                <p className="text-xl">
                  We take pride in celebrating our quality of life. Be it your
                  practice or your family. We contribute to helping you reach
                  your full potential.
                </p>
              </div>
              <div className="text-center md:col-span-1 lg:px-5">
                <Image
                  className="mx-auto"
                  src={person}
                  alt="icon of handshake"
                />
                <h3 className="my-5 text-2xl font-bold">Independence</h3>
                <p className="text-xl">
                  It&apos;s your business guaranteed. We give you the
                  flexibility to run it the way you believe is best.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-8 lg:my-32">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="self-center">
                <h2 className="mb-5 flex items-start gap-2 text-3xl font-bold text-neon-orange-500">
                  <Image src={highlightBlue} alt="highlight" /> The IFG
                  Charitable Mission
                </h2>
                <div className="relative my-10">
                  <Image
                    className="absolute -left-12 -top-12 -z-10"
                    src={quoteLeft}
                    alt="quote icon"
                  />
                  <Image
                    className="absolute -bottom-12 right-0 -z-10"
                    src={quoteRight}
                    alt="quote icon"
                  />
                  <p className="text-xl">
                    When David Fischer and I founded IFG, we agreed that giving
                    back to our community would be a central part of our
                    mission. We are family men and supportive of the community
                    we live in. We want to make sure that children and young
                    adults in San Diego are receiving the support and
                    opportunities they need to thrive.
                  </p>
                </div>
                <p className="text-right text-3xl font-bold text-neon-orange-500">
                  - Scott Heising
                </p>
              </div>
              <div className="relative rounded-lg">
                <Image
                  className="mx-auto rounded-lg object-cover"
                  src={charityCulture}
                  alt="David Fischer and Scott Heising with members from Promises2Kids holding a contribution check."
                />
                <Image
                  src={gradientShadow}
                  alt="drop shadow"
                  className="absolute top-0 -z-10 hidden lg:block"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="relative my-8 lg:my-32">
          <Image
            src={gradientWave}
            alt="decoration"
            className="absolute -bottom-9 -z-10 w-full"
          />
          <Container>
            <div className="flex flex-col-reverse gap-5 lg:grid lg:grid-cols-2">
              <div className="relative justify-self-center">
                <div className="mx-auto w-full rounded-[20px] md:mx-0 md:h-[410px] md:w-[410px]">
                  <Image
                    className="rounded-[20px]"
                    src={employeeHeadshot}
                    alt="A happy IFG employee"
                  />
                </div>
              </div>
              <div className="self-center">
                <h2 className="flex items-start gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="highlight" /> Experience
                  Independence
                </h2>
                <div className="relative my-5">
                  <p className="text-xl">
                    If you are a financial services professional who is
                    considering the freedom and independence of owning your own
                    financial practice or if you are an established group of
                    independent financial professionals, you should consider
                    joining us.
                  </p>
                </div>
                <Link href="/join/contact" passHref>
                  <button className="rounded-lg bg-neon-orange-500 px-4 py-4 font-bold text-seabreeze-500">
                    Talk to a Team Member
                  </button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default ourMission;
