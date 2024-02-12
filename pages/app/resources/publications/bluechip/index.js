import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../../../components/App/Layout/Layout";
import ContentContainer from "../../../../../components/App/ContentContainer/ContentContainer";
import PageHeader from "../../../../../components/App/InternalPages/PageHeader/PageHeader";
import BlogCardSimple from "../../../../../components/App/BlogCardSimple/BlogCardSimple";

import * as contentful from "../../../../../utils/contentful";

const index = () => {
  const [magazines, setMagazines] = useState([]);

  const getMagazines = async () => {
    const data = await contentful.client
      .getEntries({
        content_type: "publications",
        "fields.publicationType": "Blue Chip",
      })
      .then((response) => {
        console.log(response.items);
        setMagazines([...response.items]);
      });
  };

  useEffect(() => {
    getMagazines();
  }, []);

  return (
    <>
      <Head>
        <title>Blue Chip | Publications</title>
      </Head>
      <Layout>
        <PageHeader
          pageName="Blue Chip"
          breadCrumb="Resources > Publications"
        />
        <ContentContainer>
          {magazines.map((magazine) => (
            <BlogCardSimple
              colSpan={"4"}
              title={magazine.fields.title}
              slug={`/app/resources/publications/bluechip/${magazine.fields.slug}`}
              edition={magazine.fields.edition}
            />
          ))}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
