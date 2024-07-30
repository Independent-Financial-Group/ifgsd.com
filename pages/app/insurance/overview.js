import React from "react";

// NEXT
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
// COMPONENTS
import Layout from "components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import OverviewVideo from "components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import DepartmentAnnouncements from "components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import TeamDirectory from "components/App/InternalPages/Overview/TeamDirectory/TeamDirectory";
import ContentLibrary from "components/App/InternalPages/Overview/ContentLibrary/ContentLibrary";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
// CONTENTFUL
import * as contentful from "utils/contentful";

//APOLLO IMPORTS FOR GQL
import apolloClient from "utils/apollo";
import { gql } from "@apollo/client";

// ICONS
import {
  ChartBarIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const teamData = await client.getEntries({
    content_type: "companyDirectory",
    "fields.department[match]": "Insurance",
  });

  const toolsData = await client.getEntries({
    content_type: "tools",
    limit: 3,
    "fields.department": "Insurance",
  });

  const ytdData = await apolloClient.query({
    query: gql`
      query getInsuranceProductionLeaderboards {
        insuranceProductionLeaderboards {
          pageInfo {
            hasNextPage
          }
          edges {
            node {
              title
              insuranceProductionLeaderboardFields {
                advisor {
                  dba
                  fieldGroupName
                  fullName
                  location
                }
                advisor2 {
                  dba
                  fieldGroupName
                  fullName
                  location
                }
                advisor3 {
                  dba
                  fieldGroupName
                  fullName
                  location
                }
                advisor4 {
                  dba
                  fieldGroupName
                  fullName
                  location
                }
                advisor5 {
                  dba
                  fieldGroupName
                  fullName
                  location
                }
                advisor6 {
                  dba
                  fieldGroupName
                  fullName
                  location
                }
                advisor7 {
                  dba
                  fieldGroupName
                  fullName
                  location
                }
                advisor8 {
                  dba
                  fieldGroupName
                  fullName
                  location
                }
                advisor9 {
                  dba
                  fieldGroupName
                  fullName
                  location
                }
                advisor10 {
                  dba
                  fieldGroupName
                  fullName
                  location
                }
              }
            }
          }
        }
      }
    `,
  });

  const formattedYtdData = Object.keys(
    ytdData.data.insuranceProductionLeaderboards.edges[0].node
      .insuranceProductionLeaderboardFields,
  )
    .map(
      (key) =>
        ytdData.data.insuranceProductionLeaderboards.edges[0].node
          .insuranceProductionLeaderboardFields[key],
    )
    .slice(1);

  return {
    props: {
      teamData: [...teamData.items],
      formattedYtdData,
      toolsData: [...toolsData.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const overview = ({ teamData, preview, formattedYtdData, toolsData }) => {
  const producerRankings = {
    year: {
      fullYear: "2023",
      items: [
        {
          name: "Herb Sharaishi",
          dba: "Shiraishi Financial Group",
          location: "Honolulu, HI",
        },
        {
          name: "Jacob Tujian",
          dba: "StoneKimbro",
          location: "Los Angeles, CA",
        },
        {
          name: "Josh Lee",
          dba: "U&T Financial, Inc",
          location: "Seattle, WA",
        },
        {
          name: "Joshua Szyman",
          dba: "Cambium Wealth",
          location: "Camp Verde, AZ",
        },
        {
          name: "Duayne Madl",
          dba: "Madl & Co.",
          location: "Shawnee, KS",
        },
        {
          name: "Bill Ryan",
          dba: "William R Ryan Company",
          location: "Laguna Niguel, CA",
        },
        {
          name: "Cindy (Ru) Bai",
          dba: "CindyBai Financial",
          location: "Rolling Hills Estate, CA",
        },
        {
          name: "Diane Kimbro",
          dba: "StoneKimbro",
          location: "Los Angeles, CA",
        },
        {
          name: "Chris Vizzi",
          dba: "South Coast Investment Advisors",
          location: "San Clemente, CA",
        },
        {
          name: "Scott Johnson",
          location: "Irvine, CA",
        },
      ],
    },
    yearToDate: {
      year: "2023",
      quarter: "Q4",
      items: [
        {
          name: "Herb Sharaishi",
          dba: "Shiraishi Financial Group",
          location: "Honolulu, HI",
        },
        {
          name: "Cindy (Ru) Bai",
          dba: "CindyBai Financial",
          location: "Rolling Hills Estates, CA",
        },
        {
          name: "Scott Johnson",
          location: "Irvine, CA",
        },
        {
          name: "Chris Vizzi",
          dba: "South Coast Investment Advisors",
          location: "San Clemente, CA",
        },
        {
          name: "Charles Wareham",
          dba: "Vaylark Financial Services",
          location: "Hartford, CT",
        },
        {
          name: "Xavier Ray",
          dba: "Retirement Strategies & Investments LLC",
          location: "Los Angeles, CA",
        },
        {
          name: "Mark Ruleman",
          dba: "Ruleman Asset Management & Planning",
          location: "Memphis, TN",
        },
        {
          name: "Greg Meyer",
          dba: "Pash & Benson International LTD",
          location: "Encino, CA",
        },
        {
          name: "Clark Stevens",
          dba: "Crosby Investment Group",
          location: "Santa Maria, CA",
        },
        {
          name: "John Hansch",
          dba: "Hansch Financial",
          location: "Solana Beach, CA",
        },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Insurance | Overview</title>
      </Head>
      <PageHeader
        breadCrumb="Departments > Insurance"
        pageName="Insurance Solutions"
        headerText="The IFG Insurance Department is committed to providing personalized service and thought leadership focused on business development. Our mission is to elevate the level of advice our advisors deliver by connecting them with the highest level of expertise, the latest technology tools and proven effective marketing systems."
      />
      <Layout preview={preview}>
        <ContentContainer>
          {/* <OverviewVideo /> */}
          <DepartmentAnnouncements data={[]} name="Insurance" />
          <GridTile
            tileTitle="Insurance Production Leaderboards"
            colSpan="col-span-full"
            icon={<ChartBarIcon className="h-6 w-6 text-seabreeze-500" />}
          >
            <div className="xl:grid xl:grid-cols-2 xl:gap-5">
              <div>
                <h3 className="mb-5 font-bold text-neon-orange-500">
                  Top 10 Insurance Producers of {producerRankings.year.fullYear}
                </h3>
                <ol className="space-y-1">
                  {producerRankings.year.items.map((producer, i) => (
                    <li className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-neon-orange-500 p-2 text-center text-xs font-semibold text-seabreeze-500">
                        {i + 1}
                      </div>
                      <div>
                        <p className=" inline-block text-xs font-semibold">
                          {producer.name},{" "}
                          <span className="font-light italic">
                            {producer.location}
                          </span>
                        </p>
                        <p className="text-[10px] text-hazard-blue-500">
                          {producer.dba}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="mb-5 font-bold text-neon-orange-500">
                  Top 10 Insurance Producer Rankings Year to Date for{" "}
                  {producerRankings.yearToDate.quarter}{" "}
                  {producerRankings.yearToDate.year}
                </h3>
                <ol className="space-y-1">
                  {formattedYtdData.map((producer, i) => (
                    <li className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-neon-orange-500 p-2 text-center text-xs font-semibold text-seabreeze-500">
                        {i + 1}
                      </div>
                      <div>
                        <p className="inline-block text-xs font-semibold">
                          {producer.fullName},{" "}
                          <span className="font-light italic">
                            {producer.location}
                          </span>
                        </p>
                        <p className="text-[10px] text-hazard-blue-500">
                          {producer.dba}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </GridTile>
          <TeamDirectory
            data={teamData}
            name="Insurance"
            colSpan="col-span-4"
          />
          <ContentLibrary
            department="Insurance"
            colSpan="col-span-8"
            fixedHeight
          />
          <GridTile colSpan="col-span-6" tileTitle="Insurance Tools">
            <div className="flex h-[90%] flex-col">
              <p className="mb-5 text-xs">
                Browse tools from our partners. Click "more" to see the full
                list of tools.
              </p>
              <ol className="mb-5 divide-y">
                {toolsData.map((tool) => (
                  <li
                    key={tool.sys.id}
                    className="flex gap-5 rounded px-1 py-2"
                  >
                    <img
                      src={`https:${tool.fields.thumbnail.fields.file.url}`}
                      className="aspect-square h-24 object-contain"
                    />
                    <div className="[&_p]:text-xs">
                      <h3 className="font-semibold">{tool.fields.title}</h3>
                      {tool.fields.partner && (
                        <p className="my-1 w-fit rounded-full bg-hazard-blue-100 p-2 italic text-hazard-blue-500">
                          {tool.fields.partner &&
                            tool.fields.partner.fields.partnerName}
                        </p>
                      )}
                      <p className="my-2 line-clamp-3">
                        {tool.fields.writtenContent}
                      </p>
                      {tool.fields.link && (
                        <a
                          className="flex w-fit items-center gap-1 align-middle text-xs font-bold text-neon-orange-500"
                          href={tool.fields.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>Launch</p>
                          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
              <Link
                href="/app/insurance/tools"
                className="mt-auto block rounded bg-neon-orange-500 p-2 text-center font-semibold text-seabreeze-500"
              >
                More
              </Link>
            </div>
          </GridTile>
          <GridTile
            tileTitle="Insurance Review Program"
            colSpan="col-span-6"
            additionalClasses="flex flex-col"
          >
            <img
              src="https://images.ctfassets.net/9lvru9ro1ti1/2wMjJiPCyFEVfS8sI0DdYP/cf3020c17ca5036d316a6b2ab24bd3e0/life-insurance-review-2023-scaled.jpg"
              className="mb-2 h-[150px] w-full rounded object-cover object-center"
            />
            <p className="text-xs">
              Built to provide you with a platform strategy that is proven to be
              effective at growing revenue while building deeper relationships
              with your clients.
            </p>
            <div className="my-5">
              <h3 className="mb-2 text-pretty font-semibold text-neon-orange-500">
                Reasons Why Periodic Reviews of Life Insurance Policies are
                Required
              </h3>
              <ol className="flex list-inside list-decimal flex-col gap-5 text-xs marker:font-bold marker:text-neon-orange-500">
                <li>Policy Owner insurance needs change</li>
                <li>Policy Performance</li>
                <li>Policy not properly structured</li>
                <li>Beneficiary reviews</li>
                <li>Record important product anniversary dates</li>
                <li>Better product options available</li>
              </ol>
            </div>
            <div className="">
              <Link
                href="/app/insurance/review-program"
                className="mt-auto block rounded bg-neon-orange-500 p-2 text-center font-semibold text-seabreeze-500"
              >
                Get Started
              </Link>
            </div>
          </GridTile>
          <GridTile scroll tileTitle="Marketing Resources" colSpan="col-span-6">
            <p className="text-sm">
              Browse marketing resources, carrier marketing microsites, and
              educational programs and seminars.
            </p>
            <ol className="space-y-4 divide-y-2 divide-gray-100 py-2 [&>li]:py-2 [&_li>img]:w-1/3">
              <li className="space-y-6">
                <img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/3wCcoWBwL60F8Bqv9eEy3N/0831838caeb71694a7e2af6966454feb/Impact.webp"
                  alt="impact partnership logo"
                />
                <div className="space-y-2">
                  <h4 className="font-semibold text-neon-orange-500">
                    Impact Partnership
                  </h4>
                  <span className="block w-fit rounded-full bg-blue-vibrant-100 p-2 text-xs text-blue-vibrant-500 ring-1 ring-inset ring-blue-vibrant-600">
                    Marketing Resource
                  </span>
                  <p className="text-xs leading-6">
                    Find the best resources for financial radio/television
                    programs, adult education, client appreciation events,
                    branding, and marketing all in one place. The best part -
                    your insurance and annuity production cover the marketing
                    costs as Impact Partnership helps you grow your sales to new
                    heights.
                  </p>
                  <Link
                    className="text-xs font-bold text-blue-vibrant-500 underline"
                    href="https://impactpartner.wistia.com/medias/og78n37xt8"
                    target="_blank"
                  >
                    Watch a video presentation
                  </Link>
                </div>
              </li>
              <li className="space-y-6">
                <img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/7MTJovYNzM5Fl4SvOTbU4e/ae61952fad768b192cadd9f13140b58d/prudential-logo.png?h=250"
                  alt="prudential logo"
                  className="w-[50px]"
                />
                <div className="space-y-2">
                  <h4 className="font-semibold text-neon-orange-500">
                    Prudential Life Marketing Micro Site
                  </h4>
                  <span className="block w-fit rounded-full bg-blue-vibrant-100 p-2 text-xs text-blue-vibrant-500 ring-1 ring-inset ring-blue-vibrant-600">
                    Marketing Microsite
                  </span>
                  <Link
                    href="https://view.ceros.com/prudential/trimester-marketing-2024-ili/p/7?mkt_tok=NzAzLU5IUi04NDkAAAGTFiyeC92RtLMSPLalj388eqXCtAT1tiVpskSxgmSM2E-QoIilkmvHbpghsVodUe_F7JblY2lKPgJMRvPpG_DJNWPzwWiSgm49mfLPSDfh"
                    className="text-xs text-blue-vibrant-500 underline"
                  >
                    Launch
                  </Link>
                </div>
              </li>
              <li className="space-y-6">
                <img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/6EdBcDXRUVd2IOaIquoe8Q/dddd6f2b021d0e526a7e761cab5c2cc7/american_retirement_institue_logo.png?h=250"
                  alt="prudential logo"
                  className="w-[50px]"
                />
                <div className="space-y-2">
                  <h4 className="font-semibold text-neon-orange-500">
                    American Retirement Insitute
                  </h4>
                  <span className="block w-fit rounded-full bg-blue-vibrant-100 p-2 text-xs text-blue-vibrant-500 ring-1 ring-inset ring-blue-vibrant-600">
                    Adult Education/Seminar
                  </span>
                  <p className="text-xs italic">Pre-Approved by Compliance</p>
                  <p className="text-xs leading-5">
                    Impact Partnership's exclusive seminar program, American
                    Retirement Institute (ARI), offers classroom-style courses
                    designed to give pre-retirees and retirees in your community
                    a detailed overview of common retirement topics like income
                    in retirement, taxes, social security, and health care.
                  </p>
                  <Link
                    href="https://gallery.mailchimp.com/ed907ad6fd8ba2b323ddb8edb/files/00c0d5ff-7f17-4434-abc0-0fa69f703183/ARI_IntroGuide_S01_TS.pdf"
                    target="_blank"
                    className="text-xs text-blue-vibrant-500 underline"
                  >
                    Learn More
                  </Link>
                </div>
              </li>
            </ol>
            <Link
              href="/app/insurance/marketing-resources"
              className="mt-5 rounded bg-neon-orange-500 p-2 text-center font-semibold text-neon-orange-50"
            >
              See All Resources
            </Link>
          </GridTile>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
