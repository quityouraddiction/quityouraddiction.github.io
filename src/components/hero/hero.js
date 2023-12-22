import React from "react";
import { motion } from "framer-motion";
import ScocialMediaIcons from "../header/socialmedial";
import BlogList from "../blog/blogList";
import Modal from "../assets/modal";

const Hero = () => {
  return (
    <div className="flex flex-col items-center pt-28">
      <div className="flex pb-4 gap-4 items-end">
        <Modal width="w-80" bgColor="bg-[#E27022]" borderColor="border-black">
          <h1 className="text-white text-3xl font-extrabold">
            Break Free from Addiction and Reclaim Your Life
          </h1>
        </Modal>
        <Modal
          width="w-80"
          bgColor="bg-[#E8E8E8]"
          delay="0.1"
        >
          <h2 className="text-2xl text-right font-light">
            Be ready to break free from addiction and embark on a journey
            towards lasting recovery, you've come to the right place
          </h2>
        </Modal>
        <Modal
          width="w-52"
          bgColor="bg-[#E27022]"
          delay="0.2"
        >
          <h3 className="text-white text-right text-xl font-extrabold">
            Create a future filled with endless possibilities
          </h3>
        </Modal>
      </div>

      <div className="flex pb-4 gap-4 items-start">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-4 items-end"
        >
          <Modal
            width="w-56"
            bgColor="bg-[#E27022]"

            delay="0.2"
          >
            <h1 className="text-white text-right text-base font-medium">
              Discover the Path to Lasting Recovery and Personal Transformation
            </h1>
          </Modal>
          <ScocialMediaIcons />
        </motion.div>

        <Modal
          width="w-96"
          bgColor="bg-[#E27022]"
          delay="0.4"
        >
          <BlogList />
        </Modal>

        <Modal
          width="w-44"
          bgColor="bg-[#E8E8E8]"
          delay="0.5"
        >
          <h3 className="text-zinc-950 text-2xl font-black uppercase">
            You are not alone in this battle
          </h3>
        </Modal>
      </div>
    </div>
  );
};

export default Hero;
