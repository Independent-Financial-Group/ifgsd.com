import React from "react";

const Container = ({ children, classes }) => {
  return (
    <div className={`px-4 lg:mx-auto lg:max-w-screen-xl lg:px-0 ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
