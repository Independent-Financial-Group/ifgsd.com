import React, { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";

import * as contentful from "utils/contentful";

import {
  GlobeAltIcon,
  BuildingLibraryIcon,
  ChevronRightIcon,
  LinkIcon,
  DocumentIcon,
  VideoCameraIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

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

  const partnerName = JSON.stringify(partners.items[0].fields.partnerName);

  const partnerPodcasts = await client.getEntries({
    // search on the podcast content type
    content_type: "podcast",
    // pass reference to the partner field  content type ID which in this case is "partners"
    "fields.partner.sys.contentType.sys.id": "partners",
    // match the partner name to the filtered partner for the specific slug
    "fields.partner.fields.partnerName[match]": partnerName,
    order: "-fields.date",
  });

  const resources = await client.getEntries({
    content_type: "contentLibrary",
  });

  return {
    props: {
      partner: partners.items[0],
      podcastEpisodes: [...partnerPodcasts.items],
      resources: [...resources.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
};

const Popover = ({ text }) => {
  return (
    <div className="group-transition-all absolute -top-5 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded bg-black/75 p-2 text-xs text-white opacity-0 group-hover:opacity-100 group-hover:delay-500 group-hover:duration-500">
      {text}
    </div>
  );
};

const index = ({ partner, preview, podcastEpisodes, resources }) => {
  const pages = resources.length / 12;
  const [page, setPage] = useState(1);
  const [firstArrIndex, setFirstArrIndex] = useState(0);
  const [secondArrIndex, setSecondArrIndex] = useState(12);
  const [batchResources, setBatchResources] = useState(resources.slice(0, 12));

  //   console.log(`resources: ${JSON.stringify(resources, null, 3)}`);

  const handleNextPage = () => {
    setFirstArrIndex((prev) => prev + 12);
    setSecondArrIndex((prev) => prev + 12);
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setFirstArrIndex((prev) => prev - 12);
    setSecondArrIndex((prev) => prev - 12);
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    setBatchResources(resources.slice(firstArrIndex, secondArrIndex));
  }, [page]);

  return (
    <>
      <Head>
        <title>{partner.fields.partnerName} | Partner Marketplace</title>
      </Head>
      <PageHeader
        pageName={partner.fields.partnerName}
        breadCrumb="Partner Marketplace"
      />
      <Layout preview={preview}>
        <ContentContainer>
          <section className="col-span-full flex gap-5 rounded bg-white p-4">
            <div className="">
              <img
                src={`https:${partner.fields.logo.fields.file.url}`}
                className="h-20"
              />
            </div>
            <div>
              <h2 className=" font-semibold text-neon-orange-500">
                About {partner.fields.partnerName}
              </h2>
              <p className="max-w-prose text-xs leading-5">
                {partner.fields.about}
              </p>
              <Link
                href={partner.fields.linkToPartnerWebsite}
                className="mt-5 inline-flex items-center gap-1 rounded-full bg-hazard-blue-500/10 px-2 py-1 text-xs font-medium text-hazard-blue-600 ring-1 ring-inset ring-hazard-blue-500/10"
                target="_blank"
                rel="noopener"
              >
                <GlobeAltIcon className="inline-block h-6 w-6 align-middle" />{" "}
                Website
              </Link>
            </div>
          </section>
          <GridTile
            tileTitle={`Educational Resources from ${partner.fields.partnerName}`}
            colSpan="col-span-5"
          >
            <ol className="mb-5 grid grid-cols-3 gap-x-2 gap-y-5">
              {batchResources.map((resource) => (
                <li
                  key={resource.sys.id}
                  className="group relative rounded bg-neon-orange-100 p-2 text-center hover:cursor-pointer"
                >
                  <Link
                    href={resource.fields.slug}
                    className="flex flex-col items-center"
                  >
                    <DocumentIcon className="h-10 w-10 bg-neon-orange-100 text-neon-orange-500" />
                    <div>
                      <Popover text={resource.fields.title} />
                      <h2 className="line-clamp-1 text-xs text-neon-orange-500">
                        {resource.fields.title}
                      </h2>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
            <nav
              className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">{firstArrIndex + 1}</span> to{" "}
                  <span className="font-medium">{secondArrIndex}</span> of{" "}
                  <span className="font-medium">{resources.length}</span>{" "}
                  results
                </p>
              </div>
              <div className="flex flex-1 justify-between gap-1 sm:justify-end">
                <button
                  onClick={handlePrevPage}
                  className="relative inline-flex items-center rounded-md bg-neon-orange-100 px-3 py-2 text-sm font-semibold text-neon-orange-500 ring-1 ring-inset ring-neon-orange-300 hover:bg-neon-orange-200 focus-visible:outline-offset-0 disabled:bg-gray-100 disabled:text-gray-200 disabled:ring-gray-100 disabled:hover:bg-gray-100"
                  disabled={page <= 1}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  className="relative inline-flex items-center rounded-md bg-neon-orange-100 px-3 py-2 text-sm font-semibold text-neon-orange-500 ring-1 ring-inset ring-neon-orange-300 hover:bg-neon-orange-200 focus-visible:outline-offset-0 disabled:bg-gray-100 disabled:text-gray-200 disabled:ring-gray-100 disabled:hover:bg-gray-100"
                  disabled={page >= pages}
                >
                  Next
                </button>
              </div>
            </nav>
          </GridTile>
          {podcastEpisodes.length > 0 ? (
            <GridTile
              colSpan="col-span-7"
              tileTitle="Featured Podcast Episodes"
            >
              <ol>
                {podcastEpisodes.map((episode) => (
                  <li className="flex gap-5" key={episode.sys.id}>
                    <div className="">
                      <Link
                        href={`/app/resources/podcast/${episode.fields.slug}`}
                      >
                        <p className="inline text-xs italic text-gray-500">
                          Season{" "}
                          {JSON.stringify(episode.fields.episodeNumber).match(
                            /^\d/,
                          )}{" "}
                          •{" "}
                        </p>
                        <p className="inline text-xs italic text-gray-500">
                          Episode{" "}
                          {JSON.stringify(episode.fields.episodeNumber).match(
                            /\d(?!0$)\d$/,
                          )}
                        </p>
                        <h2 className="font-semibold text-neon-orange-500">
                          {episode.fields.title}
                        </h2>
                      </Link>
                      <p className="line-clamp-3 text-xs leading-5">
                        {episode.fields.description}
                      </p>
                    </div>
                    <div className="">
                      <img
                        src={`https:${episode.fields.thumbnail.fields.file.url}`}
                      />
                    </div>
                  </li>
                ))}
              </ol>
            </GridTile>
          ) : null}
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
