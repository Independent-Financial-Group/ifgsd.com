import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";

import * as contentful from "/utils/contentful";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import React from "@heroicons/react";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const departmentMembers = await client.getEntries({
    content_type: "companyDirectory",
    "fields.department[match]": "Bank Products",
  });

  return {
    props: {
      departmentMembers: [...departmentMembers.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const Overview = ({ preview, departmentMembers }) => {
  return (
    <>
      <Head>
        <title>Overview | Bank Products</title>
      </Head>
      <PageHeader pageName="Overview" breadCrumb="Bank Products" />
      <Layout preview={preview}>
        <ContentContainer>
          <section className="space-y-4 xl:col-span-6">
            <h3 className="text-pretty text-3xl font-bold text-hazard-blue-500">
              A full suite of client lending and cash management solutions is
              now available!
            </h3>
            <p>
              Effective immediately, financial professionals affiliated with IFG
              can access a full suite of lending and cash management solutions
              for clients and prospects through our new partnership with the
              Advisor Credit Exchange (ACE). ACE’s platform will provide
              financial advisors using AccessPoint with a broad selection of
              secured and unsecured loan options, from $10,000 to $25 million
              and above, through the Launch Pad on the AccessPoint main screen.
              Moreover, UBS Cash Management solutions are available through the
              platform as well. Corestone Sweep Checking will be placed for
              account opening in Operations.
            </p>
            <p>
              Potential lending and banking opportunities are gathered based on
              each client’s financial data and come from a list of partners
              curated by their product offering, service quality, and financing
              experience. You and your team can simply identify pre-qualified
              client loan opportunities and directly connect clients to
              participating lenders for non-purpose securities-backed loans,
              residential real estate loans, unsecured loans, and cash
              management solutions.
            </p>
          </section>
          <section className="space-y-4 xl:col-span-6">
            <h3 className="text-pretty text-3xl font-bold text-hazard-blue-500">
              Current Providers Include
            </h3>
            <ul className="space-y-1">
              <li>
                <strong>Signature Loans</strong>: LightStream (a division of
                Truist), upgrade.
              </li>
              <li>
                <strong>Securities-backed Lines</strong>: First Citizens and
                Nationwide Financial.
              </li>
              <li>
                <strong>Cash Management Solutions</strong>: Cash Management
                through UBS.
              </li>
            </ul>
            <p>
              To continue to compete and succeed in the wealth management arena,
              IFG believes that you must address both sides of your clients’
              balance sheets. Helping clients build net worth means managing
              credit as strategically as investments. This platform now gives
              you access to solutions for your clients’ financing and banking
              needs.
            </p>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-neon-orange-500">
                Your Bank Product Team Member
              </h3>
              <div>
                {departmentMembers.map((member) => (
                  <div key={member.sys.id} className="flex items-center gap-5">
                    <img
                      src={`https:${member.fields.headshot.fields.file.url}`}
                      className="h-20 w-20"
                    />
                    <div className="space-y-2">
                      <div>
                        <p className="text-lg font-bold">
                          {member.fields.fullName}
                        </p>
                        <p>{member.fields.title}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <PhoneIcon className="h-4 w-4" />
                          <p>(800) 269-1903 x{member.fields.extension}</p>{" "}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <EnvelopeIcon className="h-4 w-4" />
                          <Link href={`mailto:${member.fields.eMail}`}>
                            {member.fields.eMail}
                          </Link>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div></div>
            </div>
          </section>
        </ContentContainer>
        <section className="bg-[url('https://images.ctfassets.net/9lvru9ro1ti1/3V0P5hFofZqSM0vefdl8ae/b5f588662f12486f93cb5edd40ef5e67/sandiego-drone-shot-alex-garcia.jpg')] bg-cover bg-no-repeat">
          <div className="bg-ifg-turqoise-500/25 mb-8 !h-[100%] py-8">
            <ContentContainer>
              <div className="text-ifg-turqoise-800 col-span-full space-y-4 text-center">
                <h3 className="text-5xl font-bold">Webinar Replay</h3>
                <p className="text-xl font-medium text-white">
                  If you missed our national launch webinar, please watch below.
                </p>
                <div className="flex justify-center">
                  <div className="rounded bg-neon-orange-500 p-2 shadow-2xl">
                    <ReactPlayer url="https://vimeo.com/857635850" controls />
                  </div>
                </div>
              </div>
            </ContentContainer>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Overview;
