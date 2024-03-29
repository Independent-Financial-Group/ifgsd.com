import React from "react";

const Container = ({ children, classes }) => {
  return (
    <div className={`px-5 mx-auto max-w-screen-xl h-full ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
