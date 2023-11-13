import React from "react";
// IMPORT NEXTJS
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

// IMPORT COMPONENTS
import PublicLayout from "../components/PublicLayout/PublicLayout";
import PageHeader from "../components/PageHeader/PageHeader";
import Container from "../components/Container/Container";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Button from "../components/Button/Button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// IMPORT ASSETS
import highlight from "../public/_global-graphics/highlight.png";

// CONTENTFUL
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const brokerageAndAdvisoryFaqs = await client.getEntries({
    content_type: "faqs",
    "metadata.tags.sys.id[in]": "regiBi,brokerageAndAdvisory",
    order: "fields.label",
  });
  const feesAndCosts = await client.getEntries({
    content_type: "faqs",
    "metadata.tags.sys.id[in]": "feesAndCosts",
    order: "fields.label",
  });
  const compensationAndConflicts = await client.getEntries({
    content_type: "faqs",
    "metadata.tags.sys.id[in]": "compensationAndConflictsOfInterest",
    order: "fields.label",
  });
  const fdicSipcAndBrokerCheck = await client.getEntries({
    content_type: "faqs",
    "metadata.tags.sys.id[in]": "fdicSipcAndBrokercheck",
    order: "fields.label",
  });
  const investorDefinitions = await client.getEntries({
    content_type: "faqs",
    "metadata.tags.sys.id[in]": "investorDefinitions",
    order: "sys.createdAt",
  });

  return {
    props: {
      brokerageAndAdvisoryFaqs: [...brokerageAndAdvisoryFaqs.items],
      feesAndCosts: [...feesAndCosts.items],
      compensationAndConflicts: [...compensationAndConflicts.items],
      fdicSipcAndBrokerCheck: [...fdicSipcAndBrokerCheck.items],
      investorDefinitions: [...investorDefinitions.items],
    },
    revalidate: 10,
  };
}

