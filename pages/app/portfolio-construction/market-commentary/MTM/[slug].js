import React, { useEffect } from "react";
import Layout from "../../../../../components/App/Layout/Layout";
import ContentContainer from "../../../../../components/App/ContentContainer/ContentContainer";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import options from "../../../../../rich-text-options";
// CONTENTFUL IMPORTS
const contenful = require("contentful");
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const response = await client.getEntries({
    content_type: "marketCommentary",
    "fields.topic[match]": "Metrics that Matter",
  });

  const paths = response.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  if (!response.items.length) {
    return {
      redirect: {
        destination: "/app",
        permanent: false,
      },
    };
  }

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const articles = await client.getEntries({
    content_type: "marketCommentary",
    order: "-fields.date",
    "fields.slug[match]": slug,
  });

  return {
    props: {
      article: articles.items[0],
    },
    revalidate: 5,
  };
};

const Article = ({ article }) => {
  return (
    <Layout>
      <article className="mx-auto mt-5 max-w-prose">
        <ReactPlayer
          url={article.fields.videoLink}
          controls
          style={{ margin: "0 auto" }}
        />
        <div className="my-10">
          {documentToReactComponents(article.fields.content, options)}
        </div>
      </article>
    </Layout>
  );
};

export default Article;
