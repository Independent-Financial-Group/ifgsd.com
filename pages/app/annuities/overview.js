import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import DepartmentAnnouncements from "components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import GridTile from "components/App/GridTile/GridTile";
import Modal from "components/App/Modal/Modal";
import ReactMarkdown from "react-markdown";

import * as contentful from "/utils/contentful";

import {
  DocumentArrowDownIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const NAICFiles = await client.getAssets({
    "metadata.tags.sys.id[in]": "annuities,naicModelReg275",
  });

  const annuitySpotlight = await client.getEntries({
    content_type: "annuitySpotlight",
    order: "fields.heading",
  });

  return {
    props: {
      preview: preview || false,
      NAICFiles: [...NAICFiles.items],
      annuitySpotlight: [...annuitySpotlight.items],
    },
    revalidate: 10,
  };
}

const Page = ({ preview, NAICFiles, annuitySpotlight }) => {
  const [open, setOpen] = useState(false);
  const [selectedSpotlightId, setSelectedSpotlightId] = useState(null);

  return (
    <>
      <Head>
        <title>Overview | Annuities</title>
      </Head>
      <PageHeader pageName={"Overview"} breadCrumb={"Annuities"} />
      <Layout>
        <ContentContainer>
          <DepartmentAnnouncements data={[]} name={"Annuities"} />
          <GridTile
            colSpan={"col-span-6"}
            tileTitle={"NAIC Model Regulation 275"}
          >
            <h4 className="text-xl font-bold text-neon-orange-500">
              Resources
            </h4>
            <ul className="mt-2 space-y-4">
              {NAICFiles.map((file) => (
                <li>
                  <Link
                    href={`https:${file.fields.file.url}`}
                    className="flex w-fit items-center text-ifg-turqoise-500"
                    target="_blank"
                  >
                    <DocumentArrowDownIcon className="h-6 w-6" />
                    <p>{file.fields.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </GridTile>
          <GridTile
            tileTitle={"Annuity Spotlight"}
            colSpan={"col-span-6"}
            icon={<LightBulbIcon className="h-5 w-5" />}
            scroll
          >
            <ul className="divide-y-2">
              {annuitySpotlight.map((item) => (
                <li className="py-4 first:pt-0 last:pb-0">
                  <img
                    src={`https://${item.fields.thumbnail.fields.file.url}`}
                    alt={item.fields.thumbnail.fields.title}
                  />
                  <p className="mt-3 font-bold text-neon-orange-500">
                    {item.fields.heading}
                  </p>
                  <ReactMarkdown className="line-clamp-2 text-sm [&_a]:font-bold [&_a]:text-blue-wave-500">
                    {item.fields.description}
                  </ReactMarkdown>
                  <div className="mt-2 flex justify-end">
                    <button
                      data-id={item.sys.id}
                      className="text-sm font-semibold transition-colors hover:text-ifg-turqoise-500"
                      onClick={(e) => {
                        setOpen(true);
                        setSelectedSpotlightId(e.target.dataset.id);
                      }}
                    >
                      Read More &rarr;
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <Modal open={open} setOpen={setOpen}>
              {annuitySpotlight
                .filter((item) => item.sys.id === selectedSpotlightId)
                .map((item) => (
                  <>
                    <img
                      src={`https://${item.fields.thumbnail.fields.file.url}`}
                      alt={item.fields.thumbnail.fields.title}
                    />
                    <h5 className="mb-2 mt-4 font-bold text-neon-orange-500">
                      {item.fields.heading}
                    </h5>
                    <ReactMarkdown className="[&_a]:my-4 [&_a]:block [&_a]:font-bold [&_a]:text-blue-wave-500">
                      {item.fields.description}
                    </ReactMarkdown>
                  </>
                ))}
            </Modal>
          </GridTile>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default Page;
