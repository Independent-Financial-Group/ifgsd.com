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
  return (
    <>
      <Head>
        <title>Independent Financial Group - Independence Perfected</title>
      </Head>
      <Nav />
      <MobileNav />
      <Hero />
      <main>
        <section>
          <Testimonial />
          <BranchAnnouncement newBranches={newBranches} />
        </section>
        <section className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6 lg:my-8">
          <Stats />
        </section>
        <section className="bg-gradient-to-r from-blue-wave-400 to-blue-wave-800 text-seabreeze-500">
          <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-seabreeze-500">
                Empowering Financial Advisors with Independence and Support
              </h2>
              <p className="text-dunkel-blue sm:text-md dark:text-gray-400">
                With 20-years of experience and a focus on technology,
                innovation, expertise and independence, we can unlock long-term
                value and drive growth for your practice. we are dedicated to empowering financial advisors like you with the independence and support you deserve. As an independent firm, we provide you with the freedom to run your practice your way. We offer comprehensive resources, cutting-edge technology, and a collaborative community of like-minded professionals who are committed to your success.
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-10 h-10 text-dunkel-blue-200 bg-dune-500 rounded-full p-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-seabreeze-500">
                    Practice Development
                  </h3>
                </div>
                <p className="text-dunkel-blue dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum labore hic repudiandae consequatur quos temporibus
                  doloremque reiciendis, non iure quibusdam?
                </p>
              </div>
              <div>
                <div className="flex flex-row items-center justify-start mb-2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-10 h-10 text-dunkel-blue-200 bg-dune-500 rounded-full p-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-seabreeze-500">
                    Products
                  </h3>
                </div>
                <p className="text-dunkel-blue dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laboriosam eligendi commodi saepe inventore recusandae! Eius
                  voluptates nemo quasi corrupti reiciendis!
                </p>
              </div>
              <div>
                <div className="flex flex-row items-center justify-start mb-2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-10 h-10 text-dunkel-blue-200 bg-dune-500 rounded-full p-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>

                  <h3 className="text-xl font-bold dark:text-seabreeze-500 text-seabreeze-500">
                    Technology
                  </h3>
                </div>
                <p className="text-dunkel-blue dark:text-gray-400">
                  We partner with a wide range of service providers to help youy
                  run your business more effeciently.
                </p>
              </div>
              <div>
                <div className="flex flex-row items-center justify-start mb-2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-10 h-10 text-dunkel-blue-200 bg-dune-500 rounded-full p-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    />
                  </svg>

                  <h3 className="text-xl font-bold text-seabreeze-500">
                    Marketing Support
                  </h3>
                </div>
                <p className="text-dunkel-blue dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil explicabo hic voluptatem aliquam aliquid? Id temporibus
                  vel quisquam odio nemo.
                </p>
              </div>
              <div>
                <div className="flex flex-row items-center justify-start mb-2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-10 h-10 text-dunkel-blue-200 bg-dune-500 rounded-full p-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <h3 className="text-xl font-bold text-seabreeze-500">
                    Competitive Compensation
                  </h3>
                </div>
                <p className="text-dunkel-blue dark:text-gray-400">
                  We offer one of the most competitive payouts in the industry.
                  A great payout offering in addition to the variety of services
                  we offer make it simple to see why our advisors choose to join
                  and stay with us.
                </p>
              </div>
              <div>
                <div className="flex flex-row items-center justify-start mb-2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-10 h-10 text-dunkel-blue-200 bg-dune-500 rounded-full p-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>

                  <h3 className="text-xl font-bold text-seabreeze-500">
                    Operations
                  </h3>
                </div>
                <p className="text-dunkel-blue dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, quibusdam. Omnis ullam aspernatur suscipit ipsa
                  magni accusantium quos vel iste.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="my-8">
          <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="bg-gradient-to-r from-blue-wave-400 to-blue-wave-800 border-t-8 border-dune-500 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center flex flex-col">
                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    Join our Family Today!
                  </h2>

                  <p className="hidden text-white/90 sm:mt-4 sm:block">
                    We invite passionate financial professionals to join our thriving community. Experience support, collaboration, and belonging that sets us apart. Take your practice to new heights and make a lasting impact on clients' lives. Start your journey toward fulfillment.
                  </p>

                  <div className="mt-4 md:mt-8">
                    <a
                      href="#"
                      className="inline-block rounded bg-sunburst-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
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
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                />

                <Image
                  alt="Student"
                  src={ctaImage2}
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
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
