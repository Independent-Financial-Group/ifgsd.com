import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <footer className="bg-[#ECF1F6] dark:bg-gray-800 sm:p-6">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link passHref href="/" className="flex items-center">
              <img
                src="https://images.ctfassets.net/9lvru9ro1ti1/6SSi4gjMHZJHXicKb2wwVq/f09261d90bd05c9c8623a7f5f1bcb9d5/IFG_Logo.png"
                className="mr-3 h-8 w-8"
                alt="IFG Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-0">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-neon-orange-500 dark:text-white">
                Company
              </h2>
              <ul className="text-xs text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/about/our-story" className="hover:underline">
                    Our Story
                  </a>
                </li>
                <li className="mb-4">
                  <Link
                    href="/join/why-choose-us/our-mission-and-values"
                    className="hover:underline"
                  >
                    Mission
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-neon-orange-500 dark:text-white">
                Press & Media
              </h2>
              <ul className="text-xs text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/press-and-media/awards-and-accolades"
                    className="hover:underline"
                  >
                    Awards & Accolades
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/press-and-media/press-releases"
                    className="hover:underline"
                  >
                    Press Releases
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/press-and-media/ifg-in-the-news"
                    className="hover:underline"
                  >
                    IFG in the News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-neon-orange-500 dark:text-white">
                Join Us
              </h2>
              <ul className="text-xs text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href={"/join/the-ifg-experience"}>
                    The IFG Experience
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/join/business-solutions-models"
                    className="hover:underline"
                  >
                    Independent Business Model
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/join/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-neon-orange-500 dark:text-white">
                Legal
              </h2>
              <ul className="text-xs text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://brokercheck.finra.org/firm/summary/7717"
                    className="hover:underline"
                  >
                    Broker Check
                  </a>
                </li>
                <li className="mb-4">
                  <Link href="/reg-bi-investor" className="hover:underline">
                    Regulation Best Interest for Investors
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/disclosures" className="hover:underline">
                    Disclosures
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Independent Financial Group, LLC
            </Link>
            . All Rights Reserved. Independent Financial Group, LLC is a member
            of{" "}
            <a
              href="https://www.finra.org/"
              target="_blank"
              className="inline-block font-semibold text-neon-orange-500 transition-all hover:scale-105"
            >
              FINRA
            </a>{" "}
            /{" "}
            <a
              href="https://www.sipc.org/"
              className="inline-block font-semibold text-neon-orange-500 transition-all hover:scale-105"
              target="_blank"
            >
              SIPC.
            </a>
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="https://www.linkedin.com/company/ifgsd"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-10 w-10 fill-neon-orange-500"
                role="img"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        {router.pathname == "/" ? (
          <>
            <div className="text-xs italic leading-7 text-gray-500">
              <p id="award-reference-1">
                1. Financial Advisor Magazine, 2023, based on reported gross
                revenue.
              </p>
              <p id="award-reference-2">
                2. wealthmanagement.com, Independent Broker-Dealer Report Card,
                2020.
              </p>
              <p id="award-reference-3">
                3. San Diego Business Journal, Large Category 2023, based on
                reported revenue.
              </p>
              <p id="award-reference-4">
                4. Inc. Magazine, Inc. 500|5000 Company Awards, 2006, 2010,
                2011, 2012, 2013, 2014, 2015, 2016, 2020.
              </p>
              <p id="award-reference-56">
                5/6. Financial Planning Magazine 2022, based on reported
                revenue.
              </p>
            </div>
            <hr className="my-5" />
            <div className="text-xs italic text-gray-500">
              <p>Representatives above are from current members of IFG.</p>
            </div>
          </>
        ) : null}
        {router.pathname == "/join/why-choose-us/the-ifg-experience" ? (
          <>
            <div className="text-xs italic text-gray-500">
              <p id="homeOfficeEmployeeDisclaimer">
                1. Employee counts is as of 1/8/2024
              </p>
            </div>
          </>
        ) : null}
        {router.pathname == "/join/business-solutions-models" ? (
          <>
            <div className="text-xs italic text-gray-500">
              <p id="homeOfficeEmployeeDisclaimer">
                <p id="award-reference-1">
                  1. Financial Advisor Magazine, 2023, based on reported gross
                  revenue.
                </p>
              </p>
            </div>
          </>
        ) : null}
      </div>
    </footer>
  );
};

export default Footer;
