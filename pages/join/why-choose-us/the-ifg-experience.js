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
import Button from "../../../components/Button/Button";

// IMPORT ASSETS
import julia from "../../../public/_the-ifg-experience/images/jkohan-headshot.webp";
import george from "../../../public/_the-ifg-experience/images/glazo-headshot.webp";
import jessica from "../../../public/_the-ifg-experience/images/jbrungard-headshot.webp";
import clientsFirst from "../../../public/_the-ifg-experience/images/clients-first.png";
import partners from "../../../public/_the-ifg-experience/images/partners.webp";
import checkmarkBlue from "../../../public/_global-graphics/checkmark-blue.png";
import checkmarkOrange from "../../../public/_global-graphics/checkmark-orange.png";
import checkmarkWhite from "../../../public/_global-graphics/checkmark-white.png";
import highlight from "../../../public/_global-graphics/highlight.png";
import highlightWhite from "../../../public/_global-graphics/highlight-white.png";
import highlights from "../../../public/_the-ifg-experience/graphics/highlights.png";
import bars from "../../../public/_the-ifg-experience/graphics/bars.png";
import org from "../../../public/_the-ifg-experience/graphics/org.png";
import staff from "../../../public/_the-ifg-experience/graphics/staff.png";
import gradientShadow from "../../../public/_global-graphics/gradient-shadow.png";

