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

// IMPORT HEADLESS UI COMPONENTS
import { Disclosure, Transition } from "@headlessui/react";
import {
  ChevronUpIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";

export const getServerSideProps = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Basic ${process.env.NEXT_PUBLIC_BAMBOOHR_KEY_MERCEDES}`,
    },
  };

  const res = await fetch(
    "https://api.bamboohr.com/api/gateway.php/ifgsd/v1/applicant_tracking/jobs?statusGroups=Open&sortBy=department",
    options,
  );
  const data = await res.json();

  return { props: { data } };
};

const index = ({ data }) => {
  const jobsGroupedByDepartment =
    data &&
    data.reduce((acc, currVal) => {
      let groupKey = currVal.department.label;

      if (!acc[groupKey]) {
        acc[groupKey] = { departmentLabel: groupKey, data: [] };
      }

      acc[groupKey].data.push(currVal);

      return acc;
    }, {});

  const options = { year: "numeric", month: "long", day: "numeric" };

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
        <section className="my-10 lg:my-32 ">
          <Container>
            <Breadcrumb />
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
                <ul className="flex flex-col justify-center divide-y-2 divide-neon-orange-500 text-xl [&>li]:py-5 [&_li>img]:w-6">
                  <li className="flex items-center gap-2">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Company Paid Medical, Dental, and Vision.
                    </p>
                  </li>
                  <li className="flex items-center gap-2 ">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Paid time off (Including all stock market holidays).
                    </p>
                  </li>
                  <li className="flex items-center gap-2 ">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      401k Matching Program.
                    </p>
                  </li>
                  <li className="flex items-center gap-2 ">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Professional Development Reimbursement Program.
                    </p>
                  </li>
                  <li className="flex items-center gap-2 ">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Market-level Compensation Based on Experience.
                    </p>
                  </li>
                  <li className="flex items-center gap-2 ">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Employee Events.
                    </p>
                  </li>
                  <li className="flex items-center gap-2 ">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      On-site Gym.
                    </p>
                  </li>
                  <li className="flex items-center gap-2 ">
                    <Image src={checkmarkOrange} alt="orange checkmark" />
                    <p className="font-semibold text-hazard-blue-500">
                      Employee Tenure Recognition.
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
        <section className="relative my-10 lg:my-32">
          <Container>
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="mb-10">
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
                {data && (
                  <>
                    <h3 className="mt-6 text-2xl font-semibold text-neon-orange-500">
                      Browse Openings by Department
                    </h3>
                    <ul className="my-3 space-y-6 rounded-lg bg-white px-4 py-2 shadow">
                      {Object.keys(jobsGroupedByDepartment).map((objectKey) => {
                        return (
                          <li key={objectKey}>
                            <h4 className="font-bold text-hazard-blue-300">
                              {
                                jobsGroupedByDepartment[objectKey]
                                  .departmentLabel
                              }
                            </h4>
                            <ol>
                              {jobsGroupedByDepartment[objectKey].data.map(
                                (posting) => (
                                  <Disclosure as="li" key={posting.id}>
                                    {({ open }) => (
                                      <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-hazard-blue-300 px-4 py-2 font-bold text-white">
                                          <span>{posting.title.label}</span>
                                          <ChevronUpIcon
                                            className={`${
                                              open ? "rotate-180 transform" : ""
                                            } h-5 w-5 `}
                                          />
                                        </Disclosure.Button>
                                        <Transition
                                          enter="transition duration-100 ease-out"
                                          enterFrom="transform scale-95 opacity-0"
                                          enterTo="transform scale-100 opacity-100"
                                          leave="transition duration-75 ease-out"
                                          leaveFrom="transform scale-100 opacity-100"
                                          leaveTo="transform scale-95 opacity-0"
                                        >
                                          <Disclosure.Panel className="px-4 py-2">
                                            <div>
                                              <div className="flex justify-between">
                                                <div>
                                                  <p className="flex items-center gap-2">
                                                    <CalendarIcon className="h-5 w-5 text-neon-orange-500" />
                                                    {new Date(
                                                      posting.postedDate,
                                                    ).toLocaleString(
                                                      "en-US",
                                                      options,
                                                    )}
                                                  </p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                  <MapPinIcon className="h-5 w-5 text-neon-orange-500" />
                                                  <span>
                                                    {posting.location.label}
                                                  </span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                  <p>
                                                    <span className="font-bold text-neon-orange-500">
                                                      {
                                                        posting.newApplicantsCount
                                                      }
                                                    </span>{" "}
                                                    Applicants
                                                  </p>
                                                </div>
                                              </div>
                                              <div className="mt-6">
                                                <a
                                                  href={posting.postingUrl}
                                                  target="_blank"
                                                  className="block rounded bg-neon-orange-500 px-4 py-2 text-center font-bold text-white"
                                                >
                                                  Apply
                                                </a>
                                              </div>
                                            </div>
                                          </Disclosure.Panel>
                                        </Transition>
                                      </>
                                    )}
                                  </Disclosure>
                                ),
                              )}
                            </ol>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}

                {!data && (
                  <div className="mt-6 flex min-h-40 items-center justify-center rounded-lg bg-white px-4 py-2 shadow">
                    <p className="text-xl font-bold text-gray-500">
                      No Current Open Positions
                    </p>
                  </div>
                )}
              </div>
              <Image
                src={section1Image}
                alt="Employees and Founders at different IFG events"
                className="sticky top-11 self-baseline"
              />
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default index;
