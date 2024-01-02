import React from "react";
import ScocialMediaIcons from "../header/socialmedial";
import BlogList from "../blog/blogList";
import Modal from "../assets/modal";
// import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <div className="flex justify-center pt-28 p-14 gap-3">
      <div className="p-0 bg-[url('../images/freedom.jpg')] bg-cover 0 bg-center border-primary border-2 rounded-xl w-1/3"></div>
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
