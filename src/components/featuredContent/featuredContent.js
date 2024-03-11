import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import { getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import Carousel from "../assets/carousel";
import { GatsbyImage } from "gatsby-plugin-image";

const FeaturedContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          name: { regex: "/^featured/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO])
            }
          }
        }
      }
    }
  `);
  const images = data.allFile.edges.map(({ node }) => (
    <GatsbyImage
      key={node.childImageSharp.gatsbyImageData.src}
      image={node.childImageSharp.gatsbyImageData}
      alt=""
    />
  ));
  return (
    <div className="flex flex-row flex-wrap justify-center items-baseline gap-7 mx-9">
      <div className="w-1/3">
        <Carousel images={images} />
      </div>
      <motion.div
        className="leading-loose pt-10 min-[912px]:w-1/3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="max-md:text-5xl text-6xl font-extrabold leading-tight text-primary">
          Unlock a Life of Freedom
        </h1>
        <p className="text-xs leading-loose">
          Welcome to
          <strong className="text-primary"> QuitYourAddiction</strong>, my
          personal blog dedicated to helping individuals break free from the
          grips of addiction and embrace a healthier, happier life. I understand
          firsthand the challenges and complexities that come with addiction,
          and through this blog, I want to share my experiences, insights, and
          strategies to support you on your journey to recovery.
        </p>
        <p className="text-xs leading-loose">
          This section will introduce you to the core idea behind this approach.
          To get started, it's important to understand this concept. Please take
          the time to watch the following videos and think about the ideas
          presented.
        </p>
      </motion.div>
    </div>
  );
};

export default FeaturedContent;
