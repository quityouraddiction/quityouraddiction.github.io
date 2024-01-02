import React from "react";
import { Link } from "gatsby";
import { motion, useScroll, useTransform } from "framer-motion";

import NavItem from "./navItem.js";

import QuitYourAddictionLogo from "../../images/quit-your-addiction-logo.svg";
import SearchIcon from "../../images/search_icon.svg";
import EmailIcon from "../../images/email_icon.svg";

const Menu = () => {
  const { scrollY } = useScroll();
  const marginTop = useTransform(scrollY, [0, 100], [0, -40]);


  const width = useTransform(scrollY, [0, 100], [100, 0]);

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-white">

      <motion.div style={{ width }}>
        <Link to="/">
          <QuitYourAddictionLogo />
        </Link>
      </motion.div>
      <motion.div style={{ marginTop }}>
        <ul className="flex whitespace-nowrap items-center justify-center gap-12 mt-10">
          <NavItem to={"/"}>Home</NavItem>
          <NavItem to={"/"}>Resources</NavItem>
          <NavItem to={"/"}>Addiction 101</NavItem>
          <NavItem to={"/"}>Recovery Process</NavItem>
          <NavItem to={"/"}>Inspiration</NavItem>
          <NavItem to={"/about"}>About</NavItem>
          <div className="bg-primary p-2 shadow-md rounded-xl flex gap-3">
            <motion.button whileHover={{ scale: 1.1 }} className="fill-white">
              <SearchIcon />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} className="fill-white">
              <EmailIcon />
            </motion.button>
          </div>
        </ul>
      </motion.div>
    </div>
  );
};

export default Menu;
