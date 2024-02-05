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

const index = () => {
  const [episodes, setEpisodes] = useState([]);

  const getEpisodes = async () => {
    const data = await contentful.client
      .getEntries({
        content_type: "podcast",
      })
      .then((response) => {
        setEpisodes([...response.items]);
      });
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <>
      <Head>
        <title>The Playbook | Podcast</title>
      </Head>
      <Layout>
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
                      link={episode.fields.slug}
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
            <button className="mx-auto mb-5 block w-fit rounded bg-neon-orange-500 p-2 font-semibold text-seabreeze-500">
              All Episodes
            </button>
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
