import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useAnimate, motion, stagger, useInView } from "framer-motion";

//LAYOUT
import PublicLayout from "../components/PublicLayout/PublicLayout";

// COMPONENTS
import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";
import Testimonial from "../components/Testimonial/Testimonial";
import BranchAnnouncement from "../components/BranchAnnouncement/BranchAnnouncement";
import HomeSlideshow from "../components/HomeSlideshow/HomeSlideshow";
import Stats from "../components/Stats/Stats";

// IMAGES
import ctaImage1 from "../public/_home/images/cta-image-1.webp";
import ctaImage2 from "../public/_home/images/cta-image-2.webp";

// GRAPHICS
import handshake from "../public/_home/graphics/handshake.png";
import balance from "../public/_home/graphics/balance.png";
import person from "../public/_home/graphics/person.png";

// CONTENTFUL
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// IMPORT DATA
export async function getStaticProps() {
  const newBranch = await client.getEntry("3a0Fc06d3mZw0ofKVnfAWy");
  const pageContent = await client.getEntry("4b9Yfat95NTXIYMG5Emg3T");
  const testimonials = await client.getEntries({
    content_type: "testimonials",
  });

  const formattedPageContent = {
    hero: {
      featuredAnnouncement: pageContent.fields.featuredAnnouncement,
      reference: pageContent.fields.featuredAnnouncementReference,
      heading: pageContent.fields.heroSectionHeading,
      subheading: pageContent.fields.heroSectionSubheading,
      paragraph: pageContent.fields.heroParagraph,
    },
    sectionTestimonial: {
      headingPrimary: pageContent.fields.testimonialSectionHeaderPrimary,
      headingSecondary: pageContent.fields.testimonialSectionHeaderSecondary,
      paragraph: pageContent.fields.testimonialSectionParagraph,
    },
    sectionAbout: {
      heading: pageContent.fields.aboutSectionHeader,
      paragraph: pageContent.fields.aboutSectionParagraph,
    },
    sectionRankings: {
      heading: pageContent.fields.rankingsSectionHeader,
    },
    sectionOfferings: {
      heading: pageContent.fields.offeringsSectionHeader,
      paragraph: pageContent.fields.offeringsSectionParagraph,
      offerings: [
        {
          icon: pageContent.fields.offering1Icon,
          header: pageContent.fields.offering1Header,
          slug: pageContent.fields.offering1Slug,
        },
        {
          icon: pageContent.fields.offering2Icon,
          header: pageContent.fields.offering2Header,
          slug: pageContent.fields.offering2Slug,
        },
        {
          icon: pageContent.fields.offering3Icon,
          header: pageContent.fields.offering3Header,
          slug: pageContent.fields.offering3Slug,
        },
        {
          icon: pageContent.fields.offering4Icon,
          header: pageContent.fields.offering4Header,
          slug: pageContent.fields.offering4Slug,
        },
        {
          icon: pageContent.fields.offering5Icon,
          header: pageContent.fields.offering5Header,
          slug: pageContent.fields.offering5Slug,
        },
        {
          icon: pageContent.fields.offering6Icon,
          header: pageContent.fields.offering6Header,
          slug: pageContent.fields.offering6Slug,
        },
      ],
    },
    sectionCTA: {
      heading: pageContent.fields.ctaSectionHeader,
      paragraph: pageContent.fields.ctaSectionParagraph,
    },
  };

  const formattedTestimonials = testimonials.items.map((item) => {
    return { ...item.fields };
  });

  return {
    props: {
      newBranch,
      pageContent: JSON.parse(JSON.stringify(formattedPageContent)),
      formattedTestimonials,
    },
    revalidate: 10,
  };
}

