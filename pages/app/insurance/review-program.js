import React from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import OverviewVideo from "components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import GridTile from "components/App/GridTile/GridTile";

// VIDEO IMPORTS
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { Grid } from "swiper";

// UTILS
import * as contentful from "utils/contentful";
import { useDataSorter } from "utils/useDataSorter";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const ashResources = await client.getEntries({
    // search on the podcast content type
    content_type: "insuranceReviewProgramResources",
    // pass reference to the partner field  content type ID which in this case is "partners"
    "fields.partner.sys.contentType.sys.id": "partners",
    // match the partner name to the filtered partner for the specific slug
    "fields.partner.fields.partnerName[match]": "Ash Brokerage",
    order: "-fields.title",
  });

  const dbsResources = await client.getEntries({
    // search on the podcast content type
    content_type: "insuranceReviewProgramResources",
    // pass reference to the partner field  content type ID which in this case is "partners"
    "fields.partner.sys.contentType.sys.id": "partners",
    // match the partner name to the filtered partner for the specific slug
    "fields.partner.fields.partnerName[match]": "DBS",
    order: "-fields.title",
  });

  const marketingResources = await client.getEntries({
    content_type: "insuranceReviewProgramResources",
    "fields.category[nin]": "FMO Partner Resource",
    order: "-fields.title",
  });

  return {
    props: {
      ashResources: [...ashResources.items],
      dbsResources: [...dbsResources.items],
      marketingResources: [...marketingResources.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const reviewProgram = ({
  preview,
  ashResources,
  dbsResources,
  marketingResources,
}) => {
  const resasonsReviewsAreRequired = [
    {
      heading: "Policy owner insurance needs change",
      bullets: [
        "Reason for the insurance no longer exists such as estate tax, special needs, etc. change in financial, business, or personal situation.",
        "Personal changes include marriages, divorce, new child, special needs child, new job, started a business, death in family, inheritance, buying a new home, retired, health changes and changes in financial condition.",
      ],
    },
    {
      heading: "Policy performance",
      bullets: [
        "Prolonged low interest rate environment resulted in many policies underperforming.",
        "Insurance Companies exited the market like Met Life, Hartford, Voya, OH National and others. Policies are being serviced by other insurance companies or professional service organizations that have no incentive to offer policy performance outside of the minimum guaranteed contractual obligations.",
        "Underfunded policies or policies with excessive loans and loan interest.",
        "Policy has underperformed expectations.",
        "Policy is fully funded not requiring additional contributions that are still being made.",
      ],
    },
    {
      heading: "Policy not properly structured",
      bullets: [
        "Trust updates needed. Business ownership issues 101J. Goodman Triangle. Not maximizing tax advantages. 7702B LTCI.",
      ],
    },
    {
      heading: "Beneficiary reviews",
      bullets: [],
    },
    {
      heading: "Record important product anniversary dates",
      bullets: [
        "End of level term",
        "Conversion period",
        "Rider end dates",
        "Future purchase option periods",
      ],
    },
    {
      heading: "Better product options available",
      bullets: [
        "LTCI riders available on new products",
        "Lower cost on new issue products",
        "Insured health has improved, or they qui smoking and are now elegible for better rates.",
      ],
    },
  ];

  const sortedMarketingData = useDataSorter(marketingResources, "category");

  return (
    <>
      <Head>
        <title>Insurance Review Program</title>
      </Head>
      <PageHeader
        pageName="Life Insurance Review Marketing Program"
        breadCrumb="Insurance"
      />
      <Layout preview={preview}>
        <ContentContainer>
          <GridTile
            tileTitle="Introduction"
            colSpan="col-span-6"
            icon={<VideoCameraIcon className="h-6 w-6" />}
          >
            <ReactPlayer
              controls
              width={"100%"}
              url={"https://vimeo.com/870728361/435e872d7c?share=copy"}
            />
          </GridTile>
          <GridTile colSpan={"col-span-6"}>
            <img
              src="https://images.ctfassets.net/9lvru9ro1ti1/32j0XvptaDRMoWaEVIubh0/623a1818b90555b86a83df50e24500e2/insurance_review_program_banner.jpg"
              className="h-[200px] w-full rounded object-cover"
            />
            <h2 className="my-2 text-pretty font-semibold text-neon-orange-500">
              Six Reasons Why Periodic Reviews of Life Insurance Policies are
              Required
            </h2>
            <ol className="grid grid-cols-3 gap-5">
              {resasonsReviewsAreRequired.map((reason, i) => (
                <li key={reason.heading}>
                  <h3 className="flex flex-col items-center gap-2 text-center text-xs">
                    <span className="h-6 w-6 rounded-full bg-neon-orange-500 p-1 text-center font-bold text-white">
                      {i + 1}
                    </span>
                    <span>{reason.heading}</span>
                  </h3>
                </li>
              ))}
            </ol>
          </GridTile>
          <GridTile
            tileTitle="Simple Step-By-Step Process"
            colSpan={"col-span-full"}
          >
            <ol className="flex justify-center gap-x-5">
              <li className="flex flex-col gap-5">
                <p className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-hazard-blue-500 p-2 text-center text-2xl font-bold text-white">
                  1
                </p>
                <p className="text-center text-xs font-semibold">
                  Review in-force product information & illustrations
                </p>
              </li>
              <li className="flex flex-col gap-5">
                <p className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-hazard-blue-500 p-2 text-center text-2xl font-bold text-white">
                  2
                </p>
                <p className="text-center text-xs font-semibold">
                  Uncover client goals & objectives
                </p>
              </li>
              <li className="flex flex-col gap-5">
                <p className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-hazard-blue-500 p-2 text-center text-2xl font-bold text-white">
                  3
                </p>
                <p className="text-center text-xs font-semibold">
                  Complete underwriting assessment
                </p>
              </li>
              <li className="flex flex-col gap-5">
                <p className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-hazard-blue-500 p-2 text-center text-2xl font-bold text-white">
                  4
                </p>
                <p className="text-center text-xs font-semibold">
                  Conduct product analysis
                </p>
              </li>
              <li className="flex flex-col gap-5">
                <p className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-hazard-blue-500 p-2 text-center text-2xl font-bold text-white">
                  5
                </p>
                <p className="text-center text-xs font-semibold">
                  Make recommendations
                </p>
              </li>
            </ol>
          </GridTile>
          <GridTile colSpan={"col-span-6"} tileTitle={"policy review results"}>
            <ol className="list-inside list-decimal space-y-2">
              <li>Lower insurance costs and outlay</li>
              <li>Increase policy benefits</li>
              <li>Improve Product Guarantees</li>
              <li>Added benefits such as long-term care</li>
              <li>Maximize account values</li>
              <li>Improve liquidity</li>
              <li>Corrected structural problems and updated beneficiaries</li>
              <li>Documented action dates</li>
              <li>Updates goals & objectives</li>
            </ol>
          </GridTile>
          <GridTile
            colSpan={"col-span-6"}
            tileTitle={"IFG Insurance Review Resources"}
          >
            <ol className="list-inside list-decimal space-y-2">
              <li>Program marketing</li>
              <li>Intake forms and authorizations</li>
              <li>
                Point of sale assistance including initial discovery meetings
              </li>
              <li>Discovery meeting support</li>
              <li>Product comparisons</li>
              <li>Renegotiation of rates with insurance companies</li>
              <li>
                Client discovery needed to uncover all issues and insurance
                needs
              </li>
              <li>Underwriting assessment</li>
              <li>Recommendation development support</li>
            </ol>
          </GridTile>
          <section className="col-span-6">
            <h3 className="text-2xl font-bold text-neon-orange-500">
              FMO Partner Resources
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="mt-6 space-y-4 font-semibold">
                <h4 className="text-blue-vibrant-400">Ash Brokerage</h4>
                <ol className="flex flex-col space-y-1">
                  {ashResources.map((asset) => (
                    <li key={asset.sys.id} className="text-xs font-semibold">
                      <Link
                        target="_blank"
                        href={`https:${asset.fields.file.fields.file.url}`}
                        className="hover:text-blue-vibrant-500 flex items-center gap-2"
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        <span>{asset.fields.title}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-6 space-y-2 font-semibold">
                <h4 className="text-blue-vibrant-400">DBS</h4>
                <ol className="flex flex-col space-y-1">
                  {dbsResources.map((asset) => (
                    <li
                      key={asset.sys.id}
                      className="w-fit text-xs font-semibold"
                    >
                      <Link
                        target="_blank"
                        href={`https:${asset.fields.file.url}`}
                        className="flex items-center gap-2"
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        <span>{asset.fields.title}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
          <section className="col-span-6 space-y-2">
            <h3 className="text-2xl font-bold text-neon-orange-500">
              Marketing Resources
            </h3>
            <ol className="grid grid-cols-2 gap-5">
              {Object.keys(sortedMarketingData).map((key) => (
                <li key={key}>
                  <h4 className="text-blue-vibrant-400 font-semibold">{key}</h4>
                  <ol className="space-y-1">
                    {sortedMarketingData[key].map((resource) => (
                      <li key={resource.sys.id}>
                        <Link
                          target="_blank"
                          href={`#`}
                          className="flex items-center gap-2 text-xs"
                        >
                          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                          <span>{resource.fields.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ol>
          </section>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default reviewProgram;
