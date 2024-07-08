import React, { useState } from "react";
import Link from "next/link";

import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import Head from "next/head";
import OverviewVideo from "../../../components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import DepartmentAnnouncements from "../../../components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import ContentLibrary from "../../../components/App/InternalPages/Overview/ContentLibrary/ContentLibrary";
import TeamDirectory from "../../../components/App/InternalPages/Overview/TeamDirectory/TeamDirectory";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";

import * as contentful from "../../../utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;
  const department = "Supervision";

  const teamMemberData = await client.getEntries({
    content_type: "companyDirectory",
    "fields.department[match]": department,
    // "fields.termed": false,
    order: "fields.title,fields.fullName",
  });

  const departmentAnnouncementData = await client.getEntries({
    content_type: "announcements",
    "fields.department[match]": department,
    order: "-fields.date",
  });

  return {
    props: {
      teamMemberData: [...teamMemberData.items],
      departmentAnnouncementData: [...departmentAnnouncementData.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const overview = ({ teamMemberData, preview, departmentAnnouncementData }) => {
  return (
    <>
      <Head>
        <title>Overview | Alternative Investments</title>
        <meta
          name="description"
          content="An overview of the Alternative Investments Department at IFG."
        />
      </Head>
      <PageHeader pageName={"Alternative Investments Overview"} />
      <Layout preview={preview}>
        <ContentContainer>
          <OverviewVideo url="https://placehold.co/3840x2160.mp4?text=placeholder+video" />
          <DepartmentAnnouncements
            name="Supervision"
            data={departmentAnnouncementData}
          />
          <TeamDirectory
            fixedHeight={false}
            data={teamMemberData}
            colSpan={"col-span-4"}
          />
          <ContentLibrary department={"Supervision"} colSpan={"col-span-8"} />
          <GridTile
            tileTitle={'IFG\'s "Straight Through" Business Process'}
            colSpan={"col-span-6"}
          >
            <div className="space-y-6">
              <img
                src="https://images.ctfassets.net/9lvru9ro1ti1/3INie6JGJ6mtGDQeB0wTu5/72dde4189bee38acb96853930aecf625/STP_Banner_.jpg"
                alt="Get there faster by leveraging the power of Gateway automation"
              />
              <p>
                Processing business straight through allows branches to open new
                accounts and update existing accounts directly on Gateway.
              </p>
              <div>
                <h4 className="text-ifg-turqoise-500 font-semibold">
                  Included Benefits
                </h4>
                <ul className="list-inside list-disc">
                  <li>
                    Simplification of new business processing beginning with the
                    supervision department
                  </li>
                  <li>Data Accuracy & Validity</li>
                  <li>Consolidation of accounts</li>
                  <li>Holistic Suitability</li>
                  <li>
                    Less paperwork requiring client signatures for address
                    changes & data corrections
                  </li>
                  <li>Generation of accurate business & client reporting</li>
                  <li>Efficient use of time</li>
                  <li>Increased fluidity of commissions</li>
                </ul>
              </div>
              <Link
                className="block w-full rounded bg-neon-orange-500 py-2 text-center font-bold text-white"
                href="/app/supervision/stp"
              >
                Learn More
              </Link>
            </div>
          </GridTile>
          <GridTile tileTitle={"Services"} colSpan={"col-span-6"}>
            <ul className="lg:grid lg:grid-cols-2 lg:gap-5 [&>li>h4]:text-lg [&>li>h4]:font-semibold [&>li>h4]:text-neon-orange-500 [&>li>p]:text-sm">
              <li>
                <h4>Orientation</h4>
                <p>
                  An overview of the Supervision department’s structure and
                  functionality within and among other departments, highlights
                  transactional procedures and support tools, and describes
                  IFG’s perspective on investments by product.
                </p>
              </li>
              <li>
                <h4>Training</h4>
                <p>
                  Step-by-step instruction and review of firm guidelines for
                  consideration and adherence to rules and regulations as
                  outlined in the Written Supervisory Procedures manual.
                </p>
              </li>
              <li>
                <h4>Webinars</h4>
                <p>
                  A variety of training webinars are archived for you to access
                  anytime from anywhere. You are able to follow along and learn:
                  how to access essential forms and the steps needed to complete
                  them, how to utilize online resources for product data and
                  client investment holdings, the submission process with follow
                  up, and firm suitability guidelines.
                </p>
              </li>
              <li>
                <h4>Sample Transaction Forms</h4>
                <p>
                  Highlights commonly missed fields and provides further
                  explanations for areas requiring additional substantiation,
                  including key points to address in submitted rationales.
                </p>
              </li>
              <li>
                <h4>Front-End Supervision</h4>
                <p>
                  Reduce back-and-forth between Advisor and Client by submitting
                  transactional documentation for review of completeness and
                  accuracy prior to collecting client signatures.
                </p>
              </li>
              <li>
                <h4>Hard & Soft Pre-Approvals</h4>
                <p>
                  Pre-approvals accommodated based on hard data for existing
                  clients or assumed information for prospective clients.
                </p>
              </li>
              <li>
                <h4>Articles</h4>
                <p>
                  Informative articles published in IFG’s quarterly magazine
                  providing insight into Supervision’s perspective on various
                  topics affecting our Advisors and/or the financial industry.
                </p>
              </li>
              <li>
                <h4>Field Service Feedback & Improvement Follow-up</h4>
                <p>
                  Connect with IFG’s Director or VP of Supervision to help us
                  learn how we can better serve you and make improvements going
                  forward.
                </p>
              </li>
            </ul>
          </GridTile>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
