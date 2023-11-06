import React from "react";

// IMPORT NEXT
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// IMPORT COMPONENTS
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";
import PageHeader from "../../components/PageHeader/PageHeader";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

// IMPORT ASSETS
import highlightOrange from "../../public/_global-graphics/highlight.png";
import celebrationCollage1 from "../../public/_awards-and-accolades/images/celebration-collage-1.webp";
import celebrationCollage2 from "../../public/_awards-and-accolades/images/celebration-collage-2.JPG";
import celebrationCollage3 from "../../public/_awards-and-accolades/images/celebration-collage-3.JPG";
import celebrationCollage4 from "../../public/_awards-and-accolades/images/celebration-collage-4.webp";
import celebrationCollage5 from "../../public/_awards-and-accolades/images/celebration-collage-5.webp";
import celebrationCollage6 from "../../public/_awards-and-accolades/images/celebration-collage-6.webp";
import celebrationCollage7 from "../../public/_awards-and-accolades/images/celebration-collage-7.webp";
import celebrationCollage8 from "../../public/_awards-and-accolades/images/celebration-collage-8.webp";

const awardsAndAccolades = () => {
  return (
    <>
      <Head>
        <title>Awards & Accolades | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={"bg-[url('/_awards-and-accolades/images/hero.webp')]"}
        >
          <h1 className="flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
            <Image src={highlightOrange} alt="decorative heading highlight" />
            Awards & Accolades
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
            <h2 className="text-center text-6xl font-bold text-neon-orange-500">
              To Our Advisors & Employees
            </h2>
            <p className="mx-auto my-8 w-1/2 text-center text-xl">
              We extend our heartfelt appreciation to the exceptional advisors
              and employees at Independent Financial Group. Your dedication,
              expertise, and unwavering commitment are the driving force behind
              our success. Thank you for your continued hard work in serving
              your clients and shaping a prosperous future together. <br />{" "}
              <span className="font-bold text-neon-orange-500">
                Your achievements are truly valued and celebrated!
              </span>
            </p>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="grid grid-cols-4 grid-rows-3 gap-5">
              <Image
                src={celebrationCollage4}
                className="col-span-1 h-[250px] rounded-xl object-cover object-top"
                alt="Scott Heising and David Fischer"
              />
              <Image
                src={celebrationCollage1}
                className="col-span-2 h-[250px] rounded-xl object-cover object-top"
                alt="Scott Heising and David Fischer"
              />
              <Image
                src={celebrationCollage5}
                className="col-span-1 h-[250px] rounded-xl object-cover object-top"
                alt="Scott Heising and David Fischer"
              />
              <Image
                src={celebrationCollage6}
                className="col-span-2 h-[250px] rounded-xl object-cover object-top"
                alt="Scott Heising and David Fischer"
              />
              <Image
                src={celebrationCollage8}
                className="col-span-2 h-[250px] rounded-xl object-cover object-top"
                alt="Scott Heising and David Fischer"
              />
              <Image
                src={celebrationCollage2}
                className="col-span-1 h-[250px] rounded-xl object-cover object-top"
                alt="Scott Heising and David Fischer"
              />
              <Image
                src={celebrationCollage3}
                className="col-span-2 h-[250px] rounded-xl object-cover object-center"
                alt="Scott Heising and David Fischer"
              />
              <Image
                src={celebrationCollage7}
                className="col-span-1 h-[250px] rounded-xl object-cover object-top"
                alt="Scott Heising and David Fischer"
              />
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <h2 className="text-center text-6xl font-bold text-hazard-blue-500">
              Featured Awards
            </h2>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default awardsAndAccolades;
