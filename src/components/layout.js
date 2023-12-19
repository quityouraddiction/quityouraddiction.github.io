import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";


const Layout = ({ children }) => {
  return (
    <div className="">

      <div className=""><Header /></div>
      {/*  */}
      <div className="">{children}</div>
      <Footer className="h-16" />
    </div>
  );
};


export default Layout;
