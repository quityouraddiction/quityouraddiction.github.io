import React from "react";
import ScocialMediaIcons from "../header/socialmedial";
import BlogList from "../blog/blogList";
import Modal from "../assets/modal";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <div className="flex items-center justify-center pt-28 p-14 gap-3">
      <Modal bgColor={"bg-white"} padding={"p-0"}>
        
      </Modal>
      <div className="flex items-end gap-3 max-h-[400px]">
        <Modal bgColor={"bg-white"} padding={"p-4"} width={"max-w-2xl"}>
          <BlogList />
        </Modal>
        <ScocialMediaIcons />
      </div>
    </div>



  );
};

export default Hero;
