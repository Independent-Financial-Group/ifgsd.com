import React from "react";

// NEXT
import Head from "next/head";
import Link from "next/link";
// COMPONENTS
import Layout from "components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import OverviewVideo from "components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import DepartmentAnnouncements from "components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import TeamDirectory from "components/App/InternalPages/Overview/TeamDirectory/TeamDirectory";
import ContentLibrary from "components/App/InternalPages/Overview/ContentLibrary/ContentLibrary";
// CONTENTFUL
import * as contentful from "utils/contentful";

//APOLLO IMPORTS FOR GQL
import apolloClient from "utils/apollo";
import { gql } from "@apollo/client";

// ICONS
import { ChartBarIcon } from "@heroicons/react/24/outline";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  return {
    props: {
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const overview = ({ preview }) => {
  return (
    <>
      <Head>
        <title>Practice Development | Overview</title>
      </Head>
      <PageHeader breadCrumb="Practice Development" pageName="Overview" />
      <Layout preview={preview}>
        <ContentContainer>
          <DepartmentAnnouncements data={[]} name="Practice Development" />
          <section className="col-span-full">
            <h3></h3>
          </section>
          <section className="col-span-full">
            <div className="[&_p]: text-sm leading-7 lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-hazard-blue-500">
                  Your Business, Your Way
                </h3>
                <p>
                  Whether you are interested in growing your practice, creating
                  greater efficiences, or preparing your business for
                  transition, IFG Practice Development has the right blend of
                  resources and expertise to help you bring your vision to
                  fruition.
                </p>
                <p>
                  Changes in tax law, regulatory practices, and technology have
                  made running a financial advisory firm increasingly difficult.
                  The breadth and complexity of financial products eveolve
                  regularly. The need for specialized client advice grows by the
                  day. Managing your business in this envrionment requires an
                  assortment of tools, resources, and expertise that go beyond
                  business as usual.
                </p>
                <p>
                  We understand that no two financial advisory practices are the
                  same. Accordingly, we've built a colletion of practice
                  development resources that can be utilized by all practice
                  types - from the solo practicioner to the large ensemble
                  practice, from the niche practice to the broad-based community
                  practice, those that are ultra-techy to those that need a
                  hands-on approach, and everything in between.
                </p>
              </div>
              <div>
                <img src="https://images.ctfassets.net/9lvru9ro1ti1/sBcyZfYE3HPYlNcM32DXE/089578bd16f50600f909ff25a9da7b89/practice_management_image_1-compressed.webp" />
                <ul className="mt-5 grid grid-cols-2 gap-5 [&_li>img]:w-10 [&_li>p]:text-sm [&_li>p]:font-semibold [&_li>p]:text-ifg-turqoise-600 [&_li]:flex [&_li]:items-center [&_li]:space-x-4 [&_li]:rounded [&_li]:bg-ifg-turqoise-200 [&_li]:px-2 [&_li]:py-4 [&_li]:shadow last:[&_li]:col-span-full">
                  <li>
                    <img src="https://images.ctfassets.net/9lvru9ro1ti1/8pN4YoVuoJ14kioAR1ZkN/87a469d6ec2930ed766e4fe216c18d39/practice_management_icon_1.png" />
                    <p>Robust Practice Management Resources</p>
                  </li>
                  <li>
                    <img src="https://images.ctfassets.net/9lvru9ro1ti1/2JhEMRB8ZAHrF2QZLFJCnE/6cef3a5864f36b4b7aa089228a6b95b0/practice_management_icon_2.png" />
                    <p>Flexible Coaching Programs Tailored to Your Practice</p>
                  </li>
                  <li>
                    <img src="https://images.ctfassets.net/9lvru9ro1ti1/2NmW79cDlNldfutaKdvgAK/ef040245da2db247c99fe4327019ca26/practice_management_icon_3.png" />
                    <p>Engaging Professional Development Opportunities</p>
                  </li>
                  <li>
                    <img src="https://images.ctfassets.net/9lvru9ro1ti1/qVYRyIu9IUvajHvc2O3CY/e69a4ff9ce34f692887997b69afdaaf6/practice_management_icon_5.png" />
                    <p>Dedicated Practice Management Conference</p>
                  </li>
                  <li>
                    <img src="https://images.ctfassets.net/9lvru9ro1ti1/ZmyY55BbyDvP9WqDgJaUF/326a92e606bfb916cfa9b0619b2c6a28/practice_management_icon_4.png" />
                    <p>Strategic Succession Planning and Acquisition Support</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="bg- col-span-full my-32">
            <h3 className="text-center text-3xl font-bold text-neon-orange-500">
              Engaging Professional Development
            </h3>
            <p className="mx-auto mt-2 max-w-prose text-center">
              Financial Services, like other industries, is evolving rapidly.
              IFG provides opportunities for professional development such as
              discounted coursework, exams, continuing education, and
              conferences to enhance your credentials and knowledge base.
            </p>
            <div className="mt-5">
              <ul className="lg:grid lg:grid-cols-3 lg:gap-5">
                <li className="rounded-b bg-white shadow">
                  <div className="relative">
                    <img
                      src="https://static.wixstatic.com/media/29fb0e_40b6534defe446778d75731fe8363e3a~mv2.png/v1/fill/w_640,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/29fb0e_40b6534defe446778d75731fe8363e3a~mv2.png"
                      className="h-[300px] object-cover"
                    />
                  </div>
                  <div className="space-y-1 px-2 py-4">
                    <h4 className="text-2xl text-ifg-turqoise-500">
                      Certified Financial Planner (CFP®)
                    </h4>
                    <img />
                    <p className="text-sm leading-6">
                      In order to obtain the Certified Financial Planner (CFP
                      <sup>®</sup>) designation, advisors must demonstrate
                      strict ethical standards and pass the comphehensive CFP
                      <sup>®</sup> certification exam. If you are interested in
                      becoming a CFP
                      <sup>®</sup>, you should explore the discounts IFG has
                      arranged on both the CFP<sup>®</sup> coursework and the
                      CFP
                      <span>®</span> certification exam itself.
                    </p>
                  </div>
                </li>
                <li className="rounded-b bg-white shadow">
                  <div className="relative">
                    <img
                      src="https://images.ctfassets.net/9lvru9ro1ti1/3rP8dEicohMl82hVVCf6XG/954c39330984e67c4c8166301f476678/practice_management_image_2-compressed.webp"
                      className="h-[300px] object-cover"
                    />
                    <img
                      src="https://images.ctfassets.net/9lvru9ro1ti1/6oJEB0ed4NJ2plUN9pFN3o/ff5ea8e601f5701d9fc18889b018ca9b/PME23-Logo-NoDates.png"
                      className="absolute -bottom-8 right-0 h-24 w-24 object-contain"
                    />
                  </div>
                  <div className="space-y-1 px-2 py-4">
                    <h4 className="text-2xl text-ifg-turqoise-500">
                      Practice Management Exchange
                    </h4>
                    <img />
                    <p className="text-sm leading-6">
                      IFG’s invite-only<sup>*</sup> Practice Management Exchange
                      is consistently rated as our most informative conference.
                      What makes this conference unique is that the majority of
                      presentations are led by advisors, emphasizing true
                      peer-to-peer learning. Topics include, but are not limited
                      to, technology optimization, client acquisition
                      strategies, and practical case studies. In addition, each
                      year IFG invites well-respected keynote speakers. Many
                      attendees tell us that it is the best conference they have
                      ever attended!
                    </p>
                    <em className="text-xs text-gray-500">
                      <sup>*</sup>Advisors must meet minimum qualifications
                    </em>
                  </div>
                </li>
                <li className="rounded-b bg-white shadow">
                  <div className="relative">
                    <img
                      src="https://images.ctfassets.net/9lvru9ro1ti1/5Yo91q6YcVH9slq2KSf5TN/5457693a285a0a9d2302cff2df052bcc/practice_management_image_3-compressed.webp"
                      className="h-[300px] object-cover"
                    />
                    <img
                      src="https://images.ctfassets.net/9lvru9ro1ti1/5twMxYQ58TydFcEmWdRGFx/e8eaaa6ea4c5b353ebb20d7c3ea814dd/abreviated_logoNC24.png"
                      className="absolute -bottom-8 right-0 h-24 w-24 object-contain"
                    />
                  </div>
                  <div className="space-y-1 px-2 py-4">
                    <h4 className="text-2xl text-ifg-turqoise-500">
                      National Conference
                    </h4>
                    <img />
                    <p className="text-sm leading-6">
                      Unlike the Practice Management Forum, IFG&apos;s National
                      Conference is open to all IFG Advisors. Incorporating
                      multiple continuing education tracks with product sponsor
                      seminars, a tradeshow hall, motivational speakers, and fun
                      activities for the entire family, the National Conference
                      is by far our most involved event of the year and sees
                      upwards of 80% advisor attendance.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="col-span-full">
            <div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-5">
                <h3 className="col-span-full mb-2 max-w-[20ch] text-pretty text-3xl font-bold text-hazard-blue-500">
                  Strategic Acquisitions & Succession Planning
                </h3>
                <div className="space-y-6">
                  <p className="text-sm leading-6">
                    Growth through acquisition is an effective way to increase
                    your client base and asset opportunities. Retention rates
                    for acquisitions are high and client satisfaction often
                    increases. Succession planning also ensures that your
                    life&apos;s work will continue regardless of unplanned
                    events. Having a written plan in place ensures your clients
                    receive uninterrupted service and your beneficiaries receive
                    maximum value for your business.
                  </p>
                  <div>
                    <h4 className="col-span-full mb-2 text-pretty text-2xl font-semibold text-ifg-turqoise-500">
                      Strategic Acquisitions & Succession Planning
                    </h4>
                    <p className="text-sm leading-6">
                      Acquiring a financial advisory practice can be a tedious
                      and time-consuming process. You will make many unique
                      decisions and consider many datapoints. Having the right
                      partner on your side to think through the details with you
                      is critical. Through IFG’s acquisition support you’ll
                      receive end-to-end assistance on every aspect of the deal.
                      We maintain an internal database of advisors interested in
                      buying practices and those open to selling. Because we
                      have such strong relationships with our advisors and a
                      deep understanding of their businesses, we’re able to play
                      matchmaker between advisors with great success. Throughout
                      the process, we continue to provide consultative guidance
                      regarding practice valuation, deal structuring, financing
                      options, sample purchase agreements, etc. This all
                      culminates in a seamless client transition experience that
                      includes letters to clients and bulk transfer Rep ID
                      reassignments.
                    </p>
                  </div>
                  <div>
                    <h4 className="col-span-full mb-2 text-pretty text-2xl font-semibold text-ifg-turqoise-500">
                      Succession Strategy
                    </h4>
                    <div className="space-y-6">
                      <p className="text-sm leading-6">
                        Some advisors prefer to sell their practice to other
                        advisors when the time for transition comes. On the
                        other hand, some advisors prefer to identify a successor
                        and develop a transition plan that takes place over
                        several years.
                      </p>
                      <p className="text-sm leading-6">
                        Whether the successor comes from merging with another
                        firm or as a licensed advisor already within the branch,
                        crafting a strategy to ensure specific criteria are
                        appropriately structured (e.g. control, communication,
                        equity transfer, financing and taxation) will benefit
                        both you and your clients. IFG can guide you through the
                        critical decisions that will ensure your business
                        interests are protected and goals are realized.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="col-span-full mb-2 text-pretty text-2xl font-semibold text-ifg-turqoise-500">
                      Contingency Planning
                    </h4>
                    <div className="space-y-6">
                      <p className="text-sm leading-6">
                        Buy/Sell Agreements are ideal when a specific buyer has
                        been identified in advance and has agreed to buy the
                        practice in the event of an unplanned exit. Contingency
                        Retainer Agreements are best used when no specific buyer
                        has been identified in advance, but the seller wants to
                        have a written agreement in place to locate a buyer. IFG
                        Advisors have access to templates for both types of
                        agreements at no cost. These are terrific ways to
                        protect your business in the event of an unplanned
                        interruption or exit.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="col-span-full mb-2 text-pretty text-2xl font-semibold text-ifg-turqoise-500">
                      IFG Partners
                    </h4>
                    <div className="space-y-2">
                      <img
                        src="https://images.ctfassets.net/9lvru9ro1ti1/0r6RF9vWsrh5GE4gOwLTU/fd1ac98a793dbdb4390710253c4342c3/SRG-Logo.png"
                        className="w-40"
                      />
                      <p className="text-sm leading-6">
                        <strong className="text-blue-wave-500">
                          Succession Resource Group
                        </strong>{" "}
                        is a boutique succession consulting firm dedicated to
                        helping financial advisors value, protect, grow, and
                        transition their business. Longtime IFG partner, SRG,
                        assists advisors with valuations, end-to-end deal
                        support on acquisitions, succession planning blueprints
                        and much more. SRG provides expertise and guidance
                        through 1:1 consultations, online webinars, face-to-face
                        meetings, and written thought leadership. In recognition
                        of our strong partnership, IFG Advisors receive
                        discounts of 10-15% on most SRG services.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <img
                        src="https://images.ctfassets.net/9lvru9ro1ti1/7yCiAQfXabLODVvYlk8Us4/4b358d1bd87e244145b23def7ae21ffa/live_oak_bank_logo.png"
                        className="w-40"
                      />
                      <p className="text-sm leading-6">
                        <strong className="text-blue-wave-500">
                          Live Oak Bank
                        </strong>{" "}
                        is a leader in bank financing of financial advisory mergers and acquisitions. Headquartered in Wilmington, NC, Live Oak Bank will underwrite most acquisitions with deal structures up to 10 years with competitive interest rates. Live Oak Bank provides the flexibility and liquidity needed to get deals done, so you can focus on meeting newly acquired clients and rest easy knowing that your acquisition cash flows predictably.
                      </p>
                    </div>
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

export default overview;
