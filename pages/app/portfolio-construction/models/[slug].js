import React, { useEffect } from "react";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import GridTile from "../../../../components/App/GridTile/GridTile";
import SimilarModels from "../../../../components/App/InternalPages/Overview/PortfolioConstruction/SimilarModels/SimilarModels";
// CHART JS IMPORTS
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// HERO ICONS
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

// CONTENTFUL IMPORTS
import * as contentful from "../../../../utils/contentful";

export async function getStaticPaths() {
  const response = await client.getEntries({
    content_type: "portfolioConstructionModels",
    order: "fields.name",
  });

  const paths = response.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  if (!response.items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params, preview }) => {
  const slug = params.slug;

  const client = preview ? contentful.previewClient : contentful.client;

  const models = await client.getEntries({
    content_type: "portfolioConstructionModels",
    order: "fields.name",
    "fields.slug[match]": slug,
  });

  return {
    props: {
      model: models.items[0],
      preview: preview || false,
    },
    revalidate: 5,
  };
};

const Model = ({ model, preview }) => {
  return (
    <Layout preview={preview}>
      <PageHeader pageName={model.fields.name} breadCrumb="Models" />
      <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
        <GridTile colSpan={"col-span-4"} tileTitle="Asset Allocation Breakdown">
          <div className="flex flex-col items-center justify-center">
            <Doughnut
              plugins={[ChartDataLabels]}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: "right",
                    labels: {
                      usePointStyle: true,
                      pointStyle: "circle",
                    },
                  },
                },
              }}
              data={{
                labels:
                  model.fields.modelType == "Standard"
                    ? ["Bonds", "Equities"]
                    : model.fields.modelType == "With Alts"
                    ? ["Bonds", "Equities", "Liquid Alts"]
                    : ["Liquid Alts"],
                datasets: [
                  {
                    label: "percentage",
                    data: [
                      model.fields.bondsPercentage == 0
                        ? ""
                        : model.fields.bondsPercentage,
                      model.fields.equitiesPercentage == 0
                        ? ""
                        : model.fields.equitiesPercentage,
                      model.fields.liquidAltsPercentage == 0
                        ? ""
                        : model.fields.liquidAltsPercentage,
                    ],
                    backgroundColor: ["#6BA9C0", "#FF7F4E", "#054F7C"],
                    datalabels: {
                      color: "#ffffff",
                      formatter: (value, context) =>
                        value == 0 ? "" : value + "%",
                    },
                  },
                ],
              }}
            />
          </div>
        </GridTile>
        <GridTile
          tileTitle={`Holdings`}
          colSpan={"col-span-8 h-[500px]"}
          scroll={true}
        >
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                >
                  Ticker
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                >
                  Allocation
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {model.fields.holdings.map((holding) => (
                <tr key={holding.ticker}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {holding.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {holding.ticker == "NA" ? "" : holding.ticker}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {holding.allocation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </GridTile>
        <SimilarModels type={model.fields.modelType} />
        <div className="col-span-7 flex flex-col items-center justify-center">
          <h2 className="text-center text-2xl font-semibold text-neon-orange-500">
            Need more information?
          </h2>
          <p className="text-center">Give us a call or send an email.</p>
          <div className="mt-5 flex justify-center gap-5">
            <div className="flex flex-col items-center gap-5 text-center">
              <DevicePhoneMobileIcon className="mx-auto h-[80px] w-[80px] text-neon-orange-500" />
              <p className="text-lg font-bold text-hazard-blue-500">Call</p>
              <p>(800) 269 - 1903 x321</p>
            </div>
            <div className="flex flex-col items-center gap-5 text-center">
              <EnvelopeIcon className="mx-auto h-[80px] w-[80px] text-neon-orange-500" />
              <p className="text-lg font-bold text-hazard-blue-500">Email</p>
              <p>jnaldi@ifgsd.com</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Model;
