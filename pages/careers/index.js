import React, { useEffect, useState } from "react";

// IMPORT NEXT
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// IMPORT COMPONENTS
import JobBoard from "../../components/JobBoard/JobBoard";
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";
import PageHeader from "../../components/PageHeader/PageHeader";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import highlightWhite from "../../public/_global-graphics/highlight-white.png";
import highlightBlue from "../../public/_global-graphics/highlight-blue.png";
import section1Image from "../../public/_careers/images/section1.png";
import section2Image from "../../public/_careers/images/section2.webp";
import section3Image from "../../public/_careers/images/section3.png";
import checkmarkOrange from "../../public/_global-graphics/checkmark-orange.png";

const index = () => {
  return (
    <>
      <Head>
        <title>Work at IFG | Independent Financial Group San Diego</title>
        <meta
          name="description"
          content="Find your next career at the IFG Home Office."
        />
        <meta name="robots" content="follow, index" />
      </Head>
      <PublicLayout>
        <PageHeader bgPath={"bg-[url(/_careers/images/hero.webp)] bg-top"}>
          <p className="flex items-center gap-2 text-3xl font-bold text-seabreeze-500">
            <Image src={highlight} alt="decorative heading highlight" />
            Endless Opportunities
          </p>
          <h1 className="text-5xl font-medium text-seabreeze-500">
            Find Your Next Career with IFG
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="mb-10 lg:self-center">
                <h2 className="flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight" />
                  Find Open Positions
                </h2>
                <p className="my-5 text-xl">
                  Explore our current job openings to discover exciting career
                  opportunities. Start your journey with us by browsing
                  available positions that match your skills and interests.
                  Whether you're seeking a new challenge or looking to join a
                  dynamic team, we have a variety of roles waiting for talented
                  individuals like you.
                </p>
                <Button href="/careers/open-positions" type={"primary"}>
                  Explore Open Positions
                </Button>
              </div>
              <div>
                <Image
                  src={section1Image}
                  alt="Employees and Founders at different IFG events"
                  className="mx-auto"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="my-20 bg-gradient-to-r from-hazard-blue-500 to-blue-wave-300 py-10 lg:my-32 lg:rounded-[40px]">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="mb-10 lg:mb-0">
                <Image
                  src={section2Image}
                  alt="Employees learning"
                  className="rounded-xl"
                />
              </div>
              <div className="lg:self-center">
                <h2 className="flex items-center gap-2 text-3xl font-bold text-seabreeze-500">
                  <Image
                    src={highlightWhite}
                    alt="decorative heading highlight"
                  />{" "}
                  Professional Development
                </h2>
                <p className="my-5 text-xl text-seabreeze-500">
                  Our team members are our most valuable resources. We are
                  committed to nurturing your potential by providing support
                  through a professional development reimbursement program,
                  comprehensive training, and mentorship initiatives.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32 ">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="mb-10 lg:mb-0">
                <h2 className="flex items-center gap-2 text-3xl font-bold text-neon-orange-500">
                  <Image
                    src={highlightBlue}
                    alt="decorative heading highlight"
                  />
                  Perks & Benefits
                </h2>
                <p className="my-5 text-xl">
                  IFG offers a competitive benefits package with:
                </p>
                <ul className="flex flex-col gap-5 text-xl md:text-2xl">
                  <li className="flex items-center gap-2 border-b-2 border-neon-orange-500 py-5">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Company Paid Medical, Dental, and Vision.
                    </p>
                  </li>
                  <li className="flex items-center gap-2 border-b-2 border-neon-orange-500 py-5">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Paid time off (Including all stock market holidays).
                    </p>
                  </li>
                  <li className="flex items-center gap-4 border-b-2 border-neon-orange-500 py-5">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      401k Matching Program.
                    </p>
                  </li>
                  <li className="flex items-center gap-2 border-b-2 border-neon-orange-500 py-5">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Professional Development Reimbursement Program.
                    </p>
                  </li>
                  <li className="flex items-center gap-2 border-b-2 border-neon-orange-500 py-5">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Market-level Compensation Based on Experience.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src={section3Image}
                  alt="ifg employees at company events"
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

export default index;
