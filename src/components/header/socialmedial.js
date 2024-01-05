import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import FacebookIcon from "../../images/facebook_icon.svg";
import InstaIcon from "../../images/insta_icon.svg";
import XIcon from "../../images/x_icon.svg";

const ScocialMediaIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <ul className="flex flex-col gap-7">
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/">
            <FacebookIcon />
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/">
            <InstaIcon />
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link to="/">
            <XIcon />
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default ScocialMediaIcons;
