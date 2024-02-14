import React, { useState, useEffect } from "react";
import Layout from "../../../../../components/App/Layout/Layout";
import PageHeader from "../../../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../../../components/App/ContentContainer/ContentContainer";
import BlogCardSimple from "../../../../../components/App/BlogCardSimple/BlogCardSimple";

// CONTENTFUL IMPORTS
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const index = () => {
  const [metricsArticles, setMetricsArticles] = useState([]);

  const getMetricsArticles = async () => {
    const data = await client
      .getEntries({
        content_type: "marketCommentary",
        "fields.topic[match]": "Metrics that Matter",
        order: "-fields.date",
      })
      .then((response) => {
        setMetricsArticles([...response.items]);
      });
  };

  useEffect(() => {
    getMetricsArticles();
  }, []);

  return (
    <Layout>
      <PageHeader
        pageName="Metrics that Matter"
        breadCrumb="Portfolio Construction > Market Commentary"
      />
      <ContentContainer>
        <ol className="col-span-12 gap-5 xl:grid xl:grid-cols-3">
          {metricsArticles.map((article) => {
            return (
              <li key={article.sys.id}>
                <BlogCardSimple
                  title={article.fields.title}
                  date={article.fields.date}
                  thumbnail={article.fields.thumbnail.fields.file.url}
                  slug={`/app/portfolio-construction/market-commentary/MTM/${article.fields.slug}`}
                  excerpt={article.fields.excerpt}
                />
              </li>
            );
          })}
        </ol>
      </ContentContainer>
    </Layout>
  );
};

export default index;
