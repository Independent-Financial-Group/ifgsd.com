import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../../components/App/ContentContainer/ContentContainer";
import BlogCardSimple from "../../../../components/App/BlogCardSimple/BlogCardSimple";

import * as contentful from "../../../../utils/contentful";
import { formatDateAndTime } from "@contentful/f36-datetime";

const index = () => {
  const [episodes, setEpisodes] = useState([]);

  const getEpisodes = async () => {
    const data = await contentful.client
      .getEntries({
        content_type: "podcast",
      })
      .then((response) => {
        setEpisodes([...response.items]);
      });
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <>
      <Head>
        <title>The Playbook | All Episodes</title>
      </Head>
      <Layout>
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
