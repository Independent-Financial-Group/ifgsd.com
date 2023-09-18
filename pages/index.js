import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useAnimate, motion, stagger, useInView } from "framer-motion";
// import { animate, inView } from "framer-motion/dom"

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import Nav from "../components/Nav/Nav";
import MobileNav from "../components/MobileNav/MobileNav";
import Hero from "../components/Hero/Hero";
import Testimonial from "../components/Testimonial/Testimonial";
import BranchAnnouncement from "../components/BranchAnnouncement/BranchAnnouncement";
import Stats from "../components/Stats/Stats";
import Footer from "../components/Footer/Footer";

import quotes from "../public/quotes.png";
import ctaImage1 from "../public/cta-image-1.png";
import ctaImage2 from "../public/cta-image-2.png";

const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

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
      offerings: {
        offeringOne: {
          icon: pageContent.fields.offering1Icon,
          header: pageContent.fields.offering1Header,
          paragraph: pageContent.fields.offering1Text,
        },
        offeringTwo: {
          icon: pageContent.fields.offering2Icon,
          header: pageContent.fields.offering2Header,
          paragraph: pageContent.fields.offering2Text,
        },
        offeringThree: {
          icon: pageContent.fields.offering3Icon,
          header: pageContent.fields.offering3Header,
          paragraph: pageContent.fields.offering3Text,
        },
        offeringFour: {
          icon: pageContent.fields.offering4Icon,
          header: pageContent.fields.offering4Header,
          paragraph: pageContent.fields.offering4Text,
        },
        offeringFive: {
          icon: pageContent.fields.offering5Icon,
          header: pageContent.fields.offering5Header,
          paragraph: pageContent.fields.offering5Text,
        },
        offeringSix: {
          icon: pageContent.fields.offering6Icon,
          header: pageContent.fields.offering6Header,
          paragraph: pageContent.fields.offering6Text,
        },
      },
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
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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
        <title>Independent Financial Group - Independence Perfected</title>
      </Head>
      <Nav />
      <MobileNav />
      <Hero content={pageContent.hero} />
      <main>
        <section className="relative my-16 lg:my-32">
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
              <h3 className="text-5xl font-bold text-hazard-blue-500 lg:text-6xl">
                {pageContent.sectionTestimonial.headingPrimary} <img className="inline w-11" src="/graphicAssets/heart.png" alt="" />
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
        </section>
        <section className="my-16 lg:my-32">
          <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
            <BranchAnnouncement newBranch={newBranch} />
          </div>
        </section>
        <section className="my-32">
          <div className="mx-auto max-w-screen-xl px-4 lg:relative lg:z-10">
            <Stats content={pageContent.sectionAbout} />
          </div>
        </section>
        <section className="text-seabreeze-500">
          <div className="mx-auto max-w-screen-xl rounded-[40px] px-4">
            <div className="rounded-[40px] bg-[url('/home/ifg-wave-2.jpg')] bg-cover bg-no-repeat">
              <div className="rounded-[40px] bg-blue-wave-700/60 px-4 py-8 sm:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
                  <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-seabreeze-500">
                    {pageContent.sectionOfferings.heading}
                  </h2>
                </div>
                <div
                  ref={scope}
                  className=" space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3 lg:text-left"
                >
                  <div className="product-card">
                    <div className="mb-2 flex flex-row items-center justify-start gap-2">
                      <img
                        src={`https://${pageContent.sectionOfferings.offerings.offeringOne.icon.fields.file.url}`}
                        alt={
                          pageContent.sectionOfferings.offerings.offeringOne
                            .icon.title
                        }
                        className="w-10"
                      />
                      <h3 className="text-xl font-bold text-seabreeze-500">
                        {
                          pageContent.sectionOfferings.offerings.offeringOne
                            .header
                        }
                      </h3>
                    </div>
                    <p>
                      {
                        pageContent.sectionOfferings.offerings.offeringOne
                          .paragraph
                      }{" "}
                      <span className="font-bold text-neon-orange-500">
                        <Link href="/offerings/practice-development">
                          Learn More &rarr;
                        </Link>
                      </span>
                    </p>
                  </div>
                  <div className="product-card">
                    <div className="mb-2 flex flex-row items-center justify-start gap-2">
                      <img
                        src={`https://${pageContent.sectionOfferings.offerings.offeringTwo.icon.fields.file.url}`}
                        alt={
                          pageContent.sectionOfferings.offerings.offeringTwo
                            .icon.title
                        }
                        className="w-10"
                      />
                      <h3 className="text-xl font-bold text-seabreeze-500">
                        {
                          pageContent.sectionOfferings.offerings.offeringTwo
                            .header
                        }
                      </h3>
                    </div>
                    <p className="text-dunkel-blue dark:text-gray-400">
                      {
                        pageContent.sectionOfferings.offerings.offeringThree
                          .paragraph
                      }{" "}
                      <span className="font-bold text-neon-orange-500">
                        <Link href="/offerings/practice-development">
                          Learn More &rarr;
                        </Link>
                      </span>
                    </p>
                  </div>
                  <div className="product-card">
                    <div className="mb-2 flex flex-row items-center justify-start gap-2">
                      <img
                        src={`https://${pageContent.sectionOfferings.offerings.offeringThree.icon.fields.file.url}`}
                        alt={
                          pageContent.sectionOfferings.offerings.offeringThree
                            .icon.title
                        }
                        className="w-10"
                      />

                      <h3 className="text-xl font-bold text-seabreeze-500 dark:text-seabreeze-500">
                        {
                          pageContent.sectionOfferings.offerings.offeringThree
                            .header
                        }
                      </h3>
                    </div>
                    <p className="text-dunkel-blue dark:text-gray-400">
                      {
                        pageContent.sectionOfferings.offerings.offeringThree
                          .paragraph
                      }{" "}
                      <span className="font-bold text-neon-orange-500">
                        <Link href="/offerings/practice-development">
                          Learn More &rarr;
                        </Link>
                      </span>
                    </p>
                  </div>
                  <div className="product-card">
                    <div className="mb-2 flex flex-row items-center justify-start gap-2">
                      <img
                        src={`https://${pageContent.sectionOfferings.offerings.offeringFour.icon.fields.file.url}`}
                        alt={
                          pageContent.sectionOfferings.offerings.offeringFour
                            .icon.title
                        }
                        className="w-10"
                      />

                      <h3 className="text-xl font-bold text-seabreeze-500">
                        {
                          pageContent.sectionOfferings.offerings.offeringFour
                            .header
                        }
                      </h3>
                    </div>
                    <p className="text-dunkel-blue dark:text-gray-400">
                      {
                        pageContent.sectionOfferings.offerings.offeringFour
                          .paragraph
                      }{" "}
                      <span className="font-bold text-neon-orange-500">
                        <Link href="/offerings/practice-development">
                          Learn More &rarr;
                        </Link>
                      </span>
                    </p>
                  </div>
                  <div className="product-card">
                    <div className="mb-2 flex flex-row items-center justify-start gap-2">
                      <img
                        src={`https://${pageContent.sectionOfferings.offerings.offeringFive.icon.fields.file.url}`}
                        alt={
                          pageContent.sectionOfferings.offerings.offeringFive
                            .icon.title
                        }
                        className="w-10"
                      />

                      <h3 className="text-xl font-bold text-seabreeze-500">
                        {
                          pageContent.sectionOfferings.offerings.offeringFive
                            .header
                        }
                      </h3>
                    </div>
                    <p className="text-dunkel-blue dark:text-gray-400">
                      {
                        pageContent.sectionOfferings.offerings.offeringFive
                          .paragraph
                      }{" "}
                      <span className="font-bold text-neon-orange-500">
                        <Link href="/offerings/practice-development">
                          Learn More &rarr;
                        </Link>
                      </span>
                    </p>
                  </div>
                  <div className="product-card">
                    <div className="mb-2 flex flex-row items-center justify-start gap-2">
                      <img
                        src={`https://${pageContent.sectionOfferings.offerings.offeringSix.icon.fields.file.url}`}
                        alt={
                          pageContent.sectionOfferings.offerings.offeringSix
                            .icon.title
                        }
                        className="w-10"
                      />

                      <h3 className="text-xl font-bold text-seabreeze-500">
                        {
                          pageContent.sectionOfferings.offerings.offeringSix
                            .header
                        }
                      </h3>
                    </div>
                    <p className="text-dunkel-blue dark:text-gray-400">
                      {
                        pageContent.sectionOfferings.offerings.offeringSix
                          .paragraph
                      }{" "}
                      <span className="font-bold text-neon-orange-500">
                        <Link href="/offerings/practice-development">
                          Learn More &rarr;
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-32">
          <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="">
                <div className="relative flex flex-col items-center lg:items-start">
                  <img
                    src="/graphicAssets/CTA-Arrow.png"
                    alt="arrow pointing to sign-up button"
                    className="absolute -left-24 top-4 h-[214px]"
                  />
                  <h2 className="text-xl font-bold text-hazard-blue-500 md:text-4xl">
                    {pageContent.sectionCTA.heading}
                  </h2>

                  <p className="py-4 text-center text-lg text-dunkel-blue-100 sm:mt-4 sm:block lg:py-0 lg:text-left">
                    {pageContent.sectionCTA.paragraph}
                  </p>

                  <div className="mt-4 md:mt-8">
                    <Link
                      href="#"
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
                  alt="Student"
                  src={ctaImage1}
                  className="h-40 w-full rounded-lg object-cover sm:h-56 md:h-full"
                />

                <Image
                  alt="Student"
                  src={ctaImage2}
                  className="h-40 w-full rounded-lg object-cover sm:h-56 md:h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
