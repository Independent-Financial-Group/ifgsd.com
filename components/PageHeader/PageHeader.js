import React from "react";

import Container from "../Container/Container";

const PageHeader = ({ children, bgPath, centerElement }) => {
  return (
    <header
      className={`relative h-[calc(75vh-60px)] rounded-bl-[20px] rounded-br-[20px] bg-cover bg-center bg-no-repeat md:h-[calc(35vh-60px)] lg:h-[calc(50vh-60px)] lg:rounded-bl-[40px] lg:rounded-br-[40px] xl:h-[calc(50vh-60px)] print:${bgPath} ${bgPath}`}
    >
      <div className="h-full rounded-bl-[20px] rounded-br-[20px] bg-dunkel-blue-900/25 lg:rounded-bl-[40px] lg:rounded-br-[40px]">
        <Container>
          {centerElement && (
            <div className="flex h-full w-full items-center lg:absolute lg:left-1/2 lg:top-1/2 lg:h-auto  lg:w-auto lg:-translate-x-1/2 lg:-translate-y-1/2">
              {children}
            </div>
          )}
          {!centerElement && (
            <div className="absolute top-1/2 -translate-y-1/2">{children}</div>
          )}
        </Container>
      </div>
    </header>
  );
};

export default PageHeader;
