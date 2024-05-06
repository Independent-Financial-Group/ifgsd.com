import React from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";

import * as contentful from "utils/contentful";

import { useDataSorter } from "utils/useDataSorter";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "contentLibrary",
    "fields.department": "Insurance",
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
            <h2 className="col-span-full text-xl font-bold">{key}</h2>
            {sortedData[key].map((item) => (
              <div
                key={item.sys.id}
                className="col-span-4 rounded bg-white px-4 py-2 shadow-md"
              >
                {item.fields.thumbnail && (
                  <img src={`https:${item.fields.thumbnail.fields.file.url}`} />
                )}
                <h3 className="font-bold text-hazard-blue-500">
                  {item.fields.title}
                </h3>
                <p className="text-xs leading-6">{item.fields.description}</p>
              </div>
            ))}
          </ContentContainer>
        ))}
      </Layout>
    </>
  );
};

export default education;
