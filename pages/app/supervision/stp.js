import React, { useState } from "react";
import Link from "next/link";

import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import Head from "next/head";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";

import * as contentful from "../../../utils/contentful";

export async function getStaticProps({ preview }) {
  return {
    props: {
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const overview = ({ preview }) => {
  const stpResources = [
    {
      fileName: "New Accounts and Updates - DIRECT II",
      url: "https://assets.ctfassets.net/9lvru9ro1ti1/5HIMYqSDE1X2Uo9aHJfnBI/31f7b93963f39862c147971592ea8d20/New-Accounts-and-Updates-DIRECT-II.pdf.pdf",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
    {
      fileName: "New Accounts and Updates - Pershing II",
      url: "https://assets.ctfassets.net/9lvru9ro1ti1/5eXelqEwpfgfSSsYIcjixJ/bcc04c7e8fa9d3579ae1992e589b4557/New-Accounts-and-Updates-Pershing-II.pdf",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
    {
      fileName: "STP Flowchart",
      url: "https://assets.ctfassets.net/9lvru9ro1ti1/5ir1amRZjeHqVJ84qdH8Jy/0ff073c5ef2f8c6792d3f4b6d429ff65/STP-Flowchart-1.pdf",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
    {
      fileName: "STP Overview Guide",
      url: "https://assets.ctfassets.net/9lvru9ro1ti1/2IzYtvyh0O1fcuGsYh34UA/117a16e3696ba33c11ca790ce5c25356/STP-Overview-Guide-1.pdf",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
    {
      fileName: "STP Overview Guide with Signix",
      url: "https://assets.ctfassets.net/9lvru9ro1ti1/2NP7taYghLuXpWtOmSGGEq/15ff17b4b4f79f35dede6b73f97c920d/Using-Traditional-Signatures.pdf",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
    {
      fileName: "STP Reminders and FAQs",
      url: "https://assets.ctfassets.net/9lvru9ro1ti1/4y9VL8gEkTIm9RWm0QrPXS/2ac7d2a0d10e1a4938078db66b7e5b44/STP-Reminders-FAQS-2.pdf",
      icon: <DocumentArrowDownIcon className="h-4 w-4" />,
    },
  ];

  const faqs = [
    {
      heading: "Generating Account Numbers",
      iconUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/7aTzWUcA4D6RCTg36kWegV/92885e43a0a80053430f5a4d218fad11/stp_icon_1.png?h=250",
      description:
        "When establishing a Pershing account, don’t forget to generate your Pershing account number by appropriate range on the top right corner of the “Add Account” screen on page 1 to ensure assignment and carryover to the completed account.",
    },
    {
      heading: "Additional Pershing Accounts",
      iconUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/eQ3lv5GlowijhIMDUnFf1/4fb5b27f4c31c3f1d4530b3f4a9bffcc/stp_icon_2.png?h=250",
      description:
        "When adding an additional Pershing account to an existing completed account in the Custodian Accounts tab, don’t forget to “Add to List” and “Save Account Changes” at the top right of the Gateway page to save the account generated.",
    },
    {
      heading: "Drag & Drop Documents",
      iconUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/1zpVh8BoW1AQuOAOUClypU/5c2022cd919f7b825ff256fe9e5998e8/stp_icon_3.png?h=250",
      description:
        "When creating a Workflow ticket, always drag & drop your documents into the documents field. ALWAYS check off the “document type” in the pop-up box for templating. This is also where you enter either the Pershing or Custodian Account number and NOT the Gateway ID.",
    },
    {
      heading: "Work in Gateway",
      iconUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/2O85RnFSZmt8hd3Ov9kfEJ/4c69a3a8dbfb0d5a8a8e437ba606356b/gateway__icon_80x80_turqoise.png?h=250",
      description:
        "Always work out of the Gateway account whether as a Draft or Completed for creating Workflow tickets, accessing existing Workflow tickets, order entry, etc. ",
    },
    {
      heading: "Save as Draft",
      iconUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/NcqdFTh7SnmTmtF6KOk4k/0feb674b2beb5be182d37a55ba088da2/stp_icon_4.png?h=250",
      description:
        "When creating an account, ALWAYS save as a draft until you have all signed documentation and have verified all data is accurate. ",
    },
    {
      heading: "Always Save Account Changes",
      iconUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/3zPUigcb252rPdv2BlpbXO/cc5be0b89ce13b1aa5a8ba622e93ee02/stp_icon_6.png?h=250",
      description:
        "When saving an account update to the Owner, always click on “Save Account Changes” at the top right of the page and NOT “Save Owner Alone”.",
    },
    {
      heading: "Adding Documents to Tickets",
      iconUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/3oOov41MnTM51gklwfwzKm/e7c209798a22aa55a09c583d4156f8a2/stp_icon_7.png?h=250",
      description:
        "Within the completed account access the Workflow ticket under the “Workflow Tickets” tab and double-click the corresponding ticket. Then, click on the “Documents” tab, click the " +
        " sign and “Add Document.” Ignore the templating box.",
    },
    {
      heading: "Supervision Review Queue",
      iconUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/7lK7ckMjzXIty94HPePb6F/ded4e338d3ddc2ef0faba40a3519addb/stp_icon_8.png?h=250",
      description:
        "Always submit all documentation requiring a Supervisory Principal signature to the Supervision Review queue.",
    },
    {
      heading: "Don't Forget to Link",
      iconUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/64oIxlBzFeY5D3NxslgCMz/85c930f78fed06b9e43be4f0d1782147/stp_icon_9.png?h=250",
      description:
        "During this transition phase, always link your Supervisory Principal or Supervisory Principal Associate to submitted tickets.",
    },
    {
      heading: "Adding Trusted Contact",
      iconUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/Pj302zK8odGfVLk3OuEfy/dd782d2d793668988d89b765a4c4be47/stp_icon_10.png?h=250",
      description:
        "When adding a Trusted Contact, you will first add an additional Owner Type to the Trusted Contact in the “Client Information” fields. Remember to “Save Account Changes” at the top right of the page.",
    },
  ];

  return (
    <>
      <Head>
        <title>Straight Through Processing | Supervision</title>
        <meta
          name="description"
          content="IFG is committed to helping you retain your true independence through Straight Through Processing. This new initiative enables branches to open new accounts and make updates to existing accounts using Gateway."
        />
      </Head>
      <PageHeader
        breadCrumb={"Supervision"}
        pageName={"Straight Through Processing"}
      />
      <Layout preview={preview}>
        <ContentContainer>
          <section className="col-span-full lg:grid lg:grid-cols-2 lg:gap-5">
            <div className="space-y-6">
              <h3 className="text-ifg-turqoise-500 max-w-prose text-pretty text-xl font-bold">
                Committed to helping you retain your true independence through
                Straight Through Processing
              </h3>
              <p className="max-w-prose">
                This new initiative enables branches to open new accounts and
                make updates to existing accounts using Gateway. IFG has
                committed 100% of its resources to your successful transition
                and implementation of Straight Through Processing. Watch this
                short video to learn more about how Straight Through Processing
                can help your business.
              </p>
              <div className="rounded bg-white px-4 py-2 shadow">
                <h4 className=" font-bold text-neon-orange-500">Resources</h4>
                <ul className="space-y-4">
                  {stpResources.map((resource) => (
                    <li
                      key={resource.url}
                      className="bg-ifg-turqoise-100 text-ifg-turqoise-500 rounded px-1 py-2 font-semibold"
                    >
                      <Link
                        href={resource.url}
                        className="flex items-center gap-1"
                        target="_blank"
                      >
                        {resource.icon}
                        <span>{resource.fileName}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="sticky top-10 rounded-lg bg-white px-4 shadow">
                <ReactPlayer
                  controls
                  url={"https://vimeo.com/375761691/566a272a93"}
                  width={"100"}
                />
              </div>
            </div>
          </section>
          <GridTile tileTitle={"Reminders & FAQs"} colSpan={"col-span-full"}>
            <ul className="auto-rows-fr lg:grid lg:grid-cols-3 lg:gap-5 ">
              {faqs.map((faq) => (
                <li
                  key={faq.heading}
                  className="bg-ifg-turqoise-100  space-y-4 rounded px-2 py-2 last:col-start-2"
                >
                  <img
                    src={faq.iconUrl}
                    alt="icon"
                    className="mx-auto mt-4 h-16 w-16"
                  />
                  <h4 className="text-ifg-turqoise-500 text-center text-lg font-bold">
                    {faq.heading}
                  </h4>
                  <p className="text-ifg-turqoise-700">{faq.description}</p>
                </li>
              ))}
            </ul>
          </GridTile>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
