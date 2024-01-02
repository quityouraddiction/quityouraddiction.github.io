import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import { motion } from "framer-motion";
// import Modal from "../components/assets/modal";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/* hero header */}
      <section className="max-md:hidden">
        <Hero />
      </section>
      <section>
        <motion.div
          className="md:px-40 max-sm:px-28 leading-loose"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Quit Your Addiction : Unlocking a Life of Freedom</h1>
          <p className="text-xs leading-loose">
            Welcome to
            <strong className="text-primary"> QuitYourAddiction</strong>, my
            personal blog dedicated to helping individuals break free from the
            grips of addiction and embrace a healthier, happier life. I
            understand firsthand the challenges and complexities that come with
            addiction, and through this blog, I want to share my experiences,
            insights, and strategies to support you on your journey to recovery.
            <br />
            <br />
            The purpose of this blog is to empower individuals like you to
            regain control over your lives and conquer addictive behaviors. I
            firmly believe that everyone deserves a chance to live a fulfilling
            life free from the chains of addiction. Together, we can navigate
            the ups and downs of the recovery process, providing mutual support
            and encouragement. <br />
            <br />
            In this personal blog, I share my own journey, struggles, and
            victories with addiction. I believe that by speaking from my own
            experiences, I can connect with you on a deeper level and provide a
            sense of empathy and understanding. I'm here to share what has
            worked for me, what hasn't, and what I continue to learn on this
            transformative path.
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
