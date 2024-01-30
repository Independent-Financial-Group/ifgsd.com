import React from "react";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import BlogCardBgImage from "../../../../components/App/BlogCardBgImage/BlogCardBgImage";

const index = () => {
  const latestCommentary = [
    {
      name: "Metrics that Matter",
      excerpt:
        "A weekly review on key drivers of recent market performance that monitors important economic updates for the week ahead.",
      url: "https://images.ctfassets.net/9lvru9ro1ti1/7ve8qd3GxjMLFAi4jhmau/9955f6d74971998e176a38cc9bc16c0f/MTM-01302024-THUMBNAIL.jpg",
    },
    {
      name: "Portfolio Construction Research",
      excerpt:
        "Dive into timely asset class research and portfolio construction education to help navigate ever-evolving markets.",
    },
    {
      name: "Market & Economic Commentary",
      excerpt: "Stay up to date on what’s driving recent market returns",
    },
  ];

  return (
    <Layout>
      <PageHeader
        pageName="Market Commentary"
        breadCrumb="Portfolio Construction"
        headerText="Daily Market Commentary covers global markets, stock markets, equity markets, commodities and economic news by IFG."
      />
      <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
        <section className="col-span-12">
          <h2 className="text-2xl font-semibold text-hazard-blue-500">
            Topics
          </h2>
          <ol className="mt-5 xl:grid xl:auto-rows-auto xl:grid-cols-3 xl:gap-5">
            {latestCommentary.map((topic) => {
              return (
                <li className="h-full">
                  <BlogCardBgImage
                    title={topic.name}
                    excerpt={topic.excerpt}
                    imageUrl={topic.url}
                  />
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </Layout>
  );
};

export default index;
