import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "../../../../components/App/ContentContainer/ContentContainer";
import GridTile from "../../../../components/App/GridTile/GridTile";
import BlogCardBgImage from "../../../../components/App/BlogCardBgImage/BlogCardBgImage";
import PodcastQuestionForm from "../../../../components/App/InternalPages/PodcastQuestionForm/PodcastQuestionForm";

// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

// ICONS
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

import * as contentful from "../../../../utils/contentful";
import { formatDateAndTime } from "@contentful/f36-datetime";
import Link from "next/link";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "podcast",
    limit: 6,
    order: "-fields.date",
  });

  return {
    props: {
      episodes: [...data.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const index = ({ preview, episodes }) => {
  return (
    <>
      <Head>
        <title>The Playbook | Podcast</title>
      </Head>
      <Layout preview={preview}>
        <PageHeader breadCrumb="IFG's Podcast Series" pageName="The Playbook" />
        <ContentContainer>
          <section className="col-span-12 items-center xl:grid xl:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-hazard-blue-500">
                Real Time Updates
              </h2>
              <p className="mt-5 max-w-prose text-lg leading-7">
                Join us for real-time updates from IFG leadership, valuable
                insights from our partners, answers to your questions, and much
                more.
              </p>
            </div>
            <img src="https://new.ifgsd.com/wp-content/uploads/2023/04/thePlaybookScreencap-compressed-1-1024x596.webp" />
          </section>
          <GridTile colSpan={"col-span-12"} tileTitle="Latest Episodes">
            <div className="flex items-center gap-5 py-5">
              <button className="swiper-button-prev rounded-full bg-neon-orange-500 p-2 text-xl text-white">
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  disabledClass: "!bg-gray-100 !text-gray-500",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    slidesPerGroup: 3,
                  },
                }}
                className="!py-5"
              >
                {episodes.map((episode) => (
                  <SwiperSlide key={episode.sys.id}>
                    <BlogCardBgImage
                      title={episode.fields.title}
                      link={`/app/resources/podcast/${episode.fields.slug}`}
                      imageUrl={`https:${episode.fields.thumbnail.fields.file.url}`}
                      excerpt={episode.fields.description}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="swiper-button-next rounded-full bg-neon-orange-500 p-2 text-xl text-white">
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
            <Link
              href="/app/resources/podcast/all-episodes"
              className="mx-auto mb-5 block w-fit rounded bg-neon-orange-500 p-2 font-semibold text-seabreeze-500"
            >
              All Episodes
            </Link>
          </GridTile>
          <section className="col-span-12 xl:grid xl:grid-cols-2 xl:gap-5">
            <div>
              <h2 className="text-3xl font-semibold text-neon-orange-500">
                Submit Your Questions!
              </h2>
              <p className="mt-5 max-w-prose text-lg">
                Send us your questions using the form to have them answered on
                future episodes of the podcast!
              </p>
            </div>
            <div>
              <PodcastQuestionForm />
            </div>
          </section>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;