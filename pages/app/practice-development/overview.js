import React from "react";

// NEXT
import Head from "next/head";
import Link from "next/link";
// COMPONENTS
import Layout from "components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import OverviewVideo from "components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import DepartmentAnnouncements from "components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import TeamDirectory from "components/App/InternalPages/Overview/TeamDirectory/TeamDirectory";
import ContentLibrary from "components/App/InternalPages/Overview/ContentLibrary/ContentLibrary";
// CONTENTFUL
import * as contentful from "utils/contentful";

//APOLLO IMPORTS FOR GQL
import apolloClient from "utils/apollo";
import { gql } from "@apollo/client";

// ICONS
import { ChartBarIcon } from "@heroicons/react/24/outline";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  return {
    props: {
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const overview = ({ preview }) => {
  return (
    <>
      <Head>
        <title>Practice Development | Overview</title>
      </Head>
      <PageHeader
        breadCrumb="Departments > Practice Development"
        pageName="Overview"
      />
      <Layout preview={preview}>
        <ContentContainer>
          <OverviewVideo />
          <DepartmentAnnouncements data={[]} name="Practice Development" />
          <div className="col-span-full">
            <h2 className="text-3xl font-bold text-neon-orange-500">
              Educational resources for every phase of your practice.
            </h2>
          </div>
          <GridTile tileTitle="High Growth Practice" colSpan="col-span-4">
            <dl>
              <dt className="font-semibold text-neon-orange-500">Goal</dt>
              <dd className="text-xs leading-5 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente praesentium nihil aliquid consequatur nobis molestiae,
                fugit obcaecati perspiciatis aut. Laborum.
              </dd>
            </dl>
            <ul className="divide-y [&_li]:py-4">
              <li className="flex items-center gap-2">
                <img
                  className="h-14 w-14"
                  src="https://images.ctfassets.net/9lvru9ro1ti1/66jiAIFzZOGagK5D0MsAvU/ecfdf29ee34183f9d4a0979e225afd7e/solo-practitioner-icon.png"
                />
                <div className="flex-grow">
                  <p className="font-semibold">Solo Practitioner</p>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, quos!
                  </p>
                </div>
                <Link
                  href={
                    "/app/practice-development/education/high-growth/solo-practitioner"
                  }
                  className="rounded bg-neon-orange-200 p-2 text-xs font-semibold text-neon-orange-500"
                >
                  Access
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="h-14 w-14"
                  src="https://images.ctfassets.net/9lvru9ro1ti1/2ojTwIxX21NvMwkEJVUOzL/61d2df022456c3fddbb465da61111a9e/ensemble-partnership-icon.png"
                />
                <div className="flex-grow">
                  <p className="font-semibold">Ensemble/Parternership</p>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, quos!
                  </p>
                </div>
                <button className=" rounded bg-neon-orange-200 p-2 text-xs font-semibold text-neon-orange-500">
                  Access
                </button>
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="h-14 w-14"
                  src="https://images.ctfassets.net/9lvru9ro1ti1/4ttVGFgaSjolpgJupd1LjW/80f2d2e8f13b824034ad428817455f43/branch-office-icon.png"
                />
                <div className="flex-grow">
                  <p className="font-semibold">Branch Office</p>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, quos!
                  </p>
                </div>
                <button className="rounded bg-neon-orange-200 p-2 text-xs font-semibold text-neon-orange-500">
                  Access
                </button>
              </li>
            </ul>
          </GridTile>
          <GridTile tileTitle="Mature Practice" colSpan="col-span-4">
            <dl>
              <dt className="font-semibold text-neon-orange-500">Goal</dt>
              <dd className="text-xs leading-5 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                rerum earum pariatur impedit rem ex soluta mollitia ullam, quod
                alias.
              </dd>
            </dl>
            <ul className="divide-y [&_li]:py-4">
              <li className="flex items-center gap-2">
                <img
                  className="aspect-sqare h-14 w-14 rounded-full object-cover object-top"
                  src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="flex-grow">
                  <p className="font-semibold">Solo Practitioner</p>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, quos!
                  </p>
                </div>
                <button className=" rounded bg-neon-orange-200 p-2 text-xs font-semibold text-neon-orange-500">
                  Access
                </button>
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="aspect-sqare h-14 w-14 rounded-full object-cover object-top"
                  src="https://images.pexels.com/photos/6457562/pexels-photo-6457562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div className="flex-grow">
                  <p className="font-semibold">Ensemble/Parternership</p>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, quos!
                  </p>
                </div>
                <button className="rounded bg-neon-orange-200 p-2 text-xs font-semibold text-neon-orange-500">
                  Access
                </button>
              </li>
              <li className="flex items-center gap-2">
                <img
                  className="aspect-sqare h-14 w-14 rounded-full object-cover object-top"
                  src="https://www.uctoday.com/wp-content/uploads/2023/10/What-Are-Office-Neighborhoods-Exploring-Workplace-Neighborhoods.jpeg"
                />
                <div className="flex-grow">
                  <p className="font-semibold">Branch Office</p>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, quos!
                  </p>
                </div>
                <button className="rounded bg-neon-orange-200 p-2 text-xs font-semibold text-neon-orange-500">
                  Access
                </button>
              </li>
            </ul>
          </GridTile>
          <GridTile tileTitle="Transforming Practice" colSpan="col-span-4">
            <dl>
              <dt className="font-semibold text-neon-orange-500">Goal</dt>
              <dd className="text-xs leading-5 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente praesentium nihil aliquid consequatur nobis molestiae,
                fugit obcaecati perspiciatis aut. Laborum.
              </dd>
            </dl>
            <ul className="divide-y [&_li]:py-4">
              <li className="flex items-center gap-2">
                <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <div className="flex-grow">
                  <p className="font-semibold">Solo Practitioner</p>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, quos!
                  </p>
                </div>
                <button className="rounded bg-neon-orange-200 p-2 text-xs font-semibold text-neon-orange-500">
                  Access
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <div className="flex-grow">
                  <p className="font-semibold">Ensemble/Parternership</p>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, quos!
                  </p>
                </div>
                <button className=" rounded bg-neon-orange-200 p-2 text-xs font-semibold text-neon-orange-500">
                  Access
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <div className="flex-grow">
                  <p className="font-semibold">Branch Office</p>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, quos!
                  </p>
                </div>
                <button className="rounded bg-neon-orange-200 p-2 text-xs font-semibold text-neon-orange-500">
                  Access
                </button>
              </li>
            </ul>
          </GridTile>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
