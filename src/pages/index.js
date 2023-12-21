import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import Modal from "../components/assets/modal";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/* hero header */}
      <section className="max-md:hidden">
        <Hero />
      </section>
      <section>
        <div className="flex items-center justify-center gap-4 p-10 max-md:p-4 max-md:flex-col max-md:mt-52">
          <div>
            <h2 className="text-orange-500 text-3xl font-bold">
              Quit Your
              <br /> Addiction
              <br /> Now !
            </h2>
          </div>
          <Modal bgColor={"bg-[#E7E7E7]"} width={"w-2/3"}>
            <p className="text-base text-black font-light">
              Welcome to my first honest blog about what really matters to me, a
              compassionate and informative blog dedicated to helping
              individuals break free from the grip of addiction and embark on a
              transformative journey towards lasting recovery. I understand the
              challenges you face, and I'm here to offer support, guidance, and
              inspiration every step of the way.
            </p>
          </Modal>
        </div>
        <div className="p-32 max-md:p-10"><p>At "quityouraddiction," our purpose is clear - to empower individuals struggling with addiction to take control of their lives, overcome their dependencies, and find a path to healing and wholeness. We firmly believe that everyone deserves a chance at a brighter future, free from the chains of addiction. Through our content, resources, and community, we aim to provide the tools and knowledge needed to make positive changes and embrace a life of sobriety, fulfillment, and well-being.</p></div>
      </section>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
