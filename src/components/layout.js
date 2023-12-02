import * as React from "react";
import Header from "./header";
import { container } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>

      <Header></Header>
        <h1>{pageTitle}</h1>
        {children}

    </div>
  );
};


export default Layout;
