import React from "react";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/Internal-Pages/PageHeader/PageHeader";
import GridTile from "../../../../components/App/GridTile/GridTile";
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
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

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
    fallback: true,
  };
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const models = await client.getEntries({
    content_type: "portfolioConstructionModels",
    order: "fields.name",
    "fields.slug[match]": slug,
  });

  return {
    props: {
      model: models.items[0],
    },
    revalidate: 5,
  };
};

const Model = ({ model }) => {
  return (
    <Layout>
      <PageHeader pageName={model.fields.name} breadCrumb="Models" />
      <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
        <GridTile colSpan={"col-span-4"} tileTitle="Asset Allocation Breakdown">
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
              // labels: ["Bonds", "Equities", "Liquid Alts"],
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
        </GridTile>
        <GridTile tileTitle={`Holdings`} colSpan={"col-span-8"}>
          <p className="leading-7">
            This portfolio applies global diversification, which we believe may
            see lower volatility over time and expanded investment opportunities
            for growth because it reduces concentration in one geographical
            region. This conservative portfolio is best suited for investors
            with shorter time periods, typically less than five years, or more
            important goals. It emphasizes defensive asset classes such as
            Treasury bonds and cash while holding little or no volatile
            investments such as stocks.
          </p>
        </GridTile>
        <div className="col-span-12">
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
