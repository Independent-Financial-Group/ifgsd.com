import React from "react";
import Nav from "../Nav/Nav";
import MobileNav from "../MobileNav/MobileNav";
import Footer from "../Footer/Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <MobileNav />
      <main className="min-h-[calc(100vh-113px)]">{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
