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
import marketingDesignBranding from "../../public/_marketing-support/images/branding-mockup.webp";
import resources from "../../public/_marketing-support/images/resources.webp";
import branding from "../../public/_marketing-support/graphics/branding.png";
import messaging from "../../public/_marketing-support/graphics/messaging.png";
import stationery from "../../public/_marketing-support/graphics/stationery.png";
import freedom from "../../public/_marketing-support/images/freedom.png";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  FingerPrintIcon,
  EnvelopeIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

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
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div>
                <h2 className="mx-auto mb-5 flex w-fit items-center gap-2 text-center text-3xl font-bold text-seabreeze-500 lg:mx-0 lg:text-left">
                  Take Your Brand to the Next Level with our Marketing Branding
                  Package.
                </h2>
                <Image
                  src={marketingDesignBranding}
                  alt="illustration for marketing design & branding resources"
                  className="h-3/4 rounded-lg object-cover"
                />
              </div>
              <div className="mt-10 lg:mt-0">
                <ul className="my-5 grid grid-cols-2 items-center gap-5">
                  <li>
                    <div className="mb-5 w-fit rounded-lg bg-seabreeze-500 p-3">
                      <MagnifyingGlassIcon class="h-6 w-6 text-blue-wave-500" />
                    </div>
                    <p className="text-seabreeze-500">
                      <span className="font-bold">Discovery Sessions.</span>{" "}
                      Speak with our branding specialists to identify your
                      company's mission.
                    </p>
                  </li>
                  <li>
                    <div className="mb-5 w-fit rounded-lg bg-seabreeze-500 p-3">
                      <UserCircleIcon class="h-6 w-6 text-blue-wave-500" />
                    </div>
                    <p className="text-seabreeze-500">
                      <span className="font-bold">Company Profile.</span>{" "}
                      Develop a brief written company story to use in your
                      marketing collateral.
                    </p>
                  </li>
                  <li>
                    <div className="mb-5 w-fit rounded-lg bg-seabreeze-500 p-3">
                      <ChatBubbleLeftRightIcon class="h-6 w-6 text-blue-wave-500" />
                    </div>
                    <p className="text-seabreeze-500">
                      <span className="font-bold">Messaging.</span> Effectively
                      communicate your value proposition throughout your
                      marketing efforts with carefully curated messaging.
                    </p>
                  </li>
                  <li>
                    <div className="mb-5 w-fit rounded-lg bg-seabreeze-500 p-3">
                      <FingerPrintIcon class="h-6 w-6 text-blue-wave-500" />
                    </div>
                    <p className="text-seabreeze-500">
                      <span className="font-bold">Visual Identity System.</span>{" "}
                      Get a custom-designed logo, along with fonts and color
                      scheme that align with your brand.
                    </p>
                  </li>
                  <li>
                    <div className="mb-5 w-fit rounded-lg bg-seabreeze-500 p-3">
                      <EnvelopeIcon class="h-6 w-6 text-blue-wave-500" />
                    </div>
                    <p className="text-seabreeze-500">
                      <span className="font-bold">
                        Stationary Design & Digital Graphics.
                      </span>{" "}
                      Custom business cards, envelopes, letterhead designs, and
                      digital graphics.
                    </p>
                  </li>
                  <li>
                    <div className="mb-5 w-fit rounded-lg bg-seabreeze-500 p-3">
                      <BookOpenIcon class="h-6 w-6 text-blue-wave-500" />
                    </div>
                    <p className="text-seabreeze-500">
                      <span className="font-bold">Discovery Sessions.</span>{" "}
                      Stay on brand with a guidebook that provides practical
                      instructions on how to use your brand elements
                      consistently throughout your marketing collateral.
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
