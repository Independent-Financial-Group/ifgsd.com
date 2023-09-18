import React from "react";

const PageHeader = ({content}) => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2">
      <h1 className="text-2xl font-bold text-seabreeze-500">
        <img
          className="inline"
          src="/graphicAssets/triangle-highlight.png"
          alt="ornament highlight"
        />{" "}
        {content.heading}
      </h1>
      <h2 className="font-bold text-seabreeze-500 lg:text-6xl">
        {content.subheading}
      </h2>
    </div>
  );
};

export default PageHeader;
