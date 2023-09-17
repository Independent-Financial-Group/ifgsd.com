import React, { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import JobBoard from "../../../components/JobBoard/JobBoard";

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
    options
  );
  const data = await res.json();

  return { props: { data } };
};

const index = ({ data }) => {
  return (
    <>
      <Nav />
      <main>
        <section className="max-w-screen-xl mx-auto my-32">
          <div>
            <JobBoard jobs={data} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default index;
