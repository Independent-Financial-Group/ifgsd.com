import React from "react";
import Head from "next/head";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import BlogCardBgImage from "../../../../components/App/BlogCardBgImage/BlogCardBgImage";

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
      name: "The Independent",
      excerpt:
        "A quarterly magazine featuring advisor stories, sponsor information, messages from executive leadership and home office management, as well as internal and industry news.",
      url: "https://images.ctfassets.net/9lvru9ro1ti1/4ktoVztcbat2ld3aY4y81Z/9f4ebaf45ebf413ee2b14330e432e417/The_Independent_Thumbnail_-_Q4-_2023.jpg",
      link: "/app/resources/publications/the-independent",
    },
    {
      name: "Blue Chip",
      excerpt:
        "A bi-monthly bulletin, featuring key sales ideas, practice management tips, coaching, and updates from Elite and Platinum sponsors along with Home Office News.",
      url: "https://images.ctfassets.net/9lvru9ro1ti1/4MbBZnQaNLLRLvSsTaxyLz/e813feb9c87a7bdc1c01f044b338dc68/Blue_Chip_-_Jan_2024_-_Thumbnail.jpg",
      link: "/app/resources/publications/bluechip",
    },
    {
      name: "IFG Connect",
      excerpt:
        "A biweekly newsletter featuring important information and/or updates from the home office departments",
      url: "https://images.ctfassets.net/9lvru9ro1ti1/1TeITzAs6TxMLuQH3MGxHE/556c2b70bbd475101c0f8af74edcff74/connect_-_01292024_-_thumbnail.jpg",
      link: "/app/resources/publications/connect",
    },
  ];

  return (
    <>
      <Head>
        <title>Publications | Resources</title>
      </Head>
      <Layout preview={preview}>
        <PageHeader pageName="Publications" breadCrumb="Resources" />
        <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
          <section className="col-span-12">
            <ol className="mt-5 xl:grid xl:grid-cols-3 xl:gap-5">
              {topics.map((topic) => {
                return (
                  <li className="col-span-1 h-full">
                    <BlogCardBgImage
                      title={topic.name}
                      excerpt={topic.excerpt}
                      imageUrl={topic.url}
                      link={topic.link}
                      positionTop
                    />
                  </li>
                );
              })}
            </ol>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default index;
