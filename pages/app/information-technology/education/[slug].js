import React, { useEffect } from "react";
import Layout from "../../../../components/App/Layout/Layout";
import ContentContainer from "../../../../components/App/ContentContainer/ContentContainer";
import options from "../../../../rich-text-options";
import PreviewBanner from "../../../../components/App/PreviewBanner/PreviewBanner";
import Link from "next/link";

// CONTENTFUL IMPORTS
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as contentful from "../../../../utils/contentful";

export async function getStaticPaths() {
  const response = await contentful.client.getEntries({
    content_type: "education",
    "fields.department[match]": "Information Technology",
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

export const getStaticProps = async ({ params, preview }) => {
  const slug = params.slug;
  const client = preview ? contentful.previewClient : contentful.client;

  const articles = await client.getEntries({
    content_type: "education",
    "fields.slug[match]": slug,
  });

  return {
    props: {
      article: articles.items[0],
      preview: preview || false,
    },
    revalidate: 10,
  };
};

const Article = ({ article, preview }) => {
  return (
    <Layout preview={preview}>
      <div className="my-10 flex min-h-screen items-center justify-center">
        <article className="mx-auto w-3/4 rounded-lg bg-white px-4 py-3">
          <h1 className="mb-5 text-center text-4xl text-neon-orange-500">
            {article.fields.title}
          </h1>
          <div className="mx-auto my-5 max-w-prose">
            {documentToReactComponents(article.fields.content, options)}
          </div>
          <Link
            href="/app/information-technology/education"
            className="mx-auto block w-fit rounded-lg bg-neon-orange-500 px-2 py-1 font-semibold text-white"
          >
            &larr;Back
          </Link>
          <p className="my-5 text-center text-lg font-bold uppercase text-neon-orange-400">
            For Financial Professional Use Only
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default Article;
