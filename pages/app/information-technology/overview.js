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
import ContentContainer from "components/App/ContentContainer/ContentContainer";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;
  const department = "IT & Software Support";

  const teamMemberData = await client.getEntries({
    content_type: "companyDirectory",
    "fields.department[match]": department,
    "fields.termed": false,
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
      <PageHeader
        pageName={"Information Technology Overview"}
        headerText={"Information Technology"}
      />
      <Layout preview={preview}>
        <ContentContainer>
          {/* <OverviewVideo url="https://placehold.co/3840x2160.mp4?text=placeholder+video" /> */}
          <DepartmentAnnouncements
            name="Information Technology"
            data={departmentAnnouncementData}
          />
          <ProductAdBanner
            url={
              "https://images.ctfassets.net/9lvru9ro1ti1/7s2xUDUqhd3ZZdcYppxcFw/29ecc381a9129f8c373054e359ceb4a8/trustifi-ad-1200X630.png"
            }
          />
          <ContentLibrary department="Information Technology" />
          <TeamDirectory data={teamMemberData} name="IT & Software Support" />
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