const TheIfgExperience = () => {
  return (
    <>
      <Head>
        <title>The IFG Experience</title>
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={`bg-[url('/_the-ifg-experience/images/hero.webp')]`}
          centerElement={true}
        >
          <div>
            <h1 className="mb-8 text-center font-bold text-seabreeze-500 text-5xl">
              The IFG Experience
            </h1>
            <p className="text-center text-xl text-seabreeze-500 lg:w-3/4 lg:mx-auto">
              Embark on a seamless transition to IFG with a dedicated support
              team of experts who can tailor solutions for your practice.
            </p>
          </div>
        </PageHeader>
        <section className="my-20 lg:my-32">
          <Container>
            <Breadcrumb />
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="relative lg:col-span-1">
                <Image
                  src={partners}
                  alt="group of surfers holding hands supporting each other"
                  className="rounded-[20px]"
                />
                <Image
                  src={gradientShadow}
                  alt="decorative drop shadow"
                  className="absolute top-0 -z-10 hidden lg:block"
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
        <section className="my-20 lg:my-32">
          <Container>
            <h2 className="mb-8 flex items-start gap-2 text-3xl font-bold text-hazard-blue-500">
              <Image src={highlight} alt="decorative heading highlight" />
              The Transition Journey
            </h2>
            <div className="flex flex-col-reverse gap-10 lg:flex lg:min-h-[500px] lg:flex-row lg:gap-5">
              <div className="lg:h-auto lg:grid lg:w-3/4 lg:grid-cols-2 lg:grid-rows-3 lg:gap-5">
                <div className="h-[100px] lg:h-auto col-span-1 row-span-1 rounded-2xl bg-[url('/_the-ifg-experience/images/guidance.webp')] bg-cover">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black/25">
                    <h3 className="text-center text-3xl font-bold text-seabreeze-500">
                      Guidance
                    </h3>
                  </div>
                </div>
                <div className="h-[100px] lg:h-auto col-span-1 row-span-3 rounded-2xl bg-[url('/_the-ifg-experience/images/assistance.webp')] bg-cover bg-right">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black/25">
                    <h3 className="text-center align-middle text-3xl font-bold text-seabreeze-500">
                      Assistance
                    </h3>
                  </div>
                </div>
                <div className="h-[100px] lg:h-auto col-span-1 row-span-2 rounded-2xl bg-[url('/_the-ifg-experience/images/support.webp')] bg-cover">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black/25">
                    <h3 className="text-center align-middle text-3xl font-bold text-seabreeze-500">
                      Support
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 lg:justify-around">
                <article className="flex items-center gap-2 text-2xl lg:text-4xl font-medium text-neon-orange-500">
                  <div className="flex items-center gap-5">
                    <Image src={checkmarkBlue} alt="decorative checkmark" />
                    <p className="w-3/4">
                      Customized Transition Plan & Timeline
                    </p>
                  </div>
                </article>
                <article className="flex items-center gap-2 text-2xl lg:text-4xl font-medium text-neon-orange-500">
                  <div className="flex items-center gap-5">
                    <Image src={checkmarkBlue} alt="decorative checkmark" />
                    <p className="w-3/4">Dedicated Transition Team</p>
                  </div>
                </article>
                <article className="flex items-center gap-2 text-2xl lg:text-4xl font-medium text-neon-orange-500">
                  <div className="flex items-center gap-5">
                    <Image src={checkmarkBlue} alt="decorative checkmark" />
                    <p className="w-3/4">
                      More Time for you to Spend with Your Clients
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-32">
          <Container>
            <h2 className="mx-auto mb-5 w-1/3 text-center text-3xl font-bold text-hazard-blue-500">
              Dedicated Home Office Transition Team
            </h2>
            <p className="mb-5 text-center text-xl">
              Connect with our team members to get started.
            </p>
            <div className="mb-10 lg:grid lg:grid-cols-3">
              <div className="text-center text-neon-orange-500">
                <Image
                  src={highlights}
                  alt="decorative highlights"
                  className="mx-auto"
                />
                <Image
                  src={george}
                  alt="headshot of George Lazo, Manager of Transition Services."
                  className="mx-auto mb-5 rounded-full"
                  width={200}
                />
                <h3 className="text-xl font-bold">George Lazo</h3>
                <p>Manager Transition Services</p>
              </div>
              <div className="text-center text-neon-orange-500">
                <Image
                  src={highlights}
                  alt="decorative highlights"
                  className="mx-auto"
                />
                <Image
                  src={jessica}
                  alt="headshot of George Lazo, Manager of Transition Services."
                  className="mx-auto mb-5 rounded-full"
                  width={200}
                />
                <h3 className="text-xl font-bold">Jessica Brungard</h3>
                <p>Recruiting & Transition Coordinator</p>
              </div>
              <div className="text-center text-neon-orange-500">
                <Image
                  src={highlights}
                  alt="decorative highlights"
                  className="mx-auto"
                />
                <Image
                  src={julia}
                  alt="headshot of George Lazo, Manager of Transition Services."
                  className="mx-auto mb-5 rounded-full"
                  width={200}
                />
                <h3 className="text-xl font-bold">Julia Kohan</h3>
                <p>Senior Recruiter</p>
              </div>
            </div>
            <Button href={"/join/contact"} type={"primary"}>
              Let&apos;s Talk
            </Button>
          </Container>
        </section>
        <section className="my-20 lg:my-32">
          <Container>
            <h2 className="mb-10 text-center text-[100px] font-bold text-neon-orange-500">
              Service Oriented
            </h2>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <h2 className="mb-5 flex items-start gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative highlight" />
                  Our Staff
                </h2>
                <p className="mb-5 max-w-prose text-xl">
                  We're here to get you the help you need right away. This
                  means:
                </p>
                <ul>
                  <li className="mb-5 flex items-center gap-2">
                    <Image src={checkmarkOrange} />
                    <p className="text-3xl font-bold text-hazard-blue-500">
                      No Call Centers
                    </p>
                  </li>
                  <li className="mb-5 flex items-center gap-2">
                    <Image src={checkmarkOrange} />
                    <p className="text-3xl font-bold text-hazard-blue-500">
                      Personalized Service
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image src={checkmarkOrange} />
                    <p className="text-3xl font-bold text-hazard-blue-500">
                      We Answer the phone
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5 rounded-2xl bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 px-8 py-4 text-seabreeze-500">
                  <Image src={org} alt="icon of an org chart" />
                  <p className="text-5xl font-bold">96</p>
                  <p className="text-3xl">Home Office Employees</p>
                </div>
                <div className="flex items-center gap-5 rounded-2xl bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 px-8 py-4 text-seabreeze-500">
                  <Image src={bars} alt="icon of an org chart" />
                  <p className="text-5xl font-bold">15</p>
                  <p className="text-3xl">Average Years of Experience</p>
                </div>
                <div className="flex items-center gap-5 rounded-2xl bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 px-8 py-4 text-seabreeze-500">
                  <Image src={staff} alt="icon of an org chart" />
                  <p className="text-5xl font-bold">1:7</p>
                  <p className="text-3xl">Staff to Producing Rep</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-20 rounded-2xl bg-gradient-to-r from-hazard-blue-500 to-hazard-blue-400 py-10 lg:my-32">
          <Container>
            <h2 className="mb-5 flex items-start gap-2 text-3xl font-bold text-seabreeze-500">
              <Image src={highlightWhite} alt="decorative highlight" />
              Clients Come First
            </h2>
            <div className="grid grid-cols-2 gap-5">
              <Image
                src={clientsFirst}
                alt="image of happy clients at a beach"
              />
              <div>
                <ul className="flex flex-col justify-between h-full">
                  <li className="flex items-center gap-2">
                    <Image src={checkmarkWhite} />
                    <p className="text-2xl font-bold text-seabreeze-500">
                      Communications & Service
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image src={checkmarkWhite} />
                    <p className="text-2xl font-bold text-seabreeze-500">
                      Access to Leading Investment Companies
                    </p>
                  </li>
                  <li className="flex items-center font-bold gap-2">
                    <Image src={checkmarkWhite} />
                    <p className="text-2xl text-seabreeze-500">
                      Product Availability
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image src={checkmarkWhite} />
                    <p className="text-2xl font-bold text-seabreeze-500">
                      Risk Management
                    </p>
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

export default TheIfgExperience;