const HomePage = ({
  newBranch,
  pageContent,
  formattedTestimonials: testimonials,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        ".product-card",
        { opacity: [0, 1], y: [100, 0] },
        { delay: stagger(0.4) },
      );
    }
  }, [isInView]);

  return (
    <>
      <Head>
        <title>
          Independent Financial Group San Diego | Broker-Dealer & RIA
        </title>
      </Head>
      <PublicLayout>
        <Hero content={pageContent.hero} />
        <section className="relative my-16 lg:my-32">
          <Container>
            <p className="absolute z-0 hidden font-bold text-[#E2E7EB] md:text-[160px] lg:left-40 lg:top-44 lg:block">
              advisors
            </p>
            <p className="lg:top-35 lf:left-62 absolute z-0 hidden font-bold text-[#E2E7EB] md:text-[160px] lg:block">
              happy
            </p>
            <div className="relative z-10 mx-auto max-w-screen-xl px-4 lg:px-0">
              <div className="mx-auto my-10 max-w-prose text-center">
                <h2 className="text-xl font-bold text-dunkel-blue-500 lg:text-2xl">
                  {pageContent.sectionTestimonial.headingSecondary}
                </h2>
                <h3 className="text-5xl font-bold text-hazard-blue-500 lg:text-5xl">
                  {pageContent.sectionTestimonial.headingPrimary}{" "}
                  <img
                    className="inline w-11"
                    src="/graphicAssets/heart.png"
                    alt=""
                  />
                </h3>
                <p className="text-xl text-dunkel-blue-500 md:mt-5">
                  {pageContent.sectionTestimonial.paragraph}
                </p>
              </div>
              <Testimonial
                content={pageContent.sectionTestimonial}
                testimonials={testimonials}
              />
              <p className="text-[80px] font-bold text-[#E2E7EB] lg:hidden">
                happy
              </p>
              <p className="text-[80px] font-bold text-[#E2E7EB] lg:hidden">
                advisors
              </p>
            </div>
          </Container>
        </section>
        <section className="my-16 lg:my-32">
          <Container>
            <BranchAnnouncement newBranch={newBranch} />
          </Container>
        </section>
        <section className="my-32">
          <Container>
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:max-w-prose">
                <h2 className="font-bold text-hazard-blue-500 sm:text-2xl lg:text-4xl">
                  <img
                    className="mr-2 inline"
                    src="/graphicAssets/triangle-highlight.png"
                  />
                  {pageContent.sectionAbout.heading}
                </h2>

                <p className="my-4 text-gray-500 sm:text-xl">
                  {pageContent.sectionAbout.paragraph}{" "}
                  <span className="text-sm font-bold text-neon-orange-500">
                    {" "}
                    <Link href="/join/why-choose-us/our-mission">
                      Our Mission&rarr;
                    </Link>
                  </span>
                </p>
                <div className="my-4 grid grid-cols-2 grid-rows-2 gap-4 text-seabreeze-500 lg:my-0">
                  <div className="col-start-1 row-start-1 rounded-[20px] bg-gradient-to-r from-neon-orange-500 to-sunburst-500 p-3">
                    <Image
                      src={handshake}
                      className="mx-auto"
                      alt="handshake icon"
                    />
                    <h3 className="text-center text-3xl font-bold">
                      Integrity
                    </h3>
                  </div>
                  <div className="col-start-2 row-start-1 rounded-[20px] bg-gradient-to-r from-neon-orange-500 to-sunburst-500 p-3">
                    <Image
                      src={balance}
                      className="mx-auto"
                      alt="balance icon"
                    />
                    <h3 className="text-center text-3xl font-bold">balance</h3>
                  </div>
                  <div className="col-span-2 row-start-2 rounded-[20px] bg-gradient-to-r from-neon-orange-500 to-sunburst-500 p-3">
                    <Image src={person} className="mx-auto" alt="person icon" />
                    <h3 className="text-center text-3xl font-bold">
                      Independence
                    </h3>
                  </div>
                </div>
              </div>
              <HomeSlideshow />
            </div>
            <Stats content={pageContent.sectionAbout} />
          </Container>
        </section>
        <section className="text-seabreeze-500">
          <Container>
            <div className="rounded-[40px] bg-[url('/_home/images/offerings-bg.webp')] bg-cover bg-no-repeat">
              <div className="rounded-[40px] bg-hazard-blue-500/50 px-4 py-8 sm:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
                  <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-seabreeze-500">
                    {pageContent.sectionOfferings.heading}
                  </h2>
                </div>
                <div
                  ref={scope}
                  className=" space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3 lg:text-left"
                >
                  {pageContent.sectionOfferings.offerings.map((offering) => {
                    return (
                      <div key={offering.slug} className="product-card">
                        <Link passHref href={offering.slug}>
                          <div className="mb-2 flex flex-col items-center justify-start gap-2">
                            <img
                              src={`https://${offering.icon.fields.file.url}`}
                              alt={offering.icon.title}
                            />
                            <h3 className="text-center text-xl font-bold text-seabreeze-500">
                              {offering.header}
                            </h3>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-32">
          <Container>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="">
                <div className="relative flex flex-col items-center lg:items-start">
                  <img
                    src="/graphicAssets/CTA-Arrow.png"
                    alt="arrow pointing to sign-up button"
                    className="absolute -left-24 top-4 h-[170px]"
                  />
                  <h2 className="text-xl font-bold text-hazard-blue-500 md:text-4xl">
                    {pageContent.sectionCTA.heading}
                  </h2>

                  <p className="py-4 text-center text-lg text-dunkel-blue-100 sm:mt-4 sm:block lg:py-0 lg:text-left">
                    {pageContent.sectionCTA.paragraph}
                  </p>

                  <div className="mt-4 md:mt-8">
                    <Link
                      href="/join/contact"
                      className="order-3 inline-block rounded bg-neon-orange-500 px-12 py-3 text-sm font-bold text-white transition hover:bg-neon-orange-600 hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                <img
                  alt="grahic design accent"
                  src="/graphicAssets/CTA-ornament.png"
                  className="absolute -bottom-28 -left-36 -z-10"
                />
                <img
                  alt="grahic design accent"
                  src="/graphicAssets/CTA-ornament.png"
                  className="absolute -right-36 -top-28 -z-10"
                />
                <Image
                  alt="ifg family"
                  src={ctaImage1}
                  className="h-40 w-full rounded-lg object-cover sm:h-56 md:h-full"
                />

                <Image
                  alt="ifg family at conference"
                  src={ctaImage2}
                  className="h-40 w-full rounded-lg object-cover sm:h-56 md:h-full"
                />
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default HomePage;
