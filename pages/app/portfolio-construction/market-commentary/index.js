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
      name: "Mid-Week Update",
      excerpt:
        "How has the S&P 500 performed after initially breaking through a previous peak in the market? We’ve analyzed data back to the 1970’s to show how the S&P 500 has performed after initially breaking through an all-time high. Click the link to learn more",
    },
    {
      name: "The Importance of Diversification",
      excerpt:
        "Markets fluctuate over time, and no one asset class continuously outperforms the market. That's why it's important to diversify your portfolio. Click the link below to see how different asset classes have performed over time. Click the link to learn more.",
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
          <ol className="mt-5 xl:grid xl:grid-cols-3 xl:gap-5">
            {latestCommentary.map((topic) => {
              return (
                <li>
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
