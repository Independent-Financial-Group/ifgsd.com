import React, { useEffect } from "react";
import Layout from "../../../../components/App/Layout/Layout";
import ContentContainer from "../../../../components/App/ContentContainer/ContentContainer";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import PreviewBanner from "../../../../components/App/PreviewBanner/PreviewBanner";

import * as contentful from "../../../../utils/contentful";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import { formatDateAndTime } from "@contentful/f36-datetime";

// AUDIO PLAYER
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export async function getStaticPaths() {
  const response = await contentful.client.getEntries({
    content_type: "podcast",
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

export const getStaticProps = async ({ params, preview, draftMode }) => {
  const slug = params.slug;
  const client =
    preview || draftMode ? contentful.previewClient : contentful.client;

  const articles = await client.getEntries({
    content_type: "podcast",
    order: "-fields.date",
    "fields.slug[match]": slug,
  });

  return {
    props: {
      article: articles.items[0],
      preview: preview || false,
    },
    revalidate: 5,
  };
};

const Article = ({ article, preview }) => {
  return (
    <Layout>
      {preview && <PreviewBanner />}
      <PageHeader
        pageName={article.fields.title}
        breadCrumb={formatDateAndTime(article.fields.date, "day")}
      />
      <ContentContainer>
        <section className="col-span-4">
          <h2 className="mb-5 font-semibold text-neon-orange-500">
            Watch Episode
          </h2>
          <ReactPlayer
            url={article.fields.vimeoLink}
            controls
            width={"100%"}
            height={"200px"}
            style={{
              padding: "0 !important",
            }}
          />
          <h2 className="mb-2 mt-5 font-semibold text-neon-orange-500">
            Listen to Episode
          </h2>
          <AudioPlayer
            src={article.fields.audioFile.fields.file.url}
            showJumpControls={false}
            layout="horizontal"
          />
        </section>
        <section className="col-span-8">
          <h2 className="font-semibold">Description</h2>
          <p className="mb-5 text-sm leading-7">{article.fields.description}</p>
          <h2 className="mb-5 font-semibold">Guests</h2>
          <ul className="flex gap-5">
            {article.fields.guests &&
              article.fields.guests.map((guest) => (
                <li key={guest.sys.id}>
                  <img
                    className="mx-auto h-16 w-16 rounded-full"
                    src={`https:${guest.fields.headshot.fields.file.url}`}
                  />
                  <p className="text-center font-semibold text-hazard-blue-500">
                    {guest.fields.fullName}
                  </p>
                  <p className="text-center text-xs">{guest.fields.title}</p>
                </li>
              ))}
          </ul>
        </section>
        {article.fields.featuresPartner && (
          <section className="col-span-full">
            <div className="xl:grid xl:grid-cols-12 xl:items-center xl:gap-5">
              <div className="xl:col-span-4 xl:justify-self-center">
                <img
                  src={`https:${article.fields.partner.fields.logo.fields.file.url}`}
                />
              </div>
              <div className="col-span-8 max-w-prose">
                <h2 className="font-semibold text-neon-orange-500">
                  About {article.fields.partner.fields.partnerName}
                </h2>
                <p>
                  Cottonwood Communities, Inc. ("CWREIT") is a publicly
                  registered, non-traded, net asset value ("NAV")-based
                  perpetual life real estate investment trust that owns a
                  diverse portfolio of multifamily apartment communities and
                  multifamily real estate-related assets located throughout the
                  United States. Shares of the offering are available to
                  investors that meet the minimum suitability standards set
                  forth in the prospectus.
                </p>
              </div>
            </div>
          </section>
        )}
      </ContentContainer>
    </Layout>
  );
};

export default Article;
