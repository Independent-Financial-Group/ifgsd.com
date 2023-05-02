import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import Nav from "../components/Nav/Nav";
import MobileNav from "../components/MobileNav/MobileNav";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import quotes from "../public/quotes.png";
import phoneImage from "../public/phone-picking-up-compressed.jpg"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Independent Financial Group - Independence Perfected</title>
      </Head>
      <Nav />
      <MobileNav />
      <Hero />
      <main>
        <section class="dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-blue-wave-500 dark:text-seabreeze-500">
                Fearlessly Independent
              </h2>
              <p class="text-dunkel-blue sm:text-xl dark:text-gray-400">
                With 20-years of experience and a focus on technology,
                innovation, expertise and independence, we can unlock long-term
                value and drive growth for your practice.
              </p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
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
                  <h3 class="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
                    Practice Development
                  </h3>
                </div>
                <p class="text-dunkel-blue dark:text-gray-400">
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
                  <h3 class="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
                    Products
                  </h3>
                </div>
                <p class="text-dunkel-blue dark:text-gray-400">
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

                  <h3 class="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
                    Technology
                  </h3>
                </div>
                <p class="text-dunkel-blue dark:text-gray-400">
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

                  <h3 class="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
                    Marketing Support
                  </h3>
                </div>
                <p class="text-dunkel-blue dark:text-gray-400">
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

                  <h3 class="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
                    Competitive Compensation
                  </h3>
                </div>
                <p class="text-dunkel-blue dark:text-gray-400">
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

                  <h3 class="text-xl font-bold dark:text-seabreeze-500 text-blue-wave-500">
                    Operations
                  </h3>
                </div>
                <p class="text-dunkel-blue dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, quibusdam. Omnis ullam aspernatur suscipit ipsa
                  magni accusantium quos vel iste.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-wave-0 relative">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="flex flex-row justify-center">
              <Image
                src="https://new.ifgsd.com/wp-content/uploads/2023/03/Mask-group.png"
                className="rounded-lg absolute top-36 left-1/4 z-10"
                width={400}
                height={400}
                alt="ifg logo with employees"
              />
            </div>
            <div className="sm:text-lg dark:text-gray-400 text-blue-wave-900">
              <div className="lg:absolute left-48 top-8 z-0">
                <h3 className="text-[#f8fafc] font-semibold lg:font-bold lg:text-8xl">
                  Independence,<br className="hidden lg:block" /> Perfected.
                </h3>
              </div>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-wave-500 dark:text-seabreeze-500">
                The IFG way
              </h2>
              <p className="mb-4">
                Independent Financial Group, LLC is based on three core values
                shared by Independent Financial Group’s executive team:
                integrity, balance and independence. Founders Scott Heising and
                David Fischer along with their home office team of employees are
                committed to providing excellent customer service while always
                keeping these values at the forefront of decisions as leaders.
              </p>
              <p>
                From the top down, each employee shares in this understanding
                while providing efficient and friendly service to our advisors
                according to those beliefs. Independent Financial Group is
                committed to bringing true independence to the marketplace while
                staying true to the values the founders have set in place.
              </p>
              <button className="mt-5 rounded-md bg-blue-wave-500 text-sm font-semibold text-seabreeze-500 shadow-sm hover:bg-red-fire focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-3.5 py-2.5">
                <Link className="px-3.5 py-2.5" href="/about/our-story">
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </section>
        <section class="py-24 sm:py-32">
          <div class="relative mx-auto w-[90%] lg:max-w-7xl px-6 lg:px-8 bg-seabreeze-100 p-8 rounded-md drop-shadow-lg">
            <h2 className=" absolute bg-sunburst-500 w-[265px] left-1/2 right-1/2 -translate-x-1/2 -top-8 p-2 rounded mb-8 text-4xl tracking-tight font-extrabold text-seabreeze-500 text-center drop-shadow-lg">
              Rankings
            </h2>
            <div className="flex flex-col gap-y-5">
              <dl class="grid grid-cols-1 gap-y-16 text-center lg:grid-cols-3 py-3">
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">Financial Advisors</dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    600+
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">
                    Assets Under Management
                  </dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    $37B
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">Highest % of Women Advisors*</dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    #4
                  </dd>
                </div>
              </dl>
              <dl class="grid grid-cols-1 gap-y-16 text-center lg:grid-cols-3 py-3">
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">
                    Largest Independent Broker-Dealer*
                  </dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    #17
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">
                    Largest Privately Held Company in San Diego*
                  </dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    #7
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">Overall Experience Satisfaction*</dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    #2
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <section className="bg-blue-wave-0 relative">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mb-52">
              <h2 className="tracking-tight font-extrabold text-sunburst-100 dark:text-seabreeze-500 text-center text-lg">
                Testimonials
              </h2>
              <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-wave-500 dark:text-seabreeze-500 text-center">
                What our advisors say about us
              </h3>
              <p className="text-center mx-auto w-1/2">
                At IFG, we will always believe you are a name, not a number.
                We aim to provide our representatives with investment opportunity, guidance, and planning.
              </p>
            </div>
            <div className="lg:grid lg:grid-cols-3 gap-4 absolute -bottom-1/2 max-w-screen-xl mx-auto">
              <div className="drop-shadow-lg p-8 rounded-lg bg-seabreeze-500 flex flex-col">
                <Image
                  src={quotes}
                  width={50}
                  height={50}
                  className="mx-auto py-4"
                />
                <p className="text-blue-wave-900 text-sm">
                  I have been with four broker-dealers over my 36 year career,
                  including my own. I have now been with IFG for 14 years and
                  could not be more pleased with the character and quality of
                  the firm. They are committed to excellence and integrity,
                  focusing on the important values in our industry rather than
                  their profits. I am delighted to be associated with such a
                  first-rate, high-class firm!
                </p>
                <hr className="w-1/4 my-4 mx-auto border-sunburst-500 border-2" />
                <div className="text-center flex flex-row justify-end items-end mt-auto">
                  <div className="mr-2">
                    <h3 className="text-blue-wave-500 font-bold text-right text-sm">
                      Arthur Molloy
                    </h3>
                    <p className="text-blue-wave-900 font-semibold text-right text-xs">
                      California
                    </p>
                  </div>
                  <Image
                    src="https://ifgsd.com/wp-content/uploads/2013/05/Art-Molloy.png"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="drop-shadow-lg p-8 rounded-lg bg-seabreeze-500 flex flex-col">
                <Image
                  src={quotes}
                  width={50}
                  height={50}
                  className="mx-auto py-4"
                />
                <p className="text-blue-wave-900 text-sm">
                  Since we joined the IFG family, I am consistently reminded of how cooperative and helpful IFG is of our business. Those reminders are not slogans and mission statements included at the tops of letters or the bottoms of emails. They are a real help on important matters when and where we need them. Our business supports our clients, and IFG supports our business. We are very happy to have a partner so clearly interested in helping us all grow together.
                </p>
                <hr className="w-1/4 my-4 mx-auto border-sunburst-500 border-2" />
                <div className="text-center flex flex-row justify-end items-end mt-auto">
                  <div className="mr-2">
                    <h3 className="text-blue-wave-500 font-bold text-right text-sm">
                      Anna Luke
                    </h3>
                    <p className="text-blue-wave-900 font-semibold text-right text-xs">
                      California
                    </p>
                  </div>
                  <Image
                    src="https://ifgsd.com/wp-content/uploads/2018/04/Anna-Luke.png"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="drop-shadow-lg p-8 rounded-lg bg-seabreeze-500 flex flex-col">
                <Image
                  src={quotes}
                  width={50}
                  height={50}
                  className="mx-auto py-4"
                />
                <p className="text-blue-wave-900 text-sm">
						Hard to believe it’s been six years since we have joined the IFG family. Top rate professional and caring service team always ready to respond to needs. Conferences are top notch. Family oriented with great educational content. Consultants, management specialists, product specialists, asset management and insurance resources. A complete suite. Couldn’t ask for more in a broker dealer. Great family environment. Hats off to the management team and principals Scott, Joe and Dave.
                </p>
                <hr className="w-1/4 my-4 mx-auto border-sunburst-500 border-2" />
                <div className="text-center flex flex-row justify-end items-end">
                  <div className="mr-2">
                    <h3 className="text-blue-wave-500 font-bold text-right text-sm">
                      Larry Steckler
                    </h3>
                    <p className="text-blue-wave-900 font-semibold text-right text-xs">
                      California
                    </p>
                  </div>
                  <Image
                    src="https://ifgsd.com/wp-content/uploads/2013/05/Art-Molloy.png"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-56">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="overflow-hidden py-24 sm:py-32">
              <div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
                  <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                      <h2 className="text-base font-semibold leading-7 text-sunburst-500">Offerings</h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-blue-wave-500 sm:text-4xl">Valuable resources a phone call away</p>
                      <p className="mt-6 text-lg leading-8 text-blue-wave-900">
                        Independence doesn't mean you're on your own. We unlock a powerful set of resources to support your practice as you need.
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-blue-wave-900 lg:max-w-none">
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-blue-wave-500">
                            <CloudArrowUpIcon className="absolute left-1 top-1 h-5 w-5 text-sunburst-500" aria-hidden="true" />
                            Marketing Support.
                          </dt>{' '}
                          <dd className="inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eaque recusandae dolor magnam cum odit dolorem fuga possimus beatae sed?</dd>
                        </div>
                      </dl>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <CloudArrowUpIcon className="absolute left-1 top-1 h-5 w-5 text-sunburst-500" aria-hidden="true" />
                            Products.
                          </dt>{' '}
                          <dd className="inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eaque recusandae dolor magnam cum odit dolorem fuga possimus beatae sed?</dd>
                        </div>
                      </dl>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <CloudArrowUpIcon className="absolute left-1 top-1 h-5 w-5 text-sunburst-500" aria-hidden="true" />
                            Technology.
                          </dt>{' '}
                          <dd className="inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eaque recusandae dolor magnam cum odit dolorem fuga possimus beatae sed?</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <Image
                    src={phoneImage}
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
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
