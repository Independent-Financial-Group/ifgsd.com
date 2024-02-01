import React, { useState, useEffect } from "react";
import GridTile from "../../../../GridTile/GridTile";
import Link from "next/link";

// CONTENTFUL IMPORTS
const contenful = require("contentful");

const client = contenful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const SimilarModels = ({ type }) => {
  const [similarModels, setSimilarModels] = useState([]);

  const getSimilarModels = async () => {
    const data = await client
      .getEntries({
        content_type: "portfolioConstructionModels",
        "fields.modelType[match]": type,
        order: "fields.name",
      })
      .then((response) => {
        setSimilarModels([...response.items]);
      });
  };

  useEffect(() => {
    getSimilarModels();
  }, []);

  return (
    <GridTile
      colSpan={"col-span-5 h-[500px]"}
      scroll
      tileTitle={`Other AccessPoint Models`}
    >
      <ol className="flex flex-col gap-5 divide-y">
        {similarModels.map((model) => {
          return (
            <li className="flex items-center gap-5" key={model.fields.name}>
              <img
                className="aspect-square h-14 w-14"
                src={`https:${model.fields.atAGlanceGraphic.fields.file.url}`}
              />
              <div>
                <h3 className="font-semibold">{model.fields.name}</h3>
                <Link
                  href={`/app/portfolio-construction/models/${model.fields.slug}`}
                  className="text-neon-orange-500"
                >
                  View &rarr;
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
      <Link
        href={`/app/portfolio-construction/models`}
        className="mx-auto mt-5 block w-fit rounded bg-neon-orange-500 p-1 font-semibold text-white"
      >
        View All Models
      </Link>
    </GridTile>
  );
};

export default SimilarModels;
