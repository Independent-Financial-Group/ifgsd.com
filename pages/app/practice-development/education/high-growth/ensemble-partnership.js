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
        <title>Practice Development | High Growth | Ensemble/Partnership</title>
      </Head>
      <Layout preview={preview}>
        <PageHeader
          pageName="Ensemble/Partnership"
          breadCrumb="High Growth Practice"
        />
        <ContentContainer additionalClasses="relative">
          <GridTile
            colSpan="col-span-6 row-start-1 row-end-2"
            tileTitle="Persona"
          >
            <section className="flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/6457562/pexels-photo-6457562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="user persona"
                className="h-[100px] w-[100px] rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-neon-orange-500">
                  The Ensemble/Partnership
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
          {/* <GridTile
            scroll
            tileTitle="Resources"
            colSpan="col-span-6"
            additionalClasses={"h-[400px]"}
          >
            {Object.keys(formattedData).map((subcategory) => {
              return (
                <>
                  <div className="sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-neon-orange-100 px-3 py-1.5 text-sm font-semibold leading-6 text-neon-orange-600">
                    <h3>
                      {subcategory == "undefined" ? "All/Mixed" : subcategory}
                    </h3>
                  </div>
                  <ul>
                    {formattedData[subcategory].map((item) => (
                      <li key={item.sys.id} className="flex gap-2">
                        <div className="flex-grow">{item.fields.title}</div>
                        <div>
                          <Link href={item.fields.slug}>Open</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              );
            })}
          </GridTile> */}
          <GridTile
            tileTitle={"TEST"}
            colSpan="col-start-7 col-end-12 row-start-2 row-end-3"
          ></GridTile>
        </ContentContainer>
      </Layout>
    </>
  );
};

export default index;