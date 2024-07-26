import React, { useState } from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "components/App/Layout/Layout";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import DepartmentAnnouncements from "components/App/InternalPages/Overview/DepartmentAnnouncements/DepartmentAnnouncements";
import GridTile from "components/App/GridTile/GridTile";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import ImageModal from "components/App/ImageModal/ImageModal";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  return (
    <>
      <Head>
        <title>Retirement Services | Overview</title>
      </Head>
      <PageHeader pageName={"Overview"} breadCrumb={"Retirement Services"} />
      <Layout>
        <section>
          <ContentContainer>
            <GridTile colSpan={"col-span-6"} tileTitle={"Introduction"}>
              <div className="col-span-full space-y-6 bg-contain bg-no-repeat text-sm leading-7 [&_p]:indent-4">
                <p>
                  The retirement plan market has seen a number of regulatory
                  changes in the past few years with more changes undoubtedly
                  forthcoming. As a result, retirement plan sponsors and their
                  participants are in need of even greater advisor support to
                  help navigate the current environment and improve the
                  likelihood of participants meeting their retirement goals.
                </p>
                <p>
                  Recognizing the challenges facing this under-served market,
                  Independent Financial Group has assembled a dynamic collection
                  of tools and resources to assist advisors providing services
                  to this specialized line of business. And in 2017 we were
                  recognized by WealthManagement.com as a 2017 winner of its
                  Executive Forum & Industry Awards in the category of
                  “Broker/Dealers: Fewer Than 1000 Advisors Service”.
                </p>
                <p>
                  The highlights of our offering captured in this brochure
                  include:
                </p>
                <ul className="ml-4 list-inside list-disc space-y-2">
                  <li>Innovative software and practice management tools</li>
                  <li>Specialized Fiduciary governance resources</li>
                  <li>Flexible fiduciary solutions</li>
                  <li>Regular continous education opportunities</li>
                  <li>Knowledgeable in-house retirement plan expert</li>
                </ul>
                <p>
                  Whether your goal is to provide specialized fiduciary support
                  to retirement plans or rather to accommodate a client who
                  happens to be a business owner, Independent Financial Group
                  has the right tools, resources, and expertise to support your
                  retirement plan business needs.
                </p>
              </div>
            </GridTile>
            <GridTile tileTitle={"Innovative Tools"} colSpan={"col-span-6"}>
              <img src="https://images.ctfassets.net/9lvru9ro1ti1/3BwCG1N0QKxmkBzEVw13YQ/b5d45b416a2390fc70f76e9534dc749c/retirement_services_image_1.png" />
              <div className="lg:grid lg:grid-cols-2 lg:gap-5">
                <div>
                  <img
                    src="https://images.ctfassets.net/9lvru9ro1ti1/oQjzv1nh7gD1ffxDRBQD6/df8b629c1f89d6f58924cdeacd0feb45/envestnet_retirement_solutions_logo.jpg"
                    alt="Envestnet Logo"
                  />
                  <p className="mt-5 text-sm leading-6">
                    The servicing of retirement plans continues to evolve in
                    such a way that requires greater specialization in research,
                    monitoring, educational resources, and fiduciary
                    capabilities. IFG helps you meet this need with Envestnet
                    Retirement Solutions–the industry leader in practice
                    management platforms for retirement plan advisors. Envestnet
                    Retirement Solutions (ERS) is an integrated,
                    open-architecture software tool suite than combines proven
                    investment processes and analytics essential to the
                    retirement plan practice.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-neon-orange-500">
                    Some of the many capabilities of ERS include:
                  </h5>
                  <ul className="my-4 ml-3 list-inside list-disc text-sm">
                    <li>5500 Searchable Database</li>
                    <li>RFP/Vendor Search Tool</li>
                    <li>Investment Policy Statements</li>
                    <li>Investment Monitoring & Research</li>
                    <li>Fiduciary Overlay Services</li>
                    <li>Fiduciary Vault</li>
                    <li>Data Aggregation</li>
                  </ul>
                  <p className="text-sm leading-6">
                    With its robust arsenal of tools, ERS gives you the ability
                    to manage your retirement plan services within a single,
                    comprehensive, unified platform.
                  </p>
                </div>
              </div>
            </GridTile>
          </ContentContainer>
        </section>
        <ContentContainer>
          <DepartmentAnnouncements data={[]} name={"Retirement Services"} />
          <GridTile colSpan={"col-span-8"} tileTitle={"Fiduciary Support"}>
            <img src="https://images.ctfassets.net/9lvru9ro1ti1/1QzQwsPRIKZMclzgRvfCCY/65d4556bcffab5979681980a03b65ace/retirement_services_image_2.png" />
            <div className="mt-5 text-sm lg:grid lg:grid-cols-2 lg:gap-5">
              <div>
                <p className="leading-6">
                  More and more retirement plan sponsors are demanding
                  fee-transparent, co-fiduciary advisors to meet the needs of
                  their plans. In recognition and in support of this demand, IFG
                  allows approved advisors to provide both 3(21) and 3(38)
                  fiduciary consulting services through the IFG Plan Sponsor
                  Consulting Program ("PSC Program"). The PSC Program is
                  available to approved advisors under the IFG corporate RIA
                  permitting fiduciary investment advice and consulting services
                  to be provided to participants. With over 25 different
                  fiduciary and non-fiduciary service options available, IFG
                  advisors can provide a breadth of retirement plan services to
                  plans of all sizes with varied goals and objectives.
                </p>
              </div>
              <div>
                <img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/9zuGEHGGRVmdw8vcMOJFu/79ce1a5b8978081e8e8139aba2b601b1/PSC_Program_Logo.png"
                  className="mb-5"
                />
                <ul className="list-disc space-y-3">
                  <li>Acknowledged 3(21) or 3(38) co-fiduciary status</li>
                  <li>Access to all investment option share classes</li>
                  <li>
                    More flexibility in services offered and compensation
                    options
                  </li>
                  <li>Full transparency and 408(b)2 compliant</li>
                  <li>Covered under E&O</li>
                </ul>
              </div>
            </div>
          </GridTile>
          <GridTile tileTitle={"Specialized Resources"} colSpan={"col-span-4"}>
            <Splide
              aria-label="PRI Platform Slides"
              options={{
                pagination: false,
                arrows: false,
                type: "loop",
                autoplay: true,
                interval: 4000,
              }}
            >
              <SplideSlide>
                <img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/5kfvK1USaOS7hHF9SQPEbf/0cc0c5e4df2cf2a91db8c56e1916ae75/pri_slide_image_1.png"
                  alt="Image 1"
                  className="hover:cursor-pointer"
                  onClick={(e) => {
                    setImgSrc(e.target.src);
                    setOpen(true);
                  }}
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/5eKpqtf27gVHttvUjLLBgY/4ca4fdc84b49af8cd528aeeae7b7a41f/pri_slide_image_2.png"
                  alt="Image 2"
                  className="hover:cursor-pointer"
                  onClick={(e) => {
                    setImgSrc(e.target.src);
                    setOpen(true);
                  }}
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://images.ctfassets.net/9lvru9ro1ti1/1nUvElq29CiKXi40uniJvw/82418ee18a00dcf9fa3c87e49b506d99/pri_slide_image_3.png"
                  alt="Image 3"
                  className="hover:cursor-pointer"
                  onClick={(e) => {
                    setImgSrc(e.target.src);
                    setOpen(true);
                  }}
                />
              </SplideSlide>
            </Splide>
            <div>
              <p className="text-sm">
                While providing 3(21) or 3(38) fiduciary consulting services is
                a cornerstone of many retirement plan practices, IFG understands
                that the needs of many plan sponsors extend beyond standard
                fiduciary services into the realm of plan governance, service
                provider selection and monitoring, and administration
                assistance. That’s why IFG has partnered with the Pension
                Resource Institute (PRI) to provide a wealth of content
                specifically geared for the retirement plan marketplace.
                Abundant with sales resources and model plan governance
                materials, PRI enables retirement plan advisors to enhance their
                service model by providing the highest level of professionalism
                and structured support to plan committees.
              </p>
              <img
                src="https://images.ctfassets.net/9lvru9ro1ti1/VSh6I9fnG1EghmyQtHvTE/430b6c4e5003ab71e8fde5b8053cd494/PRI_Logo.png"
                alt="pri logo"
                className="w-1/2"
              />
              <strong className="text-neon-orange-500">
                Examples include:
              </strong>
              <ul className="list-inside list-disc text-sm">
                <li>Model Process Guide</li>
                <li>Fiduciary File Map</li>
                <li>Investment Committee Charter Template</li>
                <li>Committee Meeting Minutes Template</li>
                <li>Complianced Approved Slide Decks</li>
                <li>Sample QDIA Policies</li>
              </ul>
            </div>
          </GridTile>
          <section className="col-span-full">
            <div>
              <div className="rounded rounded-lg bg-[url('https://images.ctfassets.net/9lvru9ro1ti1/4kxFhZGQbqiJx1slZMzwTa/3e4dee541c9468524e4a244bc2dc5435/retirement_services_image_3.png')] bg-cover bg-center bg-no-repeat">
                <div className="min-h-64 rounded bg-black/50 px-4 py-2 shadow">
                  <h4 className="text-2xl font-bold text-white">
                    Continous Education Offering
                  </h4>
                  <p className="max-w-prose leading-6 text-white">
                    An evolving and constantly changing marketplace requires
                    continuous dedication to keeping current. IFG meets the
                    challenge with access to numerous educational opportunities
                    throughout the year. Whether it’s a local meeting, a
                    national conference, or online presentation, IFG is
                    committed to making it easy for you to obtain the essential
                    information you need to stay on top of industry trends and
                    ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ContentContainer>
        <ImageModal open={open} setOpen={setOpen}>
          <img src={imgSrc} className="w-screen" />
        </ImageModal>
      </Layout>
    </>
  );
};

export default Page;
