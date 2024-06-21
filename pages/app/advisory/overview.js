import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import OverviewVideo from "components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import GridTile from "components/App/GridTile/GridTile";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import DepartmentAnnouncements from "components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import TeamDirectory from "components/App/InternalPages/Overview/TeamDirectory/TeamDirectory";

import {
  DocumentIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

import * as contentful from "/utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const teamData = await client.getEntries({
    content_type: "companyDirectory",
    "fields.department": "Wealth Management",
    "fields.termed": false,
  });

  return {
    props: {
      preview: preview || false,
      teamData: [...teamData.items],
    },
  };
}

const overview = ({ preview, teamData }) => {
  return (
    <>
      <Head>
        <title>Overview | Advisory</title>
        <meta
          name="description"
          content="An overview of the Alternative Investments Department at IFG."
        />
      </Head>
      <PageHeader pageName={"Advisory Overview"} />
      <Layout preview={preview}>
        <ContentContainer>
          <OverviewVideo />
          <DepartmentAnnouncements data={[]} name="Advisory" />
          <GridTile
            tileTitle="Advisory Solutions Brochure"
            icon={<DocumentIcon className="h-5 w-5" />}
            colSpan="col-span-4"
          >
            <div className="space-y-2">
              <img
                src="https://images.ctfassets.net/9lvru9ro1ti1/7rDYz3U0iYjPIZyzXzzLFx/3d3ec04e8208343ff3ae38f900948a1a/ifg-advisory-solutions-brochure-thumbnail-compressed.jpg"
                className="mx-auto h-[300px] rounded"
              />
              <p className="text-sm">
                Providing professional asset management and first class client
                service is crucial to your success as a financial advisor, yet
                both can be significantly time consuming. This brochure is
                designed to help you optimize your time and run a profitable
                client-centric practice.
              </p>
              <Link
                className="flex items-center justify-center gap-1 rounded bg-neon-orange-500 py-2 font-bold text-seabreeze-500"
                href="https://assets.ctfassets.net/9lvru9ro1ti1/MuINAvwTDmDFc7YVdzheP/070e2134e08c029952d8f80e97057d9b/Wealth_Management_Guide_052024-V1.pdf"
              >
                <ArrowTopRightOnSquareIcon className="h4 w-4" />
                <p>view</p>
              </Link>
            </div>
          </GridTile>
          <GridTile
            tileTitle="Wealth Management Platform"
            colSpan="col-span-4"
            additionalClasses="last:[&>div]:h-[89%]"
          >
            <div className="flex h-full flex-col space-y-4 text-sm">
              <img src="https://new.ifgsd.com/wp-content/uploads/2019/01/AccessPoint_Final_Logo_31317.png" />
              <p>
                AccessPoint is IFG&apos;s online, wealth management platform
                that allows you to efficiently and effectively manage client
                assets in a comprehensive fashion, tailored to your own
                investment management philosophy. Powered by Envestnet&apos;s
                Technology, the platform helps meet the needs of today&apos;s
                most demanding, most sophisticated clients.
              </p>
              <p>
                Being “Client-Centric”, AccessPoint employs a built-in four-step
                process that helps Advisors identify client goals, construct an
                appropriate strategy, implement the investment plan, and monitor
                its effectiveness through market cycles.
              </p>
              <Link
                className="!mt-auto flex items-center justify-center gap-1 rounded bg-neon-orange-500 py-2 font-bold text-seabreeze-500"
                href="https://man.envestnet.com/secure/login/login.jsp?firm=IFG"
              >
                <ArrowTopRightOnSquareIcon className="h4 w-4" />
                <p>Launch the AccessPoint Portal</p>
              </Link>
            </div>
          </GridTile>
          <GridTile tileTitle="Platform Introduction" colSpan="col-span-4">
            <div className="space-y-4">
              <img
                src="https://images.ctfassets.net/9lvru9ro1ti1/7Ifo0rnHqVfBdRha0JN5HT/9b7cd67437c85aaf5f6050d3b2910c00/AccessPoint-Platform-Introduction-Chart.png?h=250"
                className="mx-auto"
              />
              <p className="text-sm">
                With the most robust advisory platform in the industry,
                AccessPoint provides support in all aspects of your planning
                process: in-depth research, portfolio creation, portfolio
                management, clear and customized reports for your clients.
              </p>
            </div>
          </GridTile>
          <section className="col-span-full rounded bg-white px-4 py-2 shadow">
            <h3 className="font-bold uppercase text-neon-orange-500">
              The advisory planning process
            </h3>
            <div className="flex h-[90%] flex-col items-center justify-center">
              <img src="https://images.ctfassets.net/9lvru9ro1ti1/2ecMsPlTw26EHi1y5EwDHj/c42a08c5b75d47d84916d0d529f0db4e/WM-At-A-Glance-2018-Advisory-Planning-Process-in-Detail-Crop.png" />
            </div>
          </section>
          <TeamDirectory data={teamData} name="Advisory" colSpan="col-span-7" />
          <section className="col-span-5 space-y-2 rounded bg-white px-4 py-2 shadow">
            <h3 className="font-bold uppercase text-neon-orange-500">
              Wealth Mangement Framework
            </h3>
            <img src="https://images.ctfassets.net/9lvru9ro1ti1/13vMNzH6XH8S38DFxy1tTE/7cf1486495c58731fcc814de600c27a3/WM-At-A-Glance-2018-Framework.png" />
            <p className="text-sm">
              Streamline your practice, elevate performance, and provide
              excellent advisory services for your clients with our advisory
              program options.
            </p>
          </section>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
