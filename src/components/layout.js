import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";


const Layout = ({ children }) => {
  return (
    <div>

      <div><Header /></div>
      {/*  */}
      {children}
      <Footer className="h-16" />
    </div>
  );
};


export default Layout;