const regBiInvestor = ({
  brokerageAndAdvisoryFaqs,
  feesAndCosts,
  compensationAndConflicts,
  fdicSipcAndBrokerCheck,
  investorDefinitions,
}) => {
  const faqs = [
    {
      question: "Brokerage Services",
      answer:
        "As a broker-dealer, we facilitate the execution of securities transactions on your behalf. In addition to executing your orders, IFG provides various services through our Registered Representatives including investment education, research and recommendations on whether to buy or sell securities. There are no additional charges for these services since they are considered incidental to the brokerage services we provide. We are held to the legal standards under applicable federal and state securities laws, and the rules of our self-regulatory organization, FINRA, IFG Brokerage Services for Reg BI Among other things, these regulations require broker-dealers to: Execute your trades with diligence, competence, and seek to provide best execution in light of prevailing market conditions; Have reasonable grounds for believing that any security that we specifically present to you is in your best interest given your investment objectives, risk tolerance, financial and tax status and other financial information you have disclosed to us; and Treat you in a manner characterized by principles of fair dealing and high standards of honesty and integrity. As a broker-dealer, your registered representative does not have the discretion to buy or sell securities for you without your approval. This means that you make the decision to buy or sell securities before trades are placed. If your registered representative recommends that you buy or sell a security, they must have a reasonable basis to believing their recommendation is in your best interest.",
    },
    // More questions...
  ];

  return (
    <>
      <Head>
        <title>Reg BI for Investors | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <header className="relative h-[calc(35vh-60px)] rounded-b-[20px] bg-neon-orange-500">
          <Container>
            <div className="absolute top-1/2 -translate-y-1/2 ">
              <h1 className="text-5xl font-bold text-seabreeze-500">
                Regulation Best Interest for Investors
              </h1>
              <p className="my-5 max-w-prose text-base text-seabreeze-500">
                When we provide you with a recommendation as your broker-dealer
                or act as your Investment Advisor, we have to act in your best
                interest and not put our interest ahead of yours. At the same
                time, the way we make money creates some conflict with your
                interest. You should understand and ask us about these conflicts
                because they can affect the recommendation and Investment Advice
                we provide you.
              </p>
              <p className="max-w-prose text-seabreeze-500">
                This portion of our website provides potential and existing
                clients of our Financial Service Representatives information and
                important disclosures about Independent Financial Group. It also
                provides tools and resources to educate potential and existing
                clients about general topics related to investing with our
                Representatives.
              </p>
            </div>
          </Container>
        </header>
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
            <h2 className="max-w-prose text-3xl font-bold text-hazard-blue-500">
              Understanding the Difference Between Brokerage and Investment
              Advisory Services
            </h2>
            <p className="my-5 text-xl">
              <strong>Independent Financial Group, LLC</strong> (IFG) is
              registered both as a broker-dealer with FINRA and as an investment
              advisor with the SEC. There are several differences between
              brokerage and advisory services, and it is important for you to
              understand that our brokerage and investment advisory services are
              separate and distinct. Depending on your needs and your investment
              objectives, you may have brokerage accounts, advisory accounts or
              both. We want you to be informed of the differences between these
              types of services so you can choose the services and accounts that
              are right for you.
            </p>
            <div className="flex items-center gap-5">
              <p className="text-xl font-bold text-neon-orange-500">
                Diclosures at a glance:
              </p>
              <ul className="flex gap-5 font-bold text-blue-wave-500">
                <li>
                  <a href="#" className="hover:underline">
                    Form CRS (PDF)
                  </a>
                </li>
                <li className="border-x-2 border-gray-300 px-2">
                  <a href="#" className="hover:underline">
                    Form CRS Supplement (PDF)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    ADV Part 2A (PDF)
                  </a>
                </li>
              </ul>
            </div>
            <div className="divide-y divide-gray-900/10">
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {brokerageAndAdvisoryFaqs.map((faq) => (
                  <Disclosure as="div" key={faq.fields.label} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {faq.fields.label}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">
                            {documentToReactComponents(faq.fields.text)}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="divide-y divide-gray-900/10">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-hazard-blue-500">
                Fees & Costs
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {feesAndCosts.map((faq) => (
                  <Disclosure as="div" key={faq.fields.label} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {faq.fields.label}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">
                            {documentToReactComponents(faq.fields.text)}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="divide-y divide-gray-900/10">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-hazard-blue-500">
                Investment Choices, how IFG is compensated, and conflicts of
                interest.
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {compensationAndConflicts.map((faq) => (
                  <Disclosure as="div" key={faq.fields.label} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {faq.fields.label}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">
                            {documentToReactComponents(faq.fields.text)}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="divide-y divide-gray-900/10">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-hazard-blue-500">
                FDIC, SIPC, and Brokercheck
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {fdicSipcAndBrokerCheck.map((faq) => (
                  <Disclosure as="div" key={faq.fields.label} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {faq.fields.label}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">
                            {documentToReactComponents(faq.fields.text)}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="divide-y divide-gray-900/10">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-hazard-blue-500">
                Investor Definitions and Disclosures
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {investorDefinitions.map((faq) => (
                  <Disclosure as="div" key={faq.fields.label} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {faq.fields.label}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">
                            {documentToReactComponents(faq.fields.text)}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <div className="rounded-xl bg-gray-100 px-4 py-8">
              <h2 className="mb-5 text-2xl font-bold leading-10 tracking-tight text-hazard-blue-500">
                Helpful Links for Investors
              </h2>
              <ul className="flex flex-col gap-5">
                <li>
                  <a
                    href="https://www.finra.org/investors/protect-your-money/ask-and-check"
                    className="flex items-center gap-2 font-bold text-blue-wave-500 hover:cursor-pointer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    Ask and Check
                  </a>
                </li>
                <li>
                  <a
                    href="https://tools.finra.org/fund_analyzer/"
                    className="flex items-center gap-2 font-bold text-blue-wave-500 hover:cursor-pointer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    Mutual Fund Analyzer
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ssa.gov/benefits/retirement/estimator.html"
                    className="flex items-center gap-2 font-bold text-blue-wave-500 hover:cursor-pointer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    Social Security Estimator
                  </a>
                </li>
                <li>
                  <a
                    href="https://tools.finra.org/college_savings/"
                    className="flex items-center gap-2 font-bold text-blue-wave-500 hover:cursor-pointer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    529 Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.investor.gov/financial-tools-calculators/calculators/required-minimum-distribution-calculator"
                    className="flex items-center gap-2 font-bold text-blue-wave-500 hover:cursor-pointer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    Required Minimum Distribution (RMD) Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.investor.gov/financial-tools-calculators/calculators/savings-goal-calculator"
                    className="flex items-center gap-2 font-bold text-blue-wave-500 hover:cursor-pointer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    Savings Goal Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator"
                    className="flex items-center gap-2 font-bold text-blue-wave-500 hover:cursor-pointer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    Compound Interest Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.investor.gov/sites/investorgov/files/2019-03/OIEA_Financial_Capability%20Checklist.pdf"
                    className="flex items-center gap-2 font-bold text-blue-wave-500 hover:cursor-pointer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    Investor Checklist
                  </a>
                </li>
                <li>
                  <a
                    href=" https://www.finra.org/investors/alerts/ira-rollover-10-tips-making-sound-decision"
                    className="flex items-center gap-2 font-bold text-blue-wave-500 hover:cursor-pointer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    The IRA Rollover: 10 Tips to Making a Sound Decision
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default regBiInvestor;
