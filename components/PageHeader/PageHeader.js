import React from "react";

import Container from "../Container/Container";

const PageHeader = ({children, bgPath}) => {
  return (
    <header className={`relative h-[calc(75vh-60px)] rounded-bl-[20px] rounded-br-[20px] lg:rounded-bl-[40px] lg:rounded-br-[40px] bg-cover bg-center bg-no-repeat md:h-[calc(35vh-60px)] lg:h-[calc(50vh-60px)] xl:h-[calc(50vh-60px)] ${bgPath}`}>
      <div className="h-full rounded-bl-[20px] rounded-br-[20px] lg:rounded-bl-[40px] lg:rounded-br-[40px] bg-dunkel-blue-900/20">
        <Container>
        <div className="absolute top-1/2 -translate-y-1/2">
          {children}
        </div>
        </Container>
      </div>
    </header>
  );
};

export default PageHeader;
