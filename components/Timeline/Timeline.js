import React from "react";
import { Chrono } from "react-chrono";
import Image from "next/image";

const Timeline = ({ data }) => {
  return (
    <Chrono
      items={data}
      mode="HORIZONTAL"
      showAllCardsHorizontal
      theme={{
        primary: "#F47E50",
        secondary: "#6AA9C0",
        titleColorActive: "white",
        titleColor: "white",
        iconBackgroundColor: "white",
        cardTitleColor: "white",
      }}
    >
      {data.map((item) => {
        return (
          <div className="min-h-[350px] w-[380px] overflow-y-hidden bg-white px-4">
            {/* <Image
              src={"https://placehold.co/400x100.png"}
              width={400}
              height={100}
              className="mb-10"
            /> */}
            <h3 className="text-2xl font-bold text-neon-orange-500">
              {item.cardTitle}
            </h3>
            <p className="mb-4 text-hazard-blue-500">{item.title}</p>
            <p className="text-base">{item.cardDetailedText}</p>
          </div>
        );
      })}
    </Chrono>
  );
};

export default Timeline;
