import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import Benefits from "../components/benefits/benefits";
// import Modal from "../components/assets/modal";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/* hero header */}
      <section>
        <Hero />
      </section>
      <section className="flex flex-col items-center ">
        <motion.div
          className="w-1/2 leading-loose pt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl text-primary mb-3"><strong>Quit Your Addiction</strong><br />Unlocking a Life of Freedom</h1>
          <p className="text-xs leading-loose">
            Welcome to
            <strong className="text-primary"> QuitYourAddiction</strong>, my
            personal blog dedicated to helping individuals break free from the
            grips of addiction and embrace a healthier, happier life. I
            understand firsthand the challenges and complexities that come with
            addiction, and through this blog, I want to share my experiences,
            insights, and strategies to support you on your journey to recovery.
            
          </p>
        </motion.div>
      <StaticImage
      src="../images/arrow_down.png" />
      <div className="flex flex-row gap-4 mt-10">
        <StaticImage src="../images/youtube_interview.jpg" />
        <StaticImage src="../images/tedx_talk.jpg"/>
        <StaticImage src="../images/spotify_podcast.jpg"/>
      </div>
      </section>
      <section>
        <Benefits />
      </section>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
