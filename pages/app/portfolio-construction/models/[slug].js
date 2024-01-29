import React from "react";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/Internal-Pages/PageHeader/PageHeader";
import GridTile from "../../../../components/App/GridTile/GridTile";
// CHART JS IMPORTS
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

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
        <GridTile colSpan={"col-span-4"} tileTitle="Breakdown">
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
      </div>
    </Layout>
  );
};

export default Model;
