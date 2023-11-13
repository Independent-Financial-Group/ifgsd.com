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
import Button from "../../components/Button/Button";

// IMPORT ASSETS
import gatewayInforgraphic from "../../public/_technology/images/gateway-infographic.png";
import realTimeSupport from "../../public/_technology/images/real-time-support.webp";
import highlight from "../../public/_global-graphics/highlight.png";
import archive from "../../public/_technology/graphics/archive.png";
import folderShield from "../../public/_technology/graphics/folder-shield.png";
import renewal from "../../public/_technology/graphics/renewal.png";

const technology = () => {
  return (
    <>
      <Head>
        <title>Technology | Offerings | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <PageHeader bgPath={"bg-[url(/_technology/images/hero.webp)]"}>
          <h1 className="flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
            <Image src={highlight} alt="decorative heading highlight" />
            Technology
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <h2 className="flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight." />
                  Operational Efficiency
                </h2>
                <p className="mt-5 text-xl">
                  Our team supports your operational efficiency with our
                  tailored platforms.
                </p>
              </div>
              <div className="my-10 flex flex-col gap-5 text-3xl font-semibold text-seabreeze-500 lg:my-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-5">
                <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 px-4 py-8 text-center">
                  Freedom to Choose
                </div>
                <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 px-4 py-8 text-center">
                  User Friendly
                </div>
                <div className="col-span-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 px-4 py-8 text-center">
                  Tailored Platforms
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <Image
                  src={realTimeSupport}
                  alt="IFG employees collaborating on working to support the IFG advisors."
                  className="mx-auto"
                />
              </div>
              <div className="mt-5 lg:mt-0">
                <h2 className="flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight" />
                  Real-time Dedicated Support
                </h2>
                <p className="my-5 text-xl">
                  IFG’s dedicated Software Support team is available to help you
                  with your technology needs and training.
                </p>
                <ul className="ml-10 list-disc text-3xl text-neon-orange-500">
                  <li>We pick up the phone when you call.</li>
                  <li className="my-5">
                    Hands-on assistance, for any and all tech questions.
                  </li>
                  <li>Advanced tech consulting from our experts.</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-10 rounded-[20px] bg-gradient-to-r from-hazard-blue-500 to-blue-wave-500 py-32 text-seabreeze-500 lg:my-32 lg:rounded-[40px]">
          <Container>
            <h2 className="mb-5 text-center text-3xl font-bold lg:mx-auto lg:w-1/2">
              Regulatory Compliance through Technology
            </h2>
            <div className="flex flex-col gap-10 text-center lg:grid lg:grid-cols-3 lg:gap-5">
              <div>
                <div className="mx-auto flex h-[150px] w-[150px] items-center justify-center rounded-full bg-neon-orange-500">
                  <Image src={renewal} alt="icon of a folder with a shield" />
                </div>
                <h3 className="mt-5 text-3xl font-bold">
                  Threat & Risk Management
                </h3>
              </div>
              <div>
                <div className="mx-auto flex h-[150px] w-[150px] items-center justify-center rounded-full bg-neon-orange-500">
                  <Image src={archive} alt="icon of a folder with a shield" />
                </div>
                <h3 className="mt-5 text-3xl font-bold">Archiving Solutions</h3>
              </div>
              <div>
                <div className="mx-auto flex h-[150px] w-[150px] items-center justify-center rounded-full bg-neon-orange-500">
                  <Image src={renewal} alt="icon of a folder with a shield" />
                </div>
                <h3 className="mt-5 text-3xl font-bold">
                  Streamlined Renewal Process
                </h3>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <h2 className="flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight" />
                  Your Web-based Front Office
                </h2>
                <p className="my-5 text-xl">
                  Independent Financial Group’s user-friendly web-based
                  application gives you access to comprehensive commission and
                  client information.
                </p>
                <Button href={"/join/contact"} type={"primary"}>
                  Talk Tech with Us
                </Button>
              </div>
              <div className="mt-5 lg:mt-0">
                <Image
                  src={gatewayInforgraphic}
                  alt="IFG's web-based front office system."
                />
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default technology;
