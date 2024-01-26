import React from "react";
import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/Internal-Pages/PageHeader/PageHeader";
import OverviewVideo from "../../../components/app/Internal-Pages/overview/OverviewVideo/OverviewVideo";
import DepartmentAnnouncements from "../../../components/App/Internal-Pages/overview/DepartmentAnnouncements/DepartmentAnnouncements";
import ContentLibrary from "../../../components/App/Internal-Pages/overview/ContentLibrary/ContentLibrary";
import TeamDirectory from "../../../components/App/Internal-Pages/overview/TeamDirectory/TeamDirectory";
import ProductAdBanner from "../../../components/App/Internal-Pages/overview/ProductAdBanner/ProductAdBanner";
import ModelsAtAGlance from "../../../components/App/Internal-Pages/overview/portfolio-construction/ModelsAtAGlance/ModelsAtAGlance";

const overview = () => {
  return (
    <Layout>
      <PageHeader
        headerText="Read up on market commentary, research and review our models."
        pageName="Portfolio Construction Overview"
      />
      <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
        <OverviewVideo url="https://vimeo.com/905389112?share=copy" />
        <DepartmentAnnouncements department="Portfolio Construction" />
        <ModelsAtAGlance />
      </div>
    </Layout>
  );
};

export default overview;
