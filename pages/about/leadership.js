import React, { useState } from "react";
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import LeadershipBioModal from "../../components/LeadershipBioModal/LeadershipBioModal";
import Head from "next/head";
import Container from "../../components/Container/Container";

// CONTENTFUL IMPORTS
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const initialData = await client.getEntries({ content_type: "leadership", order: "sys.createdAt" });

  const formattedData = initialData.items.map((item) => {
    return {
      ...item.fields,
      id: item.sys.id,
    };
  });

  return { props: { formattedData, initialData }, revalidate: 10 };
}

const leadership = ({ formattedData: data, initialData }) => {
  const [openModal, setOpenModal] = useState();
  const [currentBio, setCurrentBio] = useState();
  const [selectedBio, setSelectedBio] = useState();

  const handleClick = (e) => {
    setOpenModal("default");
    setSelectedBio(e.target.dataset.id);
  };

  return (
    <>
      <Head>
        <title>Leadership Team | Independent Financial Group San Diego</title>
      </Head>
      <PublicLayout>
        <section className="relative mb-32 h-[50vh] rounded-b-[40px] bg-[url('/backgrounds/wave-background-abstract-compressed.webp')] bg-cover bg-center">
          <div className="h-full w-full rounded-b-[40px] bg-hazard-blue-500/60">
            <Container>
              <div className="absolute left-1/2 top-1/2 max-w-prose -translate-x-1/2 -translate-y-1/2 text-center text-seabreeze-500">
                <h1 className="mb-5 text-7xl font-bold ">
                  Our Leadership Team
                </h1>
                <p className="text-lg">
                  Independent Financial Group’s leadership team leverages years
                  of successful financial expertise to craft a top-tier
                  broker-dealer framework.
                </p>
              </div>
            </Container>
          </div>
        </section>
        <section className="mb-32">
          <Container>
            <h2 className="mb-5 text-center text-3xl font-bold text-neon-orange-500">
              Founders
            </h2>
            <div className="flex flex-row justify-center gap-5">
              <div>
                <img
                  className="mx-auto mb-5 rounded-[20px]"
                  src="https://placehold.co/500"
                />
                <h3 className="text-xl font-bold">Scott Heising</h3>
                <p className="text-bold">President, CEO, & Founder</p>
                <button className="font-bold text-neon-orange-500">
                  Read Bio &rarr;
                </button>
              </div>
              <div>
                <img
                  className="mx-auto mb-5 rounded-[20px]"
                  src="https://placehold.co/500"
                />
                <h3 className="text-xl font-bold">David Fischer</h3>
                <p className="text-bold">CMO</p>
                <button className="font-bold text-neon-orange-500">
                  Read Bio &rarr;
                </button>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <h2 className="mb-5 text-center text-3xl font-bold text-neon-orange-500">
              Senior Leadership
            </h2>
            <div className="grid grid-cols-3 justify-center gap-5">
              {data.map((person) => {
                return (
                  <div key={person.id}>
                    <img
                      className="mx-auto mb-5 w-[254px] rounded-bl-full rounded-br-full rounded-tl-full"
                      src={`https:${person.headshot.fields.file.url}`}
                    />
                    <h3 className="text-xl font-bold">{person.name}</h3>
                    <p className="text-bold">{person.title}</p>
                    <button
                      className="font-bold text-neon-orange-500"
                      onClick={handleClick}
                      data-id={person.id}
                    >
                      Read Bio &rarr;
                    </button>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
        <LeadershipBioModal
          openModal={openModal}
          entryId={selectedBio}
          setOpenModal={setOpenModal}
          bioId={selectedBio}
        />
      </PublicLayout>
    </>
  );
};

export default leadership;
