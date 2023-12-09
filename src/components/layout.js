import * as React from "react";
import Header from "./header";
// import { container, body } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="bg-[#FBFBFB]">

      <Header></Header>
        <h1 className="grid text-center content-center h-screen">{pageTitle}</h1>
        {/* {children} */}

    </div>
  );
};


export default Layout;
