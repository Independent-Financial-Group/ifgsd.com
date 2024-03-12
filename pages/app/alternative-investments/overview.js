import React, { useState } from "react";
import Link from "next/link";

import Layout from "../../../components/App/Layout/Layout";
import PageHeader from "../../../components/App/InternalPages/PageHeader/PageHeader";
import Head from "next/head";
import OverviewVideo from "../../../components/App/InternalPages/Overview/OverviewVideo/OverviewVideo";
import DepartmentAnnouncements from "../../../components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import ContentLibrary from "../../../components/App/InternalPages/Overview/ContentLibrary/ContentLibrary";
import TeamDirectory from "../../../components/App/InternalPages/Overview/TeamDirectory/TeamDirectory";
import ProductAdBanner from "../../../components/App/InternalPages/Overview/ProductAdBanner/ProductAdBanner";
import Modal from "components/App/Modal/Modal";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";

import * as contentful from "../../../utils/contentful";

import {
  WrenchIcon,
  DocumentIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;
  const department = "Alternative Investments";

  const teamMemberData = await client.getEntries({
    content_type: "companyDirectory",
    "fields.department[match]": department,
    "fields.termed": false,
    order: "fields.fullName",
  });

  const departmentAnnouncementData = await client.getEntries({
    content_type: "announcements",
    "fields.department[match]": department,
    order: "-fields.date",
  });

  return {
    props: {
      teamMemberData: [...teamMemberData.items],
      departmentAnnouncementData: [...departmentAnnouncementData.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const overview = ({ teamMemberData, preview, departmentAnnouncementData }) => {
  const [open, setOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState();

  const guides = {
    aiInsight: {
      name: "Ai Insight",
      guides: [
        {
          label: "User Guides",
          items: [
            {
              documentName: "Overview & Testing Requirements",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/6Q8Tc8vfzQlpEigYyMyLKz/2e1649746d974e543c08f263817c0e4c/AI-Insight-Testing-Requirement-For-Website.pdf",
            },
            {
              documentName: "How to: Access the AI Insight Website",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/2m4c8oFNEHMIdjYknPlT7J/ad3cc830dd4fa410c0ef91c84d53f39b/AI-Insight-Guide-How-to-Access-AI-Insight_06.30.2020.pdf",
            },
            {
              documentName:
                "How To: Access Financial Performance Summaries Tool",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/6m62lo04uEbwNCQ9qKI8eX/bac78fc17b3c731e1ae8420e4ba28e9a/AI-Insight-Resource-Financial-Reporting-Tool.pdf",
            },
            {
              documentName:
                "How To: Access the Comparative Reports within the Financial Performance Reporting Tool",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/6m62lo04uEbwNCQ9qKI8eX/bac78fc17b3c731e1ae8420e4ba28e9a/AI-Insight-Resource-Financial-Reporting-Tool.pdf",
            },
            {
              documentName: "How to: Access the Compliance Log",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/2zyr0evzKHHwgcVLNIVWDQ/915d2f2c2143abb0b4ce0343d6c0140f/AI-Insight-Guide-How-to-Access-Your-Compliance-Log.pdf",
            },
            {
              documentName: "How to: Access the Comparative Reporting Tool",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/50CBp8SRt4XWZQ89wsw25i/5380326f2acbdac0f68f38cdd75536c8/AI-Insight-Guide-How-to-Access-the-Comparative-Reporting-Tool.pdf",
            },
            {
              documentName: "How to Download Offering Documents on AI Insight",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/7LvFeTcq2K03kYwBPruyhS/89964fb0f4ebd02f5bca31831251c3e0/AI-Insight-Guide-How-to-Download-Offering-Documents.pdf",
            },
          ],
        },
      ],
    },
    iCapital: {
      name: "iCapital",
      guides: [
        {
          label: "Resources",
          items: [
            {
              documentName: "Memo: IFG's iCapital Platform Launch",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/5dFicVi0hYq6R5MdkE8SfV/a5196943298b4d0f6c5a68b0cf71f5c1/IFG-Memo-IFGs-iCapital-Platform-Launch.pdf",
            },
            {
              documentName: "Guidelines & Procedures - Hedge Funds on iCapital",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/PuyDVkctcSbRssAsQQDc6/f6496b9015d536cb175d82ead10ffb80/IFG-Guidelines-Procedures-Hedge-Funds-on-iCapital.pdf",
            },
            {
              documentName:
                "Guidelines & Procedures - Traditional Private Equity Funds Reg D",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/44kcyEnfLrhXgFwGCHKLad/d43b50fc9f9b38f83e05a8ca58f4ae56/IFG-Guidelines-and-Procedures-Traditional-Private-Equity-Funds-Reg-D-on-iCapital.pdf",
            },
            {
              documentName:
                "Guidelines & Procedures - Perpetual Private Equity Funds",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/7vyah0X66i1JAtYu0VtDmG/23e8d4a60ac42a386e6afffeb12107ff/IFG-Guidelines-and-Procedures-Perpetual-Private-Equity-Funds-on-iCapital.pdf",
            },
            {
              documentName:
                "How To: Access Required Hedge Fund & Private Equity Courses",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/5BIHCMqyCA3fdZutuXBOIu/be94c012357ba7ac0156229f1df50ec1/How-to-Access-Required-Hedge-Fund-and-Private-Equity-Courses-on-AI-Insight-updated-4.4.2023.pdf",
            },
            {
              documentName: "iCapital How To Guide",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/7JBomW1jh6d7RJnGwXd2hw/451553215fb7c7cae61022a4d85b21a3/iCapital-How-To-Guide-For-IFG-FINAL.pdf",
            },
            {
              documentName: "Documents & Resources Available on iCapital",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/2r59yifdaOjV9AaeCjXKPI/c308ed3b5c3a311872953f1080365cbb/Documents-and-Resources-Available-on-iCapital.pdf",
            },
            {
              documentName:
                "How To: Access iCapital Offerings & Subscription Documents",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/1iK1JQl6BOUBcWO0iniT3C/18a01c7a79dcac1cd4e1686d7ef99c7e/How-to-Access-iCapital-Offerings-and-Subscription-Documents.pdf",
            },
            {
              documentName: "Wholesaler Map - January 2024",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/5dzo2VRuAFy8AMFz270Imc/8be607aecd7902edfbfe2538af68a758/iCapital-PWS-AI-Coverage-Map_Jan-2024.pdf",
            },
          ],
        },
      ],
    },
    secondaryMarketTrading: {
      name: "Secondary Market Trading",
      guides: [
        {
          label: "Memo",
          items: [
            {
              documentName: "CTT Approval Memorandum",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/1Mky2ezOmJR2udt7uUvtNR/46e5ed7b1370a0249f5fcfe79c07f6fd/CTT-Approval-Memorandum.docx",
            },
          ],
        },
        {
          label: "Approved Products",
          items: [
            {
              documentName: "Approved Products for Purchase on CTT",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/2PJbnXmTzAKLj9FNVSOk9d/fe5b869bb5648c6e32cd763ef6f3ec88/Approved-Products-for-Purchase-on-CTT-2.6.2020.pdf",
            },
          ],
        },
        {
          label: "Rules & Requirements",
          items: [
            {
              documentName: "Overview: Secondary Market Rules & Requirements",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/17df3asRQ9FpAZejnDmAhf/9a6c67295ae282c71cb108cb848dfce0/CTT-Secondary-Market-Rules.pdf",
            },
          ],
        },
        {
          label: "Required Forms",
          items: [
            {
              documentName:
                "Liquidations: Secondary Market Liquidation Intent Form",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/3BV2D63qyFXYuZQT8wCSG2/1e794d63c945e07c96ba3712bf5e6440/Liquidations-Secondary-Market-Liquidation-Intent-Form.pdf",
            },
            {
              documentName:
                "Purchases: Secondary Market Purchase Suitability Form",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/2SsjuWIY7uBjKaz0jTYtA4/441f9ab6285eb0c366c95b39bc3c29e5/Purchases-Secondary-Market-Purchase-Suitability-Form.pdf",
            },
            {
              documentName:
                "Accredited Investor Questionnaire (For Purchases Only)",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/YTJa2Wr7AKnAnZmJAOeJE/04eab0a8f49c2c8cea5c0e1c51c2769b/Accredited-Investor-Questionnaire-For-Purchases-Only.pdf",
            },
          ],
        },
        {
          label: "Central Trade & Transfer Information",
          items: [
            {
              documentName: "CTT Contact Information",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/5yrLEw75xm7Tj6jouL2Ttx/c84abdd34dadd733391059f679b0c26d/CTT_Contact_Information.pdf",
            },
            {
              documentName: "CTT Auction Process/Timeline Overview",
              guideLink:
                "https://assets.ctfassets.net/9lvru9ro1ti1/5aAN2flmTucH6vNNeFx3ix/74078fcd05ce086f5e71832a053a861a/CTT-Auction-Process-Timeline-Overview.pdf",
            },
          ],
        },
      ],
    },
  };
  const [selectedGuideData, setSelectedGuideData] = useState(
    guides["secondaryMarketTrading"],
  );

  const tools = [
    {
      name: "Ai Insight",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/1vSREVNL8Gt7dNP4CrNOkk/8f2fe711f994e15b41438a115b21696f/iCapital-AI-Insight-logo-2023.png",
      link: "https://ifgsd.us.auth0.com/samlp/FJEyn6ijl0XkjjwMXNBrFj0InmjkjB6G?_ga=2.46174882.425499025.1600451513-1817919412.1599685773",
      guideLabel: "aiInsight",
    },
    {
      name: "iCapital",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/28rF62EvdVvfrsEQJwLnRH/016dcce14d3846caf68ce064f1ec6b92/iCapital_logo.png",
      link: "https://ifgsd.us.auth0.com/samlp/FJEyn6ijl0XkjjwMXNBrFj0InmjkjB6G?_ga=2.46174882.425499025.1600451513-1817919412.1599685773",
      guideLabel: "iCapital",
    },
    {
      name: "Secondary Market Trading",
      imageUrl:
        "https://images.ctfassets.net/9lvru9ro1ti1/5sVliOer41oMg5QiImUCUN/d09c11cfc167b9fd4a74227758d0a734/central_trade_and_transfer_logo.png",
      link: "http://www.cttauctions.com/",
      guideLabel: "secondaryMarketTrading",
    },
  ];

  const handleGuideClick = (e) => {
    const toolName = e.target.getAttribute("data-guidelabel");
    setSelectedPlatform(toolName);
    setSelectedGuideData(guides[toolName]);
    setOpen(true);
    console.log(selectedGuideData);
  };

  return (
    <>
      <Head>
        <title>Overview | Alternative Investments</title>
        <meta
          name="description"
          content="An overview of the Alternative Investments Department at IFG."
        />
      </Head>
      <Layout preview={preview}>
        <PageHeader
          pageName={"Alternative Investments Overview"}
          headerText={
            "Within the Alternative Investments web pages, you have access to DPP, REIT and 1031 offerings as well as latest news."
          }
        />
        <ContentContainer>
          <OverviewVideo url="https://vimeo.com/manage/videos/864186162" />
          <DepartmentAnnouncements
            name="Alternative Investments"
            data={departmentAnnouncementData}
          />
          <ProductAdBanner
            url={
              "https://images.ctfassets.net/9lvru9ro1ti1/2mtjSuITOLE31fF5OV45XY/354efb69633de440ea2533a25c7f4220/sealy_banner_ad_2023.jpg"
            }
          />
          <GridTile
            icon={<WrenchIcon className="h-6 w-6 text-seabreeze-500" />}
            tileTitle={"Tools"}
            colSpan={"col-span-full"}
          >
            <ul className="xl:grid xl:grid-cols-3 xl:gap-5">
              {tools.map((tool) => (
                <li key={tool.name} className="xl:col-span-1">
                  <div className="rounded bg-gray-100">
                    <img
                      src={tool.imageUrl}
                      className="mx-auto aspect-[3/2] w-28 object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="my-2 text-center text-2xl font-bold text-neon-orange-500">
                    {tool.name}
                  </h3>
                  <div className="flex justify-center gap-2">
                    <Link
                      className="block w-fit rounded bg-hazard-blue-100 px-3 py-2 font-bold text-hazard-blue-600 ring-2 ring-inset ring-hazard-blue-500/20"
                      href={tool.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Launch
                    </Link>
                    <button
                      onClick={handleGuideClick}
                      className="block w-fit rounded bg-gray-50 px-3 py-2 font-bold text-gray-500 ring-2 ring-inset ring-gray-500/20"
                      data-guideLabel={tool.guideLabel}
                    >
                      Guides
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <Modal
              open={open}
              setOpen={setOpen}
              icon={
                <DocumentIcon
                  className="h-6 w-6 text-hazard-blue-600"
                  aria-hidden="true"
                />
              }
            >
              <h3 className="text-center font-semibold text-gray-900">
                Guides & Documents for {selectedGuideData.name}
              </h3>
              <dl className="[&_dd]:my-1 [&_dd]:ml-4 [&_dd]:text-sm">
                {selectedGuideData.guides.map((guideCategory) => (
                  <>
                    <dt
                      key={guideCategory.label}
                      className="font-semibold text-hazard-blue-500"
                    >
                      {guideCategory.label}
                    </dt>
                    <div className="divide-y [&_dd]:py-2">
                      {guideCategory.items.map((item) => (
                        <dd key={item.documentName}>
                          <Link
                            href={item.guideLink}
                            target="_blank"
                            rel="noopener"
                            className="flex items-center gap-1"
                          >
                            <DocumentArrowDownIcon className="h-5 w-10 text-neon-orange-500" />
                            <div className="w-3/4">{item.documentName}</div>
                          </Link>
                        </dd>
                      ))}
                    </div>
                  </>
                ))}
              </dl>
            </Modal>
          </GridTile>
          <ContentLibrary
            department="alternative investments"
            preview={preview}
          />
          <TeamDirectory name="Alternative Investments" data={teamMemberData} />
        </ContentContainer>
      </Layout>
    </>
  );
};

export default overview;
