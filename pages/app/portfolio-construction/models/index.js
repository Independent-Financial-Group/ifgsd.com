import React, { useState, useEffect } from "react";
import Layout from "../../../../components/App/Layout/Layout";
import PageHeader from "../../../../components/App/InternalPages/PageHeader/PageHeader";
import GridTile from "../../../../components/App/GridTile/GridTile";

// CHART JS IMPORTS
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Link from "next/link";
// CONTENTFUL IMPORTS
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const index = () => {
  const [models, setModels] = useState([]);

  const getModels = async () => {
    const data = await client
      .getEntries({
        content_type: "portfolioConstructionModels",
        order: "fields.name",
      })
      .then((response) => {
        setModels([...response.items]);
      });
  };

  useEffect(() => {
    getModels();
  }, []);

  const optionsDesktop = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  const optionsMobile = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <Layout>
      <PageHeader
        pageName="Access Point Models"
        breadCrumb="Portfolio Construction"
        headerText="The AccessPoint models offer an institutional caliber portfolio construction process that integrates the benefits of both active and passive investing into a highly diversified set of investment portfolios. The portfolios are highly diversified by asset class, investment styles, investment managers and investment vehicles. Each portfolio has been designed to offer tailored exposure to the markets based on varying degrees of risk tolerances and objectives."
      />
      <div className="my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
        <GridTile colSpan="col-span-12" tileTitle="Why Use Model Portfolios?">
          <div className=" inline-block min-w-full py-2 align-middle">
            <p className="font-bold text-neon-orange-500">
              Top 2 Business Goals for IFG Advisors
            </p>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[45%] py-3.5 pl-4 pr-4 text-left text-xs font-semibold text-gray-900 sm:pl-0"
                  >
                    Deepeen Relationship with Existing Clients
                  </th>
                  <th
                    scope="col"
                    className="w-[54%] px-4 py-3.5 text-left text-xs font-semibold text-gray-900"
                  >
                    Acquire More Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="flex justify-center whitespace-nowrap bg-hazard-blue-500 py-4 text-sm font-semibold text-seabreeze-500">
                    45%
                  </td>
                  <td className="bg-neon-orange-500  p-4 text-center text-sm font-semibold text-seabreeze-500">
                    54%
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-5 border-t-2 border-gray-200 pt-2">
              <p>
                In IFG&apos;s annual advisor survey, the top answer for “What is
                the greatest roadblock preventing you from getting to the next
                level?” was Time Management. Model portfolios could be an
                attractive solution that allows you the flexibility to free up
                your time so you can spend more time with clients and grow your
                business.
              </p>
              <p className="mt-3 text-center font-semibold text-hazard-blue-500">
                How do Advisors Actually Spend Their Time?
              </p>
              <div className="hidden md:block">
                <Bar
                  plugins={[ChartDataLabels]}
                  options={optionsDesktop}
                  data={{
                    labels: [
                      "Portfolio Management",
                      "Financial Planning",
                      "Client-Facing Activities",
                      "Investment Management",
                      "Administrative/Compliance Paperwork",
                      "Prospecting New Clients",
                      "Professional Development/Training",
                    ],
                    datasets: [
                      {
                        label: "% Time Allocated",
                        data: [23, 16, 15, 14, 12, 11, 10],
                        backgroundColor: "#FF7F4E",
                        borderColor: "#FF7F4E",
                        datalabels: {
                          color: "#ffffff",
                          formatter: (value, context) => value + "%",
                        },
                      },
                    ],
                  }}
                />
              </div>
              <div className="block md:hidden">
                <Bar
                  plugins={[ChartDataLabels]}
                  options={optionsMobile}
                  data={{
                    labels: [
                      "Portfolio Management",
                      "Financial Planning",
                      "Client-Facing Activities",
                      "Investment Management",
                      "Administrative/Compliance Paperwork",
                      "Prospecting New Clients",
                      "Professional Development/Training",
                    ],
                    datasets: [
                      {
                        label: "% Time Allocated",
                        data: [23, 16, 15, 14, 12, 11, 10],
                        backgroundColor: "#FF7F4E",
                        borderColor: "#FF7F4E",
                        datalabels: {
                          color: "#ffffff",
                          formatter: (value, context) => value + "%",
                        },
                      },
                    ],
                  }}
                />
              </div>
              <p className="text-center text-xs italic text-gray-500">
                Data is based on a recent IFG survey.
              </p>
            </div>
          </div>
        </GridTile>
        <GridTile
          colSpan="col-span-12 "
          tileTitle="Overview of the AccessPoint Models"
        >
          <ul className="py-4 xl:grid xl:grid-cols-3">
            {models.map((model) => {
              return (
                <li>
                  <img
                    className="mx-auto"
                    src="https://images.ctfassets.net/9lvru9ro1ti1/7kY9AYABsnOtX4PEzOpJMn/304af97306dadb4b0bb5e2b2b8028448/pie-chart.png"
                  />
                  <h3 className="text-center font-semibold">
                    {model.fields.name}
                  </h3>
                  <p className="my-5 text-center text-sm leading-7">
                    {model.fields.modelDescription &&
                      model.fields.modelDescription}
                    {!model.fields.modelDescription &&
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium alias quas fuga error eaque iusto unde repudiandae doloremque numquam!"}
                  </p>
                  <Link
                    className="mx-auto block w-fit rounded bg-neon-orange-500 p-2 font-semibold text-seabreeze-500"
                    href={`/app/portfolio-construction/models/${model.fields.slug}`}
                  >
                    Learn More
                  </Link>
                </li>
              );
            })}
          </ul>
        </GridTile>
      </div>
    </Layout>
  );
};

export default index;
