import React, { useState } from "react";
import Link from "next/link";

import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import Head from "next/head";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";

import * as contentful from "../../../utils/contentful";

export async function getStaticProps({ preview }) {
  return {
    props: {
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const overview = ({ preview }) => {
  const stpResources = [
    {
      fileName: "New Accounts and Updates - DIRECT II",
      url: "",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
    {
      fileName: "New Accounts and Updates - Pershing II",
      url: "",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
    {
      fileName: "STP Flowchart",
      url: "",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
    {
      fileName: "STP Overview Guide",
      url: "",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
    {
      fileName: "STP OVerview Guide with Signix",
      url: "",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
    {
      fileName: "STP Reminders and FAQs",
      url: "",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Straight Through Processing | Supervision</title>
        <meta
          name="description"
          content="IFG is committed to helping you retain your true independence through Straight Through Processing. This new initiative enables branches to open new accounts and make updates to existing accounts using Gateway."
        />
      </Head>
      <PageHeader
        breadCrumb={"Supervision"}
        pageName={"Straight Through Processing"}
      />
      <Layout preview={preview}>
        <ContentContainer>
          <section className="col-span-full lg:grid lg:grid-cols-2 lg:gap-5">
            <div className="space-y-6">
              <h3 className="text-ifg-turqoise-500 max-w-prose text-pretty text-xl font-bold">
                Committed to helping you retain your true independence through
                Straight Through Processing
              </h3>
              <p className="max-w-prose">
                This new initiative enables branches to open new accounts and
                make updates to existing accounts using Gateway. IFG has
                committed 100% of its resources to your successful transition
                and implementation of Straight Through Processing. Watch this
                short video to learn more about how Straight Through Processing
                can help your business.
              </p>
              <div className="rounded bg-white px-4 py-2">
                <h4 className=" font-bold text-neon-orange-500">Resources</h4>
                <ul>
                  {stpResources.map((resource) => (
                    <li key={resource.url}>
                      <Link
                        href={resource.url}
                        className="flex items-center gap-1"
                      >
                        {resource.icon}
                        <span>{resource.fileName}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="rounded-lg bg-white px-4">
                <ReactPlayer
                  controls
                  url={"https://vimeo.com/375761691/566a272a93"}
                  width={"100"}
                />
              </div>
            </div>
          </section>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
