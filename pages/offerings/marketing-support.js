import React from "react";

// IMPORT NEXTJS
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// IMPORT COMPONENTS
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import PageHeader from "../../components/PageHeader/PageHeader";
import Container from "../../components/Container/Container";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import highlightWhite from "../../public/_global-graphics/highlight-white.png";
import highlightBlue from "../../public/_global-graphics/highlight-blue.png";
import marketingDesignBranding from "../../public/_marketing-support/images/marketing-design.webp";
import resources from "../../public/_marketing-support/images/resources.webp";
import branding from "../../public/_marketing-support/graphics/branding.png";
import messaging from "../../public/_marketing-support/graphics/messaging.png";
import stationery from "../../public/_marketing-support/graphics/stationery.png";
import freedom from "../../public/_marketing-support/images/freedom.png";
const marketingSupport = () => {
  return (
    <>
      <Head>
        <title>
          Marketing Support | Offerings | Independent Financial Group
        </title>
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={"bg-[url('/_marketing-support/images/hero.webp')] bg-bottom"}
        >
          <h1 className="flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
            <Image src={highlight} alt="decorative heading highlight" />{" "}
            Marketing Support
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <h2 className="flex items-start gap-2 text-3xl font-bold text-neon-orange-500">
                  <Image
                    src={highlightBlue}
                    alt="decorative heading highlight"
                  />{" "}
                  Exclusive Partnerships, Resources & Corporate Discounts
                </h2>
                <p className="mt-10 text-xl">
                  We have the partnerships, resources, and support to help you
                  tell your unique brand story and set your business apart.
                </p>
              </div>
              <div className="mx-auto mt-10 lg:mt-auto">
                <Image
                  src={resources}
                  alt="Infographic of all marketing resources IFG provides such as corporate discounts, an online resource center, and publications."
                  className="mx-auto"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="my-10 rounded-[20px] bg-gradient-to-r from-hazard-blue-500 to-blue-wave-400 py-5 lg:my-32 lg:rounded-[40px]">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <Image
                  src={marketingDesignBranding}
                  alt="illustration for marketing design & branding resources"
                  className="w-3/4"
                />
              </div>
              <div className="mt-10 lg:mt-0">
                <h2 className="mx-auto flex w-fit items-center gap-2 text-center text-3xl font-bold text-seabreeze-500 lg:mx-0 lg:text-left">
                  <Image
                    src={highlightWhite}
                    alt="decorative heading highlight"
                    className="hidden lg:block"
                  />{" "}
                  Take Your Brand to the Next Level
                </h2>
                <ul className="my-5 flex flex-col items-center gap-5">
                  <li className="flex items-center justify-between rounded-xl bg-white px-10 py-5 lg:w-3/5">
                    <Image src={stationery} />
                    <p className="text-2xl font-bold text-neon-orange-500">
                      Stationery Design
                    </p>
                  </li>
                  <li className="flex items-center justify-between rounded-xl bg-white px-10 py-5 lg:w-3/5">
                    <Image src={branding} />
                    <p className="text-2xl font-bold text-neon-orange-500">
                      Brand Guidebook
                    </p>
                  </li>
                  <li className="flex items-center justify-between rounded-xl bg-white px-10 py-5 lg:w-3/5">
                    <Image src={messaging} />
                    <p className="text-2xl font-bold text-neon-orange-500">
                      Brand Messaging
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <h2 className="flex items-start gap-2 text-3xl font-bold text-neon-orange-500">
                  <Image
                    src={highlightBlue}
                    alt="decorative heading highlight"
                  />{" "}
                  The Freedom to tell Your Story & Collaborate
                </h2>
                <p className="mt-5 text-xl">
                  IFG supports your independence to tell your story the way you
                  see it. This leads to higher collaboration across the board
                  with your peers which in turn brings more success.
                </p>
              </div>
              <div className="mt-10 lg:mt-auto">
                <Image
                  src={freedom}
                  alt="people branding and collaborating independently from IFG."
                />
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default marketingSupport;
