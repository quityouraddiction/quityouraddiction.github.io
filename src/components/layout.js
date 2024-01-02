import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <div data-theme="regular">
      <Header />
      {children}
      <Footer className="h-16" />
    </div>
  );
};

export default Layout;
