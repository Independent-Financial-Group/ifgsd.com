import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import JobBoard from "../../components/JobBoard/JobBoard";
import PublicLayout from "../../components/PublicLayout/PublicLayout";
import Container from "../../components/Container/Container";

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

const workAtIFG = ({ data }) => {
  return (
    <>
      <Head>
        <title>Work at IFG | Independent Financial Group San Diego</title>
      </Head>
      <PublicLayout>
        <section className="relative mb-32 h-[50vh] rounded-b-[40px] bg-[url('/careers/hero-image.jpg')] bg-cover bg-bottom">
          <div className="h-full w-full rounded-b-[40px] bg-hazard-blue-500/60">
            <Container>
              <div className="absolute top-1/2 -translate-y-1/2 max-w-prose">
                <h1 className="text-2xl font-bold text-seabreeze-500">
                  <img
                    className="inline"
                    src="/graphicAssets/triangle-highlight.png"
                    alt="ornament highlight"
                  />{" "}
                  Endless Opportunities
                </h1>
                <h2 className="font-bold text-seabreeze-500 lg:text-6xl">
                  Find your next career with IFG.
                </h2>
                <p className="text-seabreeze-500">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iure facere inventore incidunt officiis obcaecati maxime voluptate accusamus illo soluta.
                </p>
              </div>
            </Container>
          </div>
        </section>
        <section className="my-5">
          <Container>
            <JobBoard jobs={data} />
          </Container>
        </section>
      </PublicLayout>
    </>
  );
};

export default workAtIFG;
