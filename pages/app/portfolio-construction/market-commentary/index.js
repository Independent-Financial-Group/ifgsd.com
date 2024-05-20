import React from "react";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import BlogCardBgImage from "../../../../components/App/BlogCardBgImage/BlogCardBgImage";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import Head from "next/head";

export async function getStaticProps({ preview }) {
  return {
    props: {
      preview: preview || false,
    },
  };
}

const index = ({ preview }) => {
  const topics = [
    {
      name: "Metrics that Matter",
      excerpt:
        "A weekly review on key drivers of recent market performance that monitors important economic updates for the week ahead.",
      url: "https://images.ctfassets.net/9lvru9ro1ti1/7ve8qd3GxjMLFAi4jhmau/9955f6d74971998e176a38cc9bc16c0f/MTM-01302024-THUMBNAIL.jpg",
      link: "/app/portfolio-construction/market-commentary/MTM",
    },
    {
      name: "Portfolio Construction Research",
      excerpt:
        "Dive into timely asset class research and portfolio construction education to help navigate ever-evolving markets.",
      url: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/app/portfolio-construction/market-commentary/portfolio-construction-research",
    },
    // {
    //   name: "Market & Economic Commentary",
    //   excerpt: "Stay up to date on what’s driving recent market returns",
    //   url: "https://images.pexels.com/photos/1438190/pexels-photo-1438190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   link: "/app/portfolio-construction/market-commentary/commentary",
    // },
  ];

  return (
    <>
      <Head>
        <title>Market Commentary | Portfolio Construction</title>
      </Head>
      <PageHeader
        pageName="Market Commentary"
        breadCrumb="Portfolio Construction"
        headerText="Daily Market Commentary covers global markets, stock markets, equity markets, commodities and economic news by IFG."
      />
      <Layout preview={preview}>
        <ContentContainer>
          <section className="col-span-12">
            <h2 className="text-2xl font-semibold text-hazard-blue-500">
              Topics
            </h2>
            <ol className="mt-5 xl:grid xl:grid-cols-4 xl:gap-5">
              {topics.map((topic) => {
                return (
                  <li className="col-span-2 h-full">
                    <BlogCardBgImage
                      title={topic.name}
                      excerpt={topic.excerpt}
                      imageUrl={topic.url}
                      link={topic.link}
                    />
                  </li>
                );
              })}
            </ol>
          </section>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
