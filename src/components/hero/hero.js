import React from "react";
// import ScocialMediaIcons from "../header/socialmedial";
import BlogList from "../blog/blogList";
import Modal from "../assets/modal";
// import { motion } from "framer-motion";
// import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <div className="max-md:pt-36 pt-40 flex justify-center gap-10 max-md:flex-col-reverse mx-9">
      <Modal
        bgColor={"bg-white"}
        padding={"p-4"}
        borderColor={"border-primary"}
        width={"w-4/12"}
      >
        <BlogList />
      </Modal>
      <div className="mr-10 flex flex-col justify-between">
        <div>
          <h1 className="max-md:text-6xl text-7xl font-extrabold leading-tight text-primary">
            Quit
            <br /> Your Addiction
            <br /> for Good
          </h1>
          <h5 className="text-2xl text-primary">
            Your Guide to Ending Addiction
          </h5>
          <p className="font-extrabold">
            Practical tools, inspiring stories and expert insignts to reclaim
            your life
          </p>
        </div>
        <button className="btn btn-primary btn-outline max-md:btn-sm mt-10 w-2/3">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default Hero;
