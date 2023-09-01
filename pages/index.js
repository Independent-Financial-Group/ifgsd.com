import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

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
import ctaImage1 from "../public/cta-image-1.png"
import ctaImage2 from "../public/cta-image-2.png"

const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const newBranches = await client.getEntries({ content_type: "newBranch" });

  const formattedBranches = newBranches.items.map((item) => {
    return {
      reps: item.fields.repNames,
      dba: item.fields.dba,
      officeLocation: item.fields.officeLocation
    }
  })

  return {
    props: { formattedBranches },
    revalidate: 10,
  };
}

const HomePage = ({ formattedBranches: newBranches }) => {
  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <>
      <Head>
        <title>Independent Financial Group - Independence Perfected</title>
      </Head>
      <Nav />
      <MobileNav />
      <Hero />
      <main>
        <section className="relative my-16 lg:my-32">
          <p className="hidden md:text-[160px] text-[#E2E7EB] font-bold absolute z-0 lg:block lg:top-44 lg:left-40">advisors</p>
          <p className="hidden md:text-[160px] text-[#E2E7EB] font-bold absolute z-0 lg:block lg:top-35" >happy</p>
          <div className="px-4 lg:px-0 mx-auto max-w-screen-xl relative z-10">
            <Testimonial />
            <p className="text-[80px] text-[#E2E7EB] font-bold lg:hidden" >happy</p>
            <p className="text-[80px] text-[#E2E7EB] font-bold lg:hidden">advisors</p>
            <BranchAnnouncement newBranches={newBranches} />
          </div>
        </section>
        <section className="my-32">
          <div className="mx-auto max-w-screen-xl relative z-10">
            <Stats />
          </div>
        </section>
        <section className="text-seabreeze-500">
          <div className="bg-[url('/home/ifg-wave-2.jpg')] rounded-[80px] mx-auto max-w-screen-xl">
            <div className="bg-blue-wave-700/60 rounded-[80px] py-8 px-4 sm:py-16 lg:px-6">
              <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-seabreeze-500">
                  Empowering Financial Advisors with Independence and Support
                </h2>
                <p className="text-dunkel-blue sm:text-md dark:text-gray-400">
                  {"With 20-years of experience and a focus on technology,innovation, expertise and independence, we can unlock long-term value and drive growth for your practice. we are dedicated to empowering financial advisors like you with the independence and support you deserve. As an independent firm, we provide you with the freedom to run your practice your way. We offer comprehensive resources, cutting-edge technology, and a collaborative community of like-minded professionals who are committed to your success.".substring(0, 250)}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 1, delay: 0.3 }}
                className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
              >
                <div>
                  <div className="flex flex-row items-center justify-start mb-2 gap-2">
                    <img src="/home/icons/icon-practice-development.png" className="w-10" />
                    <h3 className="text-xl font-bold text-seabreeze-500">
                      Practice Development
                    </h3>
                  </div>
                  <p>
                    {loremText.substring(0, 97)}. <span className="text-neon-orange-500 font-bold"><Link href="/offerings/practice-development">Learn More &rarr;</Link></span>
                  </p>
                </div>
                <div>
                  <div className="flex flex-row items-center justify-start mb-2 gap-2">
                    <img src="/home/icons/icon-products.png" className="w-10" />
                    <h3 className="text-xl font-bold text-seabreeze-500">
                      Products
                    </h3>
                  </div>
                  <p className="text-dunkel-blue dark:text-gray-400">
                    {loremText.substring(0, 97)}. <span className="text-neon-orange-500 font-bold"><Link href="/offerings/practice-development">Learn More &rarr;</Link></span>
                  </p>
                </div>
                <div>
                  <div className="flex flex-row items-center justify-start mb-2 gap-2">
                    <img src="/home/icons/icon-technology.png" className="w-10" />

                    <h3 className="text-xl font-bold dark:text-seabreeze-500 text-seabreeze-500">
                      Technology
                    </h3>
                  </div>
                  <p className="text-dunkel-blue dark:text-gray-400">
                    {loremText.substring(0, 97)}. <span className="text-neon-orange-500 font-bold"><Link href="/offerings/practice-development">Learn More &rarr;</Link></span>
                  </p>
                </div>
                <div>
                  <div className="flex flex-row items-center justify-start mb-2 gap-2">
                    <img src="/home/icons/icon-marketing-support.png" className="w-10" />

                    <h3 className="text-xl font-bold text-seabreeze-500">
                      Marketing Support
                    </h3>
                  </div>
                  <p className="text-dunkel-blue dark:text-gray-400">
                    {loremText.substring(0, 97)}. <span className="text-neon-orange-500 font-bold"><Link href="/offerings/practice-development">Learn More &rarr;</Link></span>
                  </p>
                </div>
                <div>
                  <div className="flex flex-row items-center justify-start mb-2 gap-2">
                    <img src="/home/icons/icon-competitive-compensation.png" className="w-10" />

                    <h3 className="text-xl font-bold text-seabreeze-500">
                      Competitive Compensation
                    </h3>
                  </div>
                  <p className="text-dunkel-blue dark:text-gray-400">
                    {loremText.substring(0, 97)}. <span className="text-neon-orange-500 font-bold"><Link href="/offerings/practice-development">Learn More &rarr;</Link></span>
                  </p>
                </div>
                <div>
                  <div className="flex flex-row items-center justify-start mb-2 gap-2">
                    <img src="/home/icons/icon-operations.png" className="w-10" />

                    <h3 className="text-xl font-bold text-seabreeze-500">
                      Operations
                    </h3>
                  </div>
                  <p className="text-dunkel-blue dark:text-gray-400">
                    {loremText.substring(0, 97)}. <span className="text-neon-orange-500 font-bold"><Link href="/offerings/practice-development">Learn More &rarr;</Link></span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="my-32">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="">
                <div className="mx-auto max-w-xl flex flex-col">
                  <h2 className="text-xl font-bold text-hazard-blue-500 md:text-4xl">
                    Join our Family Today!
                  </h2>

                  <p className="hidden text-dunkel-blue-100 text-lg sm:mt-4 sm:block">
                    We invite passionate financial professionals to join our thriving community. Experience support, collaboration, and belonging that sets us apart. Take your practice to new heights and make a lasting impact on clients' lives. Start your journey toward fulfillment.
                  </p>

                  <div className="mt-4 md:mt-8">
                    <a
                      href="#"
                      className="inline-block rounded bg-neon-orange-500 px-12 py-3 text-sm font-bold text-white transition hover:bg-neon-orange-600 hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      Get Started Today
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                <Image
                  alt="Student"
                  src={ctaImage1}
                  className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
                />

                <Image
                  alt="Student"
                  src={ctaImage2}
                  className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
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
