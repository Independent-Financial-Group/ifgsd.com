import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../../../components/App/Layout/Layout";
import ContentContainer from "../../../../../components/App/ContentContainer/ContentContainer";
import PageHeader from "../../../../../components/App/InternalPages/PageHeader/PageHeader";
import BlogCardSimple from "../../../../../components/App/BlogCardSimple/BlogCardSimple";

import * as contentful from "../../../../../utils/contentful";

const index = () => {
  const [connects, setConnects] = useState([]);

  const getConnects = async () => {
    const data = await contentful.client
      .getEntries({
        content_type: "publications",
        "fields.publicationType": "Connect",
        order: "-fields.date",
      })
      .then((response) => {
        console.log(response.items);
        setConnects([...response.items]);
      });
  };

  useEffect(() => {
    getConnects();
  }, []);

  return (
    <>
      <Head>
        <title>The Independent | Publications</title>
      </Head>
      <Layout>
        <PageHeader
          pageName="The Independent"
          breadCrumb="Resources > Publications"
        />
        <ContentContainer>
          {connects.map((connect) => (
            <BlogCardSimple
              colSpan={"4"}
              title={connect.fields.title}
              slug={`${connect.fields.linkToConnect}`}
              thumbnail={connect.fields.thumbnail.fields.file.url}
              inNewTab
            />
          ))}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
