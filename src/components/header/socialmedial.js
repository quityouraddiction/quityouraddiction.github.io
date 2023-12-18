import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import FacebookIcon from "../../images/facebook_icon.svg";
import InstaIcon from "../../images/insta_icon.svg";
import XIcon from "../../images/x_icon.svg";

const ScocialMediaIcons = () => {
  return (
    <ul className="flex flex-col gap-10 self-center">
      <motion.li whileHover={{scale : 1.2}}>
        <Link to="/">
          <FacebookIcon />
        </Link>
      </motion.li>
      <motion.li whileHover={{scale : 1.2}}>
        <Link to="/">
          <InstaIcon />
        </Link>
      </motion.li>
      <motion.li whileHover={{scale : 1.2}} >
        <Link to="/">
          <XIcon />
        </Link>
      </motion.li>
    </ul>
  );
};

export default ScocialMediaIcons;
