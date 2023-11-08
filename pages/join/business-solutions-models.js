import React from "react";

// NEXT JS IMPORTS
import Head from "next/head";
import Image from "next/image";

// IMPORT COMPONENTS
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import PageHeader from "../../components/PageHeader/PageHeader";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import existing from "../../public/_business-solutions-models/images/existing-practice.jpg";
import independent from "../../public/_business-solutions-models/images/independent-practice.webp";
import selling from "../../public/_business-solutions-models/images/selling-practice.webp";

const BusinessSolutionsModels = () => {
  return (
    <>
      <Head>
        <title>Business Solutions Models | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={'bg-[url("/_business-solutions-models/images/hero.webp")]'}
        >
          <h1 className="flex items-start gap-2 text-3xl font-bold text-seabreeze-500 lg:items-center">
            <Image src={highlight} alt="decorative highlight graphic" />
            Business Solutions Models
          </h1>
        </PageHeader>
        <section className="my-20">
          <Container>
            <Breadcrumb />
            <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-hazard-blue-500 lg:text-3xl">
              <Image src={highlight} alt="decorative highlight graphic" />
              Tailored to Your Needs
            </h2>
            <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3">
              <div>
                <Image
                  src={independent}
                  alt="group of advisors"
                  className="rounded-t-3xl"
                />
                <div className=" w-full bg-gradient-to-r from-neon-orange-500 to-neon-orange-600">
                  <h3 className="p-4 font-semibold text-seabreeze-500">
                    Independent Practice
                  </h3>
                </div>
              </div>
              <div>
                <Image
                  src={existing}
                  alt="group of advisors"
                  className="rounded-t-3xl"
                />
                <div className=" w-full bg-gradient-to-r from-neon-orange-500 to-neon-orange-600">
                  <h3 className="p-4 font-semibold text-seabreeze-500">
                    Join an Existing Practice
                  </h3>
                </div>
              </div>
              <div>
                <Image
                  src={selling}
                  alt="group of advisors"
                  className="rounded-t-3xl"
                />
                <div className=" w-full bg-gradient-to-r from-neon-orange-500 to-neon-orange-600">
                  <h3 className="p-4 font-semibold text-seabreeze-500">
                    Independent Practice
                  </h3>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-20 rounded-[40px] bg-gradient-to-r from-hazard-blue-500 to-blue-wave-300">
          <Container>
            <div className="flex flex-col items-center gap-8 py-60 lg:p-60">
              <h2 className="text-4xl font-bold text-seabreeze-500">
                Let&apos;s Chat
              </h2>
              <p className="text-xl text-seabreeze-500">
                See how IFG can fit your practice
              </p>
              <Button type={"primary"} href={"/join/contact"}>
                Talk to a Team Member
              </Button>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default BusinessSolutionsModels;
