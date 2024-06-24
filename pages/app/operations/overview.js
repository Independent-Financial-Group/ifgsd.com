import React from "react";
import Layout from "../../../components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import Head from "next/head";
import OverviewVideo from "../../../components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import DepartmentAnnouncements from "../../../components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import ContentLibrary from "../../../components/App/InternalPages/Overview/ContentLibrary/ContentLibrary";
import TeamDirectory from "../../../components/App/InternalPages/Overview/TeamDirectory/TeamDirectory";
import ProductAdBanner from "../../../components/App/InternalPages/Overview/ProductAdBanner/ProductAdBanner";

import * as contentful from "utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;
  const department = "operations";

  const teamMemberData = await client.getEntries({
    content_type: "companyDirectory",
    "fields.department[match]": department,
    order: "fields.fullName",
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

const overview = ({ preview, teamMemberData, departmentAnnouncementData }) => {
  return (
    <>
      <Head>
        <title>Overview | Operations</title>
        <meta
          name="description"
          content="An overview of the Alternative Investments Department at IFG."
        />
      </Head>
      <PageHeader pageName={"Operations Overview"} headerText={"Operations"} />
      <Layout preview={preview}>
        <ContentContainer>
          <OverviewVideo url="https://placehold.co/3840x2160.mp4?text=placeholder+video" />
          <DepartmentAnnouncements
            name="Ops"
            data={departmentAnnouncementData}
          />
          <ContentLibrary department="Operations" fixedHeight />
          <TeamDirectory data={teamMemberData} name="Operations" />
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
