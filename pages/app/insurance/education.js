import React from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import * as contentful from "utils/contentful";
import { useDataSorter } from "utils/useDataSorter";

import {
  DocumentArrowDownIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "contentLibrary",
    "fields.department": "Insurance",
    order: "fields.subcategory,fields.title",
  });

  return {
    props: {
      data: [...data.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const education = ({ data, preview }) => {
  const sortedData = useDataSorter(data, "subcategory");

  return (
    <>
      <Head>
        <title>Insurance Education Tools | IFG</title>
      </Head>
      <PageHeader pageName="Education" breadCrumb="Insurance" />
      <Layout>
        {Object.keys(sortedData).map((key) => (
          <ContentContainer key={key}>
            <h2 className="col-span-full text-2xl font-bold text-neon-orange-500">
              {key}
            </h2>
            {sortedData[key].map((item) => (
              <div
                key={item.sys.id}
                className="col-span-4 rounded bg-white px-4 py-2 shadow-md"
              >
                {item.fields.thumbnail && (
                  <img src={`https:${item.fields.thumbnail.fields.file.url}`} />
                )}
                <h3 className="my-5 font-bold text-hazard-blue-500">
                  {item.fields.title}
                </h3>
                <Markdown
                  className="my-5 text-xs leading-5 [&_a]:my-2 [&_a]:flex [&_a]:w-fit [&_a]:items-center [&_a]:gap-2 [&_a]:font-semibold [&_a]:text-blue-wave-500 [&_a_img]:h-4 [&_a_img]:w-4 [&_em]:text-xs [&_em]:text-blue-wave-500 [&_h3]:text-base [&_h3]:font-semibold [&_p]:mb-2 [&_ul]:list-inside [&_ul]:list-disc"
                  remarkPlugins={[remarkGfm]}
                >
                  {item.fields.text}
                </Markdown>
                {item.fields.file && (
                  <>
                    <p className="my-2 text-xs font-bold text-blue-wave-500">
                      FILES
                    </p>
                    <Link
                      className="flex w-fit items-center gap-1 rounded bg-neon-orange-200 p-2 text-xs font-bold text-neon-orange-500"
                      href={`https:${item.fields.file.fields.file.url}`}
                    >
                      <DocumentArrowDownIcon className="h-4 w-4" />
                      <span>{item.fields.file.fields.title}</span>
                    </Link>
                  </>
                )}
                {item.fields.isDirectLink && (
                  <>
                    <Link
                      className="mx-auto my-2 flex w-fit items-center gap-1 rounded bg-neon-orange-500 p-2 text-xs font-bold text-white"
                      href={item.fields.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      <span>Launch</span>
                    </Link>
                  </>
                )}
              </div>
            ))}
          </ContentContainer>
        ))}
      </Layout>
    </>
  );
};

export default education;
