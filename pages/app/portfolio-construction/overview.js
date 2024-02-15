import React from "react";
import Layout from "../../../components/App/Layout/Layout";
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
    order: "sys.createdAt",
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
    <Layout preview={preview}>
      <PageHeader
        headerText="Read up on market commentary, research and review our models."
        pageName="Portfolio Construction Overview"
      />
      <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
        <OverviewVideo url="https://vimeo.com/905389112?share=copy" />
        <DepartmentAnnouncements
          data={departmentAnnouncements}
          name={department}
        />
        <ModelsAtAGlance featuredModels={featuredModels} />
        <MarketResearch marketCommentary={marketCommentary} />
        <TeamDirectory name={department} data={teamMembers} />
      </div>
    </Layout>
  );
};

export default overview;
