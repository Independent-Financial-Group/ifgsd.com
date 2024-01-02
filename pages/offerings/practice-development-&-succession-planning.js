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
import highlightBlue from "../../public/_global-graphics/highlight-blue.png";
import strategy from "../../public/_practice-development/images/strategy.webp";
import roadmap from "../../public/_practice-development/images/roadmap.png";
import succession from "../../public/_practice-development/images/succession.webp";

const practiceDev = () => {
  return (
    <>
      <Head>
        <title>
          Practice Development & Succession Planning | Offerings | Independent
          Financial Group
        </title>
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={"bg-[url('/_practice-development/images/hero.webp')]"}
        >
          <h1 className=" flex items-start gap-2 text-5xl font-bold text-seabreeze-500 lg:w-1/2">
            <Image src={highlight} alt="decorative heading highlight" />{" "}
            Practice Development & Succession Planning
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <h2 className="flex items-start gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} />A Strategy for Every Practice Type
                </h2>
                <p className="mt-5 text-xl">
                  We understand that no two advisory practices are the same.
                  That is why we&apos;ve developed a collection of resources
                  that can be utilized across any practice type.
                </p>
              </div>
              <div className="mt-5 lg:mt-0">
                <Image
                  src={strategy}
                  className="rounded-xl"
                  alt="A strategy plan"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="my-10 rounded-[20px] bg-gradient-to-r from-neon-orange-500 to-neon-orange-600 py-10 lg:my-32 lg:rounded-[40px]">
          <Container>
            <div>
              <h2 className="text-center text-3xl text-seabreeze-500">
                Roadmap to Success
              </h2>
              <p className="mx-auto mt-5 text-center text-xl text-seabreeze-500 lg:w-1/3">
                A central repository of essential practice management tools and
                resources
              </p>
            </div>
            <div className="mt-8">
              <Image
                src={roadmap}
                alt="infographic showing IFG's roadmap to success"
              />
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <Image
                  src={succession}
                  className="rounded-xl"
                  alt="A strategy plan"
                />
              </div>
              <div className="mt-5 lg:mt-0">
                <h2 className="flex items-start gap-2 text-3xl font-bold text-neon-orange-500">
                  <Image src={highlightBlue} />A Strategy for Every Practice
                  Type
                </h2>
                <p className="mt-5 text-xl">
                  We understand that no two advisory practices are the same.
                  That is why we&apos;ve developed a collection of resources
                  that can be utilized across any practice type.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default practiceDev;
