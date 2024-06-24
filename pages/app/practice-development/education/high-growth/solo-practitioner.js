import React from "react";

// NEXT
import Head from "next/head";
import Link from "next/link";
// COMPONENTS
import Layout from "components/App/Layout/Layout";
import ContentContainer from "components/App/ContentContainer/ContentContainer";
import GridTile from "components/App/GridTile/GridTile";
import PageHeader from "components/App/InternalPages/PageHeader/PageHeader";
import ContentLibrary from "components/App/InternalPages/Overview/ContentLibrary/ContentLibrary";

import * as contentful from "utils/contentful";

export async function getStaticProps({ preview }) {
  const client = preview ? contentful.previewClient : contentful.client;

  const data = await client.getEntries({
    content_type: "contentLibrary",
    "fields.department[match]": "Practice Development",
  });

  return {
    props: {
      data: [...data.items],
      preview: preview || false,
    },
    revalidate: 10,
  };
}

const index = ({ data, preview }) => {
  const formattedData = data.reduce((result, item) => {
    const subcategory = item.fields.subcategory;

    if (!result[subcategory]) {
      result[subcategory] = [];
    }

    result[subcategory].push(item);

    return result;
  }, []);

  console.log(formattedData);

  return (
    <>
      <Head>
        <title>Practice Development | High Growth | Solo Practitioner</title>
      </Head>
      <Layout preview={preview}>
        <PageHeader
          pageName="Solo Practitioner"
          breadCrumb="High Growth Practice"
        />
        <ContentContainer additionalClasses="relative">
          <GridTile
            colSpan="col-span-6 row-start-1 row-end-2"
            tileTitle="Persona"
          >
            <section className="flex items-center gap-5">
              <img
                src="https://media.istockphoto.com/id/1540766989/photo/young-adult-male-entrepreneur-poses-for-photo.jpg?s=612x612&w=0&k=20&c=W4EkFAVsKSXe4RJMd6FTAEzWTA2pbIlP4Y-LDG-0gMs="
                alt="user persona"
                className="h-[100px] w-[100px] rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-neon-orange-500">
                  The High Growth Solo Practitioner
                </h3>
                <p className="text-xs leading-5 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima voluptatibus quam autem eius atque neque nostrum
                  molestias maxime nobis porro, ab, veniam sint nesciunt
                  molestiae in expedita impedit sit exercitationem.
                </p>
              </div>
            </section>
            <section className="mt-5">
              <ul className="grid grid-cols-2 gap-2">
                <li className="rounded bg-hazard-blue-100 p-4">
                  <h3 className="text-2xl font-semibold text-hazard-blue-500">
                    Goals
                  </h3>
                  <ul className="flex list-inside list-disc flex-col gap-2 text-xs text-hazard-blue-500">
                    <li>Beginning with the end in mind.</li>
                    <li>
                      Creating a scalable business with thresholds to leverage
                      time.
                    </li>
                    <li>Minimize B & C Activities</li>
                    <li>Creating a referral engine</li>
                  </ul>
                </li>
                <li className="rounded bg-hazard-blue-100 p-4">
                  <h3 className="text-2xl font-semibold text-hazard-blue-500">
                    Needs
                  </h3>
                  <ul className="flex list-inside list-disc flex-col gap-2 text-xs text-hazard-blue-500">
                    <li>New Clients</li>
                    <li>Target Market Refinement</li>
                    <li>Marketing Plan</li>
                    <li>Defined Business Mix</li>
                    <li>Virtual Services</li>
                  </ul>
                </li>
                <li className="rounded bg-hazard-blue-100 p-4">
                  <h3 className="text-2xl font-semibold text-hazard-blue-500">
                    Challenges
                  </h3>
                  <ul className="flex list-inside list-disc flex-col gap-2 text-xs text-hazard-blue-500">
                    <li>Staying Focused</li>
                    <li>Defining a business plan</li>
                    <li>Staffing</li>
                    <li>Time Leverages</li>
                    <li>Mentoring</li>
                    <li>Business Focus Accountability</li>
                  </ul>
                </li>
                <li className="rounded bg-hazard-blue-100 p-4">
                  <h3 className="text-2xl font-semibold text-hazard-blue-500">
                    Client Type
                  </h3>
                  <ul className="flex list-inside list-disc flex-col gap-2 text-xs text-hazard-blue-500">
                    <li>+ or - 5 years advisor's age</li>
                  </ul>
                </li>
                <li className="rounded bg-hazard-blue-100 p-4">
                  <h3 className="text-2xl font-semibold text-hazard-blue-500">
                    Selling vs Servicing
                  </h3>
                  <ul className="flex list-inside list-disc flex-col gap-2 text-xs text-hazard-blue-500">
                    <li>High focus on selling time over servicing time</li>
                    <li>
                      Creating service tiers for scalability and consistent with
                      how clients want to engage over time
                    </li>
                  </ul>
                </li>
                <li className="rounded bg-hazard-blue-100 p-4">
                  <h3 className="text-2xl font-semibold text-hazard-blue-500">
                    Technology
                  </h3>
                  <ul className="flex list-inside list-disc flex-col gap-2 text-xs text-hazard-blue-500">
                    <li>Fully engaging</li>
                    <li>Meeting & marketing clients digitally and socially</li>
                    <li>Scalable tech stack</li>
                  </ul>
                </li>
                <li className="col-span-full rounded bg-hazard-blue-100 p-4">
                  <h3 className="text-2xl font-semibold text-hazard-blue-500">
                    Revenue Challenges
                  </h3>
                  <ul className="flex list-inside list-disc flex-col gap-2 text-xs text-hazard-blue-500">
                    <li>
                      Covering the current needs while building the perpetual
                      revenue annuity
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </GridTile>
          <ContentLibrary
            department="Practice Development"
            tileTitle="Resources"
            colSpan={"col-span-6 row-start-1 row-end-2"}
          />
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;
