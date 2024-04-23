import React from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";

import * as contentful from "utils/contentful";

import { GlobeAltIcon } from "@heroicons/react/24/outline";

export async function getStaticPaths() {
  const response = await contentful.client.getEntries({
    content_type: "partners",
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

  const partners = await client.getEntries({
    content_type: "partners",
    "fields.slug[match]": slug,
  });

  const partnerPodcasts = await client.getEntries({
    content_type: "podcast",
    "fields.partner.sys.contentType.sys.id": partners.items[0].sys.id,
    "fields.partner[in]": partners.items[0].fields.partnerName,
  });

  return {
    props: {
      partner: partners.items[0],
      podcastEpisodes: partnerPodcasts,
      preview: preview || false,
    },
    revalidate: 10,
  };
};

const index = ({ partner, preview, podcastEpisodes }) => {
  console.log(partner);
  console.log(podcastEpisodes);

  return (
    <>
      <Head>
        <title>{partner.fields.partnerName} | Partner Marketplace</title>
      </Head>
      <Layout preview={preview}>
        <PageHeader
          pageName={partner.fields.partnerName}
          breadCrumb="Partner Marketplace"
        />
        <ContentContainer>
          <section className="col-span-4 rounded bg-white p-4">
            <img src={`https:${partner.fields.logo.fields.file.url}`} />
            <div className="my-5">
              <Link
                href={partner.fields.linkToPartnerWebsite}
                className="inline-flex items-center rounded-full bg-hazard-blue-500/10 px-2 py-1 text-xs font-medium text-hazard-blue-600 ring-1 ring-inset ring-hazard-blue-500/10"
                target="_blank"
                rel="noopener"
              >
                <GlobeAltIcon className="inline-block h-6 w-6 align-middle" />{" "}
                Website
              </Link>
            </div>
            <h2 className=" font-semibold text-neon-orange-500">
              About {partner.fields.partnerName}
            </h2>
            <p className="text-xs leading-5">{partner.fields.about}</p>
          </section>
          <GridTile
            tileTitle="Educational Resources"
            colSpan="col-span-8"
          ></GridTile>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
