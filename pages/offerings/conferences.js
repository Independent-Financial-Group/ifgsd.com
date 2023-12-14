import React, { useState } from "react";

// IMPORT NEXT
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// IMPORT COMPONENTS
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import PageHeader from "../../components/PageHeader/PageHeader";
import Container from "../../components/Container/Container";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Modal from "../../components/Modal/Modal";

// IMPORT ASSETS
import highlight from "../../public/_global-graphics/highlight.png";
import onGoingTraining from "../../public/_conferences/images/on-going-training.png";
import rosewood from "../../public/_conferences/images/rosewood.webp";
import sandiego from "../../public/_conferences/images/sandiego.webp";
import phoenician from "../../public/_conferences/images/phoenician.jpg";
import familyFriendly from "../../public/_conferences/images/family-friendly.png";
import ornament from "../../public/_global-graphics/CTA-ornament.png";

// CONTENTFUL IMPORTS
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const initialData = await client.getEntries({
    content_type: "conferences",
    order: "fields.conferenceName",
  });

  const formattedData = initialData.items.map((item) => {
    return {
      ...item.fields,
      id: item.sys.id,
    };
  });

  return { props: { formattedData }, revalidate: 10 };
}

const conferences = ({ formattedData }) => {
  const [open, setOpen] = useState(false);
  const [selectedConference, setSelectedConference] = useState(null);

  const handleOpen = (e) => {
    setOpen(true);
    setSelectedConference(e.target.dataset.id);
  };

  return (
    <>
      <Head>
        <title>Conferences | Offerings | Independent Financial Group</title>
      </Head>
      <PublicLayout>
        <PageHeader
          bgPath={"bg-[url(/_conferences/images/hero.webp)] bg-center"}
        >
          <h1 className="flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
            <Image src={highlight} alt="decorative heading highlight" />
            Conferences
          </h1>
        </PageHeader>
        <section className="my-10 lg:my-32">
          <Container>
            <Breadcrumb />
            <div className="items-center lg:grid lg:grid-cols-2 lg:gap-5">
              <div>
                <h2 className="flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight" />
                  On-going training
                </h2>
                <p className="mt-5 text-xl">
                  At Independent Financial Group, we not only strive for
                  success, we celebrate it as well. We provide training
                  throughout the year to help you reach your goals.
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <Image
                  src={onGoingTraining}
                  alt="Conference training session panel"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="my-10 lg:my-32">
          <Container>
            <h2 className="mb-5  bg-gradient-to-r from-neon-orange-600 via-neon-orange-500 to-neon-orange-600 bg-clip-text text-center text-[90px] font-bold leading-none text-transparent lg:text-[160px]">
              Annual <br /> Events
            </h2>
            <Modal open={open} setOpen={setOpen} id={selectedConference} />
            <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-5">
              {formattedData.map((conference) => {
                return (
                  <div
                    key={conference.id}
                    className="flex flex-col rounded-t-xl bg-gradient-to-r from-neon-orange-500 to-neon-orange-600  lg:h-full"
                  >
                    <Image
                      src={`https:${conference.locationImage.fields.file.url}`}
                      width={
                        conference.locationImage.fields.file.details.image.width
                      }
                      height={
                        conference.locationImage.fields.file.details.image
                          .height
                      }
                      alt="entrace to the london rosewood hotel"
                      className="h-[280px] rounded-t-xl md:w-full md:object-cover"
                    />
                    <div className="my-auto flex items-center gap-2 px-4">
                      <h3 className="align-middle text-xl font-bold text-seabreeze-500">
                        {conference.conferenceName}
                      </h3>
                      <button
                        onClick={handleOpen}
                        data-id={conference.id}
                        className="text-sm text-seabreeze-500"
                      >
                        Read More &rarr;
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
        <section>
          <Container classes={"relative"}>
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <div>
                <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-hazard-blue-500">
                  <Image src={highlight} alt="decorative heading highlight" />
                  Family Friendly
                </h2>
                <Image
                  src={familyFriendly}
                  alt="Mother with her children at an IFG conference."
                  className="md:w-full"
                />
              </div>
              <Image
                src={ornament}
                alt="graphic ornament"
                className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:block lg:-translate-x-1/2 lg:-translate-y-1/2"
              />
              <div className="mt-5">
                <ul className="flex flex-col gap-5">
                  <li className="mx-auto w-[400px] rounded-xl bg-gradient-to-r from-hazard-blue-400 via-hazard-blue-500 to-hazard-blue-400 px-4 py-4 text-center text-2xl font-bold text-seabreeze-500">
                    Family Activities
                  </li>
                  <li className="mx-auto w-[400px] rounded-xl bg-gradient-to-r from-hazard-blue-400 via-hazard-blue-500 to-hazard-blue-400 px-4 py-4 text-center text-2xl font-bold text-seabreeze-500">
                    Fun Sessions
                  </li>
                  <li className="mx-auto w-[400px] rounded-xl bg-gradient-to-r from-hazard-blue-400 via-hazard-blue-500 to-hazard-blue-400 px-4 py-4 text-center text-2xl font-bold text-seabreeze-500">
                    Exciting Locations
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <section className="mt-10 rounded-[20px] bg-[url('/_conferences/images/cta.webp')] bg-cover bg-center lg:mt-32 lg:rounded-[40px]">
          <div className="h-full rounded-[20px] bg-gradient-to-r from-black/25 to-black lg:rounded-[40px]">
            <Container>
              <div className="py-32 lg:grid lg:grid-cols-2">
                <div></div>
                <div>
                  <h2 className="text-3xl font-bold text-hazard-blue-500">
                    That&apos;s Not All
                  </h2>
                  <p className="my-5 text-xl text-seabreeze-500">
                    Through out the year we offer additional online training
                    webinars.
                  </p>
                  <Link
                    className="rounded-lg bg-hazard-blue-500 px-4 py-2 text-seabreeze-500"
                    href="/join/contact"
                  >
                    Learn how you can participate
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </PublicLayout>
    </>
  );
};

export default conferences;
