import React from "react";

// IMPORT NEXT
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// IMPORT COMPONENTS
import JobBoard from "../../../components/JobBoard/JobBoard";
import PublicLayout from "../../../components/PublicLayout/PublicLayout";
import Container from "../../../components/Container/Container";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

// IMPORT ASSETS
import highlightWhite from "../../../public/_global-graphics/highlight-white.png";

export const getServerSideProps = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Basic ${process.env.NEXT_PUBLIC_BAMBOOHR_KEY_MERCEDES}`,
    },
  };

  const res = await fetch(
    "https://api.bamboohr.com/api/gateway.php/ifgsd/v1/applicant_tracking/jobs?statusGroups=Open&sortBy=department",
    options,
  );
  const data = await res.json();

  return { props: { data } };
};

const index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Work at IFG | Independent Financial Group San Diego</title>
      </Head>
      <PublicLayout>
        <section className="relative mb-32 h-[33vh] bg-gradient-to-r from-neon-orange-500 to-neon-orange-600">
          <Container>
            <div className="absolute top-1/2 max-w-prose -translate-y-1/2">
              <h1 className="flex items-center gap-2 text-5xl font-bold text-seabreeze-500">
                <Image src={highlightWhite} alt="ornament highlight" /> Open
                Positions
              </h1>
            </div>
          </Container>
        </section>
        <section className="my-5">
          <Container>
            <Breadcrumb />
            <JobBoard jobs={data} />
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default index;
