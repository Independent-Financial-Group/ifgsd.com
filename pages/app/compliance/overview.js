import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import DepartmentAnnouncements from "components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import TeamDirectory from "components/App/InternalPages/Overview/TeamDirectory/TeamDirectory";
import GridTile from "components/App/GridTile/GridTile";
import OverviewVideo from "components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import ContentLibrary from "components/App/InternalPages/Overview/ContentLibrary/ContentLibrary";

import * as contentful from "/utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const departmentMembers = await client.getEntries({
    content_type: "companyDirectory",
    "fields.department[match]": "Compliance",
    order: "fields.fullName",
  });

  const departmentAnnouncements = await client.getEntries({
    content_type: "announcements",
    "fields.department": "Compliance",
  });

  const departmentContent = await client.getEntries({
    content_type: "contentLibrary",
    "fields.department": "Compliance",
    order: "fields.subcategory",
  });

  return {
    props: {
      departmentMembers: [...departmentMembers.items],
      departmentAnnouncements: [...departmentAnnouncements.items],
      departmentContent: [...departmentContent.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const Overview = ({
  preview,
  departmentMembers,
  departmentAnnouncements,
  departmentContent,
}) => {
  return (
    <>
      <Head>
        <title>Overview | Compliance</title>
      </Head>
      <PageHeader pageName="Overview" breadCrumb="Compliance" />
      <Layout preview={preview}>
        <ContentContainer>
          <OverviewVideo />
          <DepartmentAnnouncements
            data={departmentAnnouncements}
            name="Compliance"
          />
          <TeamDirectory name="Compliance" data={departmentMembers} />
          <ContentLibrary department="Compliance" fixedHeight />
        </ContentContainer>
      </Layout>
    </>
  );
};

export default Overview;
