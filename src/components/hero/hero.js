import React from "react";
import ScocialMediaIcons from "../header/socialmedial";
import BlogList from "../blog/blogList";
import Modal from "../assets/modal";
import { motion } from "framer-motion";
// import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <div className="flex justify-center pt-40 hero-bg">

      <div className="flex items-end w-full justify-center gap-3 ">
        <Modal
          bgColor={"bg-white"}
          padding={"p-4"}
          borderColor={"border-primary"}
          width={"w-1/2"}
        >
          <BlogList />
        </Modal>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-primary">Quit Your Addiction for Good</h1>
          <h5>Your Guide to Ending Addiction</h5>
          <p>Practical tools, inspiring stories and expert insignts to reclaim your life</p>
          <button className="btn">Start Your Journey</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
