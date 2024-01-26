import React from "react";

const PageHeader = ({ pageName, headerText, breadCrumb }) => {
  return (
    <header className="relative h-[20dvh] bg-neon-orange-500">
      <div className="h-fullpx-8 py-4">
        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2">
          {breadCrumb && (
            <p className="text-sm font-medium text-seabreeze-500">
              {breadCrumb}
            </p>
          )}
          <h1 className="text-3xl font-bold text-seabreeze-500">{pageName}</h1>
          {headerText && (
            <p className=" text-pretty leading-7 text-seabreeze-500">
              {headerText}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
