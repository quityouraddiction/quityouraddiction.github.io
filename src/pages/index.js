import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import Modal from "../components/assets/modal";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/* hero header */}
      <div className="max-md:hidden">
        <Hero />
      </div>
      <div className="flex items-center justify-center">
        <Modal width={"w-2/4"} bgColor={"bg-[#E27022]"} borderColor={"border-black"}>
          <h1>hello</h1>
        </Modal>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
