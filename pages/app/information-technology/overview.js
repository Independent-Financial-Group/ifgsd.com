import React from "react";
import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import Head from "next/head";
import OverviewVideo from "../../../components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import DepartmentAnnouncements from "../../../components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import ContentLibrary from "../../../components/App/InternalPages/Overview/ContentLibrary/ContentLibrary";
import TeamDirectory from "../../../components/App/InternalPages/Overview/TeamDirectory/TeamDirectory";
import ProductAdBanner from "../../../components/App/InternalPages/Overview/ProductAdBanner/ProductAdBanner";

import * as contentful from "../../../utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;
  const department = "IT & Software Support";

  const teamMemberData = await client.getEntries({
    content_type: "companyDirectory",
    "fields.department[match]": department,
    order: "fields.fullName",
  });

  const departmentAnnouncementData = await client.getEntries({
    content_type: "announcements",
    "fields.department[match]": "Information Technology",
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

const overview = ({ preview, teamMemberData, departmentAnnouncementData }) => {
  return (
    <>
      <Head>
        <title>Overview | Information Technology</title>
        <meta
          name="description"
          content="An overview of the Alternative Investments Department at IFG."
        />
      </Head>
      <Layout preview={preview}>
        <PageHeader
          pageName={"Information Technology Overview"}
          headerText={"Information Technology"}
        />
        <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
          <OverviewVideo url="https://vimeo.com/manage/videos/864186162" />
          <DepartmentAnnouncements
            name="Information Technology"
            data={departmentAnnouncementData}
          />
          <ProductAdBanner
            url={
              "https://images.ctfassets.net/9lvru9ro1ti1/7s2xUDUqhd3ZZdcYppxcFw/29ecc381a9129f8c373054e359ceb4a8/trustifi-ad-1200X630.png"
            }
          />
          <ContentLibrary />
          <TeamDirectory data={teamMemberData} name="IT & Software Support" />
        </div>
      </Layout>
    </>
  );
};

export default overview;
