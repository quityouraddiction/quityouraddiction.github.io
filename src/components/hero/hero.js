import React from "react";
import ScocialMediaIcons from "../header/socialmedial";
import BlogList from "../blog/blogList";
import Modal from "../assets/modal";
import { motion } from "framer-motion";
// import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <div className="flex justify-center pt-40 hero-bg mx-28">

      <div className="flex items-end w-full justify-center gap-3">
        <Modal
          bgColor={"bg-white"}
          padding={"p-4"}
          borderColor={"border-primary"}
          width={"w-1/2"}
        >
          <BlogList />
        </Modal>
        <div className="w-1/2 px-4">
          <h1 className="text-7xl font-extrabold leading-tight text-primary">Quit Your Addiction for Good</h1>
          <h5 className="text-2xl text-primary">Your Guide to Ending Addiction</h5>
          <p className="font-extrabold">Practical tools, inspiring stories and expert insignts to reclaim your life</p>
          <button className="btn mt-10">Start Your Journey</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
