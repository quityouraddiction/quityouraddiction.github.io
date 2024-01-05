import React from "react";
import ScocialMediaIcons from "../header/socialmedial";
import BlogList from "../blog/blogList";
import Modal from "../assets/modal";
import { motion } from "framer-motion";
// import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <div className="flex justify-center pt-24 p-14 gap-3">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="p-0 bg-[url('../images/freedom.jpg')] bg-cover 0 bg-center rounded-xl w-1/3 shadow-md"
      ></motion.div>
      <div className="flex items-end gap-3">
        <Modal
          bgColor={"bg-white"}
          padding={"p-4"}
          borderColor={"border-primary"}
          width={"max-w-sm"}
        >
          <BlogList />
        </Modal>
        <ScocialMediaIcons />
      </div>
    </div>
  );
};

export default Hero;
