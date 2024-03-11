import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";

import Benefits from "../components/benefits/benefits";
import FeaturedContent from "../components/featuredContent/featuredContent";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/* hero header */}
      <section>
        <Hero />
      </section>
      <div className="h-16"></div>
      <section>
        <FeaturedContent />
      </section>
      <div className="h-16"></div>
      <section>
        <Benefits />
      </section>
      <div className="h-16"></div>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
