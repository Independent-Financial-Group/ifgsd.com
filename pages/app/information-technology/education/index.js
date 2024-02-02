import React, { useState, useEffect } from "react";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../../components/App/ContentContainer/ContentContainer";
import Head from "next/head";
import BlogCardSimple from "../../../../components/App/BlogCardSimple/BlogCardSimple";

import * as contentful from "../../../../utils/contentful";

const overview = () => {
  const [articles, setArticles] = useState([]);

  const getArticle = async () => {
    const data = await contentful.client
      .getEntries({
        content_type: "education",
        "fields.department[match]": "Information Technology",
        order: "-fields.date",
      })
      .then((response) => setArticles([...response.items]));
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      <Head>
        <title>Education | Information Technology</title>
        <meta
          name="description"
          content="Educational resources from the information technology department."
        />
      </Head>
      <Layout>
        <PageHeader
          breadCrumb={"Information Technology"}
          pageName={"Education"}
        />
        <ContentContainer>
          {articles.map((article) => {
            return (
              <BlogCardSimple
                title={article.fields.title}
                key={article.sys.id}
                excerpt={article.fields.excerpt}
                colSpan={"4"}
                slug={`/app/information-technology/education/${article.fields.slug}`}
              />
            );
          })}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
