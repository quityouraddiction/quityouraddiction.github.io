import React from "react";
import { motion } from "framer-motion";
import ScocialMediaIcons from "../header/socialmedial";
import BlogList from "../blog/blogList";

const Hero = () => {
  return (
    <div className="flex flex-col items-center p-28 mt-32">
      <div className="flex pb-4 gap-4 items-end">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-80 bg-[#E27022] p-6 rounded-xl shadow-md"
        >
          <h1 className="text-white text-3xl font-extrabold">
            Break Free from Addiction and Reclaim Your Life
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1, delay: 0.1 }}
          transition={{ delay: 0.1 }}

          className="w-80 bg-[#CCCCCC] p-6 rounded-xl  shadow-md hover:scale-100"
        >
          <h2 className="text-2xl text-right font-light">
            Be ready to break free from addiction and embark on a journey
            towards lasting recovery, you've come to the right place
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}

          className="w-52 bg-[#E27022] p-6 rounded-xl shadow-md"
        >
          <h3 className="text-white text-right text-xl font-extrabold">
            Create a future filled with endless possibilities
          </h3>
        </motion.div>
      </div>

      <div className="flex pb-4 gap-4 items-start">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}

          className="flex flex-col gap-4 items-end"
        >
          <div className="w-80 bg-[#E27022] p-6 rounded-xl shadow-md">
            <h1 className="text-white text-right text-base font-medium">
              Discover the Path to Lasting Recovery and Personal Transformation
            </h1>
          </div>
          <ScocialMediaIcons />
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}

          className="w-72 bg-[#E27022] p-6 rounded-xl max-md:hidden shadow-md text-white"
        >
          <BlogList />
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}

          className="w-44 bg-[#CCCCCC] p-6 rounded-xl shadow-md"
        >
          <h3 className="text-black text-2xl font-bold uppercase">
            You are not alone in this battle
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
