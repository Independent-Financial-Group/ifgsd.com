import React from "react";
import { Chrono } from "react-chrono";
import Image from "next/image";

const Timeline = ({ data }) => {
  const formattedData = data.map((year) => {
    return {
      title: year.title,
      cardTitle: year.cardTitle,
      cardSubtitle: year.title,
      cardDetailedText: year.cardDetailedText,
      media: {
        name: year.media ? year.media.fields.file.fileName : null,
        source: {
          url: year.media ? `https:${year.media.fields.file.url}` : null,
        },
        type: "IMAGE",
      },
    };
  });

  return (
    <Chrono
      items={formattedData}
      mode="HORIZONTAL"
      showAllCardsHorizontal
      mediaHeight={200}
      theme={{
        primary: "#F47E50",
        secondary: "#6AA9C0",
        titleColorActive: "white",
        titleColor: "white",
      }}
      classNames={{
        card: "my-card",
        cardTitle: "my-card-title",
        cardSubTitle: "my-card-subtitle",
        cardText: "my-card-text",
        cardMedia: "my-card-media",
      }}
    />
  );
};

export default Timeline;
