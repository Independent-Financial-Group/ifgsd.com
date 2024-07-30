import React from "react";
import Head from "next/head";
import Layout from "../../../components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import OverviewVideo from "../../../components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import DepartmentAnnouncements from "../../../components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import TeamDirectory from "../../../components/App/InternalPages/Overview/TeamDirectory/TeamDirectory";
import ModelsAtAGlance from "../../../components/App/InternalPages/Overview/PortfolioConstruction/ModelsAtAGlance/ModelsAtAGlance";
import MarketResearch from "../../../components/App/InternalPages/Overview/PortfolioConstruction/MarketResearch/MarketResearch";

import * as contentful from "../../../utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;
  const department = "Portfolio Construction";

  const departmentAnnouncements = await client.getEntries({
    content_type: "announcements",
    "fields.department[match]": department,
    order: "-fields.date",
  });

  const teamMembers = await client.getEntries({
    content_type: "companyDirectory",
    "fields.department[match]": department,
    "fields.termed": false,
    order: "fields.fullName",
  });

  const models = await client.getEntries({
    content_type: "portfolioConstructionModels",
    "fields.feature": true,
    order: "fields.name",
  });

  const marketCommentary = await client.getEntries({
    content_type: "marketCommentary",
    order: "-fields.date",
  });

  return {
    props: {
      department,
      departmentAnnouncements: [...departmentAnnouncements.items],
      teamMembers: [...teamMembers.items],
      featuredModels: [...models.items],
      marketCommentary: [...marketCommentary.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const overview = ({
  preview,
  department,
  departmentAnnouncements,
  teamMembers,
  featuredModels,
  marketCommentary,
}) => {
  return (
    <>
      <Head>
        <title>Overview | Portfolio Construction</title>
      </Head>
      <PageHeader
        headerText="Read up on market commentary, research and review our models."
        pageName="Portfolio Construction Overview"
      />
      <Layout preview={preview}>
        <ContentContainer>
          {/* <OverviewVideo url="https://placehold.co/3840x2160.mp4?text=placeholder+video" /> */}
          <DepartmentAnnouncements
            data={departmentAnnouncements}
            name={department}
          />
          <ModelsAtAGlance featuredModels={featuredModels} />
          <MarketResearch marketCommentary={marketCommentary} />
          <TeamDirectory name={department} data={teamMembers} />
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
