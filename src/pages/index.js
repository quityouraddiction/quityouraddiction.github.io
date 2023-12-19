import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/* hero header */}
      <div className="max-md:hidden" >
        <Hero/>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
