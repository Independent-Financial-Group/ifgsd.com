import React from "react";

// IMPORT NEXTJS
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// IMPORT COMPONENTS
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/PageHeader/PageHeader";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import highlightWhite from "../../public/_global-graphics/highlight-white.png";
import newsGraphic from "../../public/_compliance/graphics/empowering-news.png";
import regulatoryExpertise from "../../public/_compliance/images/regulatory-expertise.webp";
import embracingChange from "../../public/_compliance/graphics/embracing-change.png";

const compliance = () => {
  return (
    <>
      <Head>
        <title>Compliance | Offerings | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <PageHeader bgPath={"bg-[url(/_compliance/images/hero.webp)]"}>
          <h1 className="flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
            <Image src={highlight} alt="decorative heading highlight" />
            Compliance
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <h2 className="flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight" />
                  Empowering you with Information
                </h2>
                <p className="mt-5 text-xl">
                  Our goal is to empower you to make sound investment
                  recommendations and readily and expediently service your
                  clients.
                </p>
              </div>
              <div className="mt-5 lg:mt-0">
                <Image
                  src={newsGraphic}
                  alt="Graphic illustration of informative news"
                  className="mx-auto"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="my-10 rounded-[20px] bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 py-20 lg:my-32">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <Image
                  src={regulatoryExpertise}
                  alt="Image of an expert auditor reviewing files"
                  className="rounded-xl"
                />
              </div>
              <div className="mt-5 lg:mt-0">
                <h2 className="flex items-center gap-2 text-3xl font-bold text-seabreeze-500">
                  <Image
                    src={highlightWhite}
                    alt="decorative heading highlight"
                  />{" "}
                  Regulatory Expertise
                </h2>
                <p className="mt-5 text-xl text-seabreeze-500">
                  Our teams expertise allows you to run your business with the
                  confidence that you are compliant with regulatory
                  requirements.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="items-center lg:grid lg:grid-cols-2 lg:gap-5">
              <div>
                <h2 className="flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight" />
                  Embracing Change
                </h2>
                <p className="mt-5 text-xl">
                  Our culture is one of open feedback and constant improvement
                  to make it easy for you to do business.
                </p>
              </div>
              <div className="mt-5 lg:mt-0">
                <Image
                  src={embracingChange}
                  alt="graphic symbolizing embracing change"
                  className="mx-auto"
                />
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default compliance;
