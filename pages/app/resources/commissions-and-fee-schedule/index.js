import React from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";

import {
  DocumentArrowDownIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const Page = () => {
  return (
    <>
      <Head>
        <title>Commissions & Fees Schedule | Resources</title>
      </Head>
      <PageHeader
        pageName={"Commissions & Fees Schedule"}
        breadCrumb={"Resources"}
      />
      <Layout>
        <ContentContainer>
          <section className="col-span-full rounded bg-white px-4 py-2 shadow">
            <img
              src="https://images.ctfassets.net/9lvru9ro1ti1/6i8dPbpeIXQTVzJhtmgR9U/8358866754768e15881a0f0cff62e621/pay_day_schedule_for_commissions_page-compressed.webp"
              alt="A calendar view with a pin on a selected day marking the commissions and fees schedule"
              className="mb-5 h-48 w-full rounded object-cover"
            />
            <p className="mb-5 text-sm">
              Getting paid correctly and on time is critical to your business
              and we recognize the urgency in getting back to you when you need
              us. See below for answers to common questions and our commissions
              calendars.
            </p>
            <div className="lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="space-y-6">
                <h3 className="text-center text-xl font-bold text-ifg-turqoise-500">
                  Commissions Calendar
                </h3>
                <img src="https://images.ctfassets.net/9lvru9ro1ti1/7w1iIb9GMjqQuGdu8FPqP7/99b882b0d6d330e0bd772dbbf24f860c/Commissions_calendar_thumbnail.jpg" />
                <Link
                  href="https://assets.ctfassets.net/9lvru9ro1ti1/aIWhDkpV1gcTK6Akx3AFo/7d33a37a4915ae76ef7136ae1f0e28d2/Commissions_Calendar_2024.pdf"
                  className="mx-auto flex w-fit items-center justify-center gap-1 rounded bg-neon-orange-500 px-1 py-2 font-bold text-white shadow"
                  target="_blank"
                >
                  <DocumentArrowDownIcon className="h-6 w-6" />
                  <span> Download 2024 Calendar</span>
                </Link>
              </div>
              <div className="space-y-6">
                <h3 className="text-center text-xl font-bold text-ifg-turqoise-500">
                  Additional Resources
                </h3>
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="https://assets.ctfassets.net/9lvru9ro1ti1/3nfbZgdbHdToHJbz1qMWnO/a20fcf6477b56f79e7079e7e6572ca6a/Commissions-User-Guide.pdf"
                      className="mx-auto flex items-center justify-center gap-1 rounded bg-neon-orange-500 px-1 py-2 font-bold text-white shadow"
                      target="_blank"
                    >
                      <DocumentArrowDownIcon className="h-6 w-6" />
                      <span>Commissions User Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://assets.ctfassets.net/9lvru9ro1ti1/5Mg35qhRPfiP7HuUjwtXTs/9b4678507f72ad10f735ef31ec3fec75/Common-Commission-Holds-Explanations.pdf"
                      className="mx-auto flex items-center justify-center gap-1 rounded bg-neon-orange-500 px-1 py-2 font-bold text-white shadow"
                      target="_blank"
                    >
                      <DocumentArrowDownIcon className="h-6 w-6" />
                      <span>Common Commission Holds & Explanations</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://assets.ctfassets.net/9lvru9ro1ti1/69h4ls09mfa3XfSTv7zfqd/122694fe913c4810a37cb0cacf75e315/Commissions-FAQs.pdf"
                      className="mx-auto flex items-center justify-center gap-1 rounded bg-neon-orange-500 px-1 py-2 font-bold text-white shadow"
                      target="_blank"
                    >
                      <DocumentArrowDownIcon className="h-6 w-6" />
                      <span>Frequently Asked Questions </span>
                    </Link>
                  </li>
                </ul>
                <div>
                  <h3 className="mb-5 text-xl font-bold text-ifg-turqoise-500">
                    Contact Us
                  </h3>
                  <p className="mb-2 font-semibold italic">
                    Commissions Department
                  </p>
                  <div className="flex gap-5 divide-x text-sm">
                    <p className="flex items-center gap-2">
                      <PhoneIcon className="h-6 w-6 text-neon-orange-500" />
                      <span>(800) 269-1903</span>
                    </p>
                    <p className="flex items-center gap-2 pl-5">
                      <EnvelopeIcon className="h-6 w-6 text-neon-orange-500" />
                      <span>commissions@ifgsd.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default Page;
