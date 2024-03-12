import React from "react";

const ContentContainer = ({ children }) => {
  return (
    <div className="relative my-10 flex flex-col gap-5 px-8 xl:grid xl:grid-cols-12 xl:gap-5">
      {children}
    </div>
  );
};

export default ContentContainer;
