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
import Footer from "../components/Footer/Footer";

import quotes from "../public/quotes.png";
import familySectionImage from "../public/family-section-image-compressed.jpg";

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
        <Testimonial />
        <BranchAnnouncement newBranches={newBranches} />
        <section className="dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-wave-500 dark:text-seabreeze-500">
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
                  <h3 className="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
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
                  <h3 className="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
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

                  <h3 className="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
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

                  <h3 className="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
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

                  <h3 className="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
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

                  <h3 className="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
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
        <section className="bg-blue-wave-0 relative">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="flex flex-row content-center">
              <Image
                src="https://new.ifgsd.com/wp-content/uploads/2023/03/Mask-group.png"
                width={400}
                height={400}
                alt="ifg logo with employees"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="sm:text-lg dark:text-gray-400 text-blue-wave-900"
            >
              <h3 className="text-[#f8fafc] xl:text-sunburst-300 font-semibold lg:font-bold 2xl:text-sm">
                Our Mission
              </h3>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-wave-500 dark:text-seabreeze-500">
                Integrity, Balance, and Independence
              </h2>
              <p className="mb-4">
                Independent Financial Group, LLC prioritizes integrity, balance, and independence in everything we do. Our founders, Scott Heising, and David Fischer, along with our dedicated team, are committed to providing excellent customer service while upholding these core values. From the moment you join our firm, you'll experience a culture that puts integrity at the forefront of decision-making and values a balanced approach to business. We believe in true independence, empowering our advisors to serve their client's best interests without any conflicts of interest. Our home office team supports our advisors with efficient and friendly service, ensuring they have the tools and resources they need to succeed. At Independent Financial Group, we stay true to the values set by our founders and strive to bring genuine independence to the marketplace. Join Independent Financial Group today and experience a firm that values integrity, balance, and independence, providing you with the platform to thrive as a financial advisor. Together, we can make a positive impact on the lives of our clients while staying true to our core values.
              </p>
              <button className="mt-5 rounded-md bg-blue-wave-500 text-sm font-semibold text-seabreeze-500 shadow-sm hover:bg-red-fire focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-3.5 py-2.5">
                <Link className="px-3.5 py-2.5" href="/about/our-story">
                  Learn More
                </Link>
              </button>
            </motion.div>
          </div>
        </section>
        <section className="py-24 sm:py-32">
          <div className="relative mx-auto w-[90%] lg:max-w-7xl px-6 lg:px-8 bg-seabreeze-100 p-8 rounded-md drop-shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: -32 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <h2 className=" absolute bg-blue-wave-500 w-[265px] left-1/2 right-1/2 -translate-x-1/2 -top-8 p-2 rounded mb-8 text-4xl tracking-tight font-extrabold text-seabreeze-500 text-center drop-shadow-lg">
                Rankings
              </h2>
            </motion.div>
            <div className="flex flex-col gap-y-5">
              <dl className="grid grid-cols-1 gap-y-16 text-center lg:grid-cols-3 py-3">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    Financial Advisors
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-sunburst-500 sm:text-5xl">
                    600+
                  </dd>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    Assets Under Management
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-sunburst-500 sm:text-5xl">
                    $37B
                  </dd>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    Highest % of Women Advisors*
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-sunburst-500 sm:text-5xl">
                    #4
                  </dd>
                </motion.div>
              </dl>
              <dl className="grid grid-cols-1 gap-y-16 text-center lg:grid-cols-3 py-3">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    Largest Independent Broker-Dealer*
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-sunburst-500 sm:text-5xl">
                    #17
                  </dd>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    Largest Privately Held Company in San Diego*
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-sunburst-500 sm:text-5xl">
                    #7
                  </dd>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    Overall Experience Satisfaction*
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-sunburst-500 sm:text-5xl">
                    #2
                  </dd>
                </motion.div>
              </dl>
            </div>
          </div>
        </section>
        <section className="xl:mt-56">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="overflow-hidden xl:py-24 sm:py-32">
              <div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="lg:pr-8 lg:pt-4"
                  >
                    <div className="lg:max-w-lg">
                      <p className="mt-2 text-3xl font-bold tracking-tight text-blue-wave-500 sm:text-4xl">
                        Where Family and Community Thrive!
                      </p>
                      <p className="mt-6 text-lg leading-8 text-blue-wave-900">
                        We understand that being a financial advisor is more than just a career – it's about building relationships, creating lasting impact, and being part of a supportive community. We foster a sense of family and community among our financial advisors, providing an environment where you can excel personally and professionally.
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-blue-wave-900 lg:max-w-none">
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-blue-wave-500">
                            <CloudArrowUpIcon
                              className="absolute left-1 top-1 h-5 w-5 text-sunburst-500"
                              aria-hidden="true"
                            />
                            Collaborative Environment.
                          </dt>{" "}
                          <dd className="inline">
                            We believe in the power of collaboration and knowledge-sharing. When you join, you become part of a close-knit community of experienced financial advisors who support one another. We encourage teamwork and mentorship, empowering you to reach new heights in your practice.
                          </dd>
                        </div>
                      </dl>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-blue-wave-500">
                            <CloudArrowUpIcon
                              className="absolute left-1 top-1 h-5 w-5 text-sunburst-500"
                              aria-hidden="true"
                            />
                            Client-Centric Approach.
                          </dt>{" "}
                          <dd className="inline">
                            We prioritize building long-term relationships with clients based on trust and transparency. With us, you’ll have the freedom to provide personalized, holistic solutions tailored to your client’s unique financial goals and aspirations. Our emphasis on client satisfaction creates a fulfilling and rewarding experience for both you and your clients.
                          </dd>
                        </div>
                      </dl>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-blue-wave-500">
                            <CloudArrowUpIcon
                              className="absolute left-1 top-1 h-5 w-5 text-sunburst-500"
                              aria-hidden="true"
                            />
                            Continuing Education and Professional Development.
                          </dt>{" "}
                          <dd className="inline">
                            We invest in your growth by offering a comprehensive range of educational resources and training programs. Our goal is to equip you with the latest industry insights, cutting-edge strategies, and regulatory knowledge. Stay ahead of the curve and enhance your expertise while contributing to the success of your client.
                          </dd>
                        </div>
                      </dl>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-blue-wave-500">
                            <CloudArrowUpIcon
                              className="absolute left-1 top-1 h-5 w-5 text-sunburst-500"
                              aria-hidden="true"
                            />
                            Technology and Innovation:
                          </dt>{" "}
                          <dd className="inline">
                            Embracing technological advancements, we provide you with cutting-edge tools and resources to streamline your practice. Our intuitive online platform simplifies processes, enhances client interactions, and enables you to stay connected and productive wherever you are.
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </motion.div>
                  <Image
                    src={familySectionImage}
                    alt="Product screenshot"
                    className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    width={2432}
                    height={1442}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-wave-0">
          <div className="mx-auto max-w-screen-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="drop-shadow-xl rounded-xl px-2 py-20"
              style={{}}
            >
              <div className="mx-auto max-w-screen-sm text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-blue-wave-500 dark:text-white">
                  Join our Family Today!
                </h2>
                <p className="mb-6 text-dunkel-blue-500 dark:text-gray-400 md:text-lg">
                  We invite passionate financial advisors to join our thriving community. Experience support, collaboration, and belonging that sets us apart. Take your practice to new heights and make a lasting impact on clients' lives. Start your journey toward fulfillment.
                </p>
                <Link
                  href="#"
                  className="text-seabreeze-500 bg-blue-wave-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  Schedule a Visit
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
