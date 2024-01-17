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
import Button from "../../components/Button/Button";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import highlightBlue from "../../public/_global-graphics/highlight-blue.png";
import gradientWave from "../../public/_success-story/graphics/gradient-wave.png";
import ctaImage from "../../public/_success-story/images/cta.png";
import imageHighlightOrange from "../../public/_global-graphics/image-highlight-orange.png";
import imageHighlightBlue from "../../public/_global-graphics/image-highlight-blue.png";

// CONTENTFUL

const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const timeline = await client.getEntries({
    content_type: "storyTimeline",
    order: "fields.title",
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

  return (
    <>
      <Head>
        <title>Our Story | Independent Financial Group San Diego</title>
        <meta name="description" content="The history of IFG formed in 2003." />
        <meta name="robots" content="follow, index" />
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
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
            <div className="gap-5 lg:grid lg:grid-cols-2">
              <div className="mb-10 self-center lg:mb-0">
                <h2 className="mb-8 flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
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
        <section className="my-10 bg-[url('/_success-story/images/time.jpg')] bg-cover bg-center lg:my-32">
          <div className="h-full bg-dunkel-blue-900/25 py-10">
            <Container>
              <h2 className="mb-10 text-center text-3xl font-bold text-seabreeze-500">
                Committed to you from the beginning
              </h2>
              <Timeline data={timeline} />
            </Container>
          </div>
        </section>
        <section className="relative my-10 lg:my-32">
          <Image
            src={gradientWave}
            className="absolute bottom-0 -z-10 w-full lg:-bottom-16"
          />
          <Container>
            <div className="lg:grid lg:grid-cols-2">
              <div className="mb-10 lg:mb-0">
                <h2 className="mb-10 flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight" />{" "}
                  Let us be a part of your success story
                </h2>
                <p className="mb-10 text-xl">
                  We&apos;re here to take your business to the next level.
                </p>
                <Button href={"/join/contact"} type={"primary"}>
                  Contact Us
                </Button>
              </div>
              <div className="relative">
                <Image
                  src={imageHighlightBlue}
                  alt="decorative image ornament"
                  className="absolute -top-3"
                />
                <Image
                  src={imageHighlightOrange}
                  alt="decorative image ornament"
                  className="absolute -bottom-3 right-0"
                />
                <Image src={ctaImage} />
              </div>
            </div>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default ourStory;
