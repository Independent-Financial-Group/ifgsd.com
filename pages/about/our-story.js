import React from "react";

// IMPORT NEXT JS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// IMPORT COMPNENTS
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageHeader from "../../components/PageHeader/PageHeader";
import Timeline from "../../components/Timeline/Timeline";

import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import highlightBlue from "../../public/_global-graphics/highlight-blue.png";

const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const timeline = await client.getEntries({
    content_type: "storyTimeline",
    order: "sys.createdAt",
  });

  return {
    props: {
      timeline: timeline.items.map((item) => {
        return { ...item.fields, id: item.sys.id };
      }),
    },
    revalidate: 10,
  };
}

const ourStory = ({ timeline }) => {
  const then = { imageUrl: "/_success-story/images/then.jpg" };
  const now = { imageUrl: "/_success-story/images/now.jpg" };

  console.log(timeline);

  return (
    <>
      <Head>
        <title>Our Story | Independent Financial Group San Diego</title>
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={
            "bg-[url('/_success-story/images/hero.webp')] bg-bottom bg-cover bg-left"
          }
        >
          <div>
            <h1 className="mb-8 flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
              <Image
                src={highlight}
                alt="decorative heading highlight graphic"
              />
              Our Success Story
            </h1>
          </div>
        </PageHeader>
        <section className="my-32">
          <Container>
            <Breadcrumb />
            <div className="gap-5 lg:grid lg:grid-cols-2">
              <div className="self-center">
                <h2 className="flex items-center gap-2 text-3xl font-bold text-hazard-blue-500 ">
                  <Image src={highlight} alt="decorative heading highlight" />
                  Built on a handshake
                </h2>
                <p className="text-xl">
                  “Scott and I built IFG one handshake at a time. We&apos;ve
                  made a personal connection with everyone we&apos;ve
                  recruited.”{" "}
                </p>
                <p className="mb-8 text-xl font-bold text-neon-orange-500">
                  - David Fischer, IFG Co-Founder
                </p>
                <p className="text-xl">
                  Over the last 20 years, our track record has spoken for
                  itself: we&apos;re pursuing quality over quantity, so we can
                  be the best not the biggest.
                </p>
              </div>
              <div>
                <ReactBeforeSliderComponent
                  firstImage={now}
                  secondImage={then}
                  className="rounded-[20px]"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="my-32 bg-[url('/_success-story/images/time.jpg')] bg-cover bg-center">
          <div className="h-full bg-dunkel-blue-900/25 py-10">
            <Container>
              <h2 className="mb-10 text-center text-3xl font-bold text-seabreeze-500">
                Committed to you from the beginning
              </h2>
              <Timeline data={timeline} />
            </Container>
          </div>
        </section>
      </PublicLayout>
    </>
  );
};

export default ourStory;
