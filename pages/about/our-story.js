import React from "react";
import Head from "next/head";
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const timeline = await client.getEntries({
    content_type: "storyTimeline",
    order: 'sys.createdAt'
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

  return (
    <>
      <Head>
        <title>Our Story | Independent Financial Group San Diego</title>
      </Head>
      <PublicLayout>
        <section className="relative mb-32 h-[50vh] rounded-b-[40px] bg-[url('/backgrounds/wave-background-abstract-compressed.webp')] bg-cover bg-center">
          <div className="h-full w-full rounded-b-[40px] bg-hazard-blue-500/60">
            <Container>
              <div className="absolute top-1/2 -translate-y-1/2">
                <h1 className="text-2xl font-bold text-seabreeze-500">
                  <img
                    className="inline"
                    src="/graphicAssets/triangle-highlight.png"
                    alt="ornament highlight"
                  />{" "}
                  Built on a Handshake
                </h1>
                <h2 className="font-bold text-seabreeze-500 lg:text-6xl">
                  Our Story
                </h2>
              </div>
            </Container>
          </div>
        </section>
        <section>
          <Container>
            <VerticalTimeline>
              {timeline.map((item) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName="text-neon-orange-500 !font-bold"
                    contentStyle={{
                      background: "white",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid white",
                    }}
                    date={item.monthAndYear}
                    dateStyle={{ color: "red" }}
                    iconStyle={{
                      background: "#ff7f4e",
                      color: "#ffe6d4",
                    }}
                  >
                    <img
                      src="https://images.pexels.com/photos/18210778/pexels-photo-18210778/free-photo-of-rocks-and-grass-on-green-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="placeholder image"
                    />
                    <h3 className="vertical-timeline-element-title !my-5 text-2xl font-bold text-hazard-blue-500">
                      {item.cardTitle}
                    </h3>
                    <p className="text-base">{item.cardDetails}</p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default ourStory;
