import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../../components/App/ContentContainer/ContentContainer";
import BlogCardSimple from "../../../../components/App/BlogCardSimple/BlogCardSimple";

import * as contentful from "../../../../utils/contentful";
import { formatDateAndTime } from "@contentful/f36-datetime";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const episodes = await client.getEntries({
    content_type: "podcast",
    order: "-fields.date",
  });

  return {
    props: {
      episodes: [...episodes.items],
      preview: preview || false,
      revalidate: 10,
    },
  };
}

const index = ({ episodes, preview }) => {
  return (
    <>
      <Head>
        <title>The Playbook | All Episodes</title>
      </Head>
      <Layout preview={preview}>
        <PageHeader breadCrumb="The Playbook" pageName="All Episodes" />
        <ContentContainer>
          {episodes.map((episode) => (
            <BlogCardSimple
              colSpan={"4"}
              date={formatDateAndTime(episode.fields.date, "day")}
              excerpt={episode.fields.description}
              thumbnail={episode.fields.thumbnail.fields.file.url}
              title={episode.fields.title}
              slug={episode.fields.slug}
            />
          ))}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
