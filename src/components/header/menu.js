import React from "react";
import { Link } from "gatsby";
import { motion, useScroll, useTransform } from "framer-motion";
import NavItem from "./navItem.js";
import QuitYourAddictionLogo from "../../images/quit_logo.svg";
import SearchIcon from "../../images/search_icon.svg";
import EmailIcon from "../../images/email_icon.svg";
import ScocialMediaIcons from "./socialmedial.js";
const Menu = () => {
  const { scrollY } = useScroll();
  const marginTop = useTransform(scrollY, [0, 100], [0, -40]);
  return (
    <div
      className="flex items-center justify-between p-5 bg-white w-full"
      style={{ marginTop }}
    >
      <motion.div className="w-32">
        <Link to="/">
          <QuitYourAddictionLogo />
        </Link>
      </motion.div>
      <motion.div className="flex gap-5 items-center">
        <ul className="flex whitespace-nowrap items-center justify-center gap-5">
          <NavItem to={"/"}>Home</NavItem>
          <NavItem to={"/"}>Resources</NavItem>
          <NavItem to={"/"}>Addiction 101</NavItem>
          <NavItem to={"/"}>Recovery Process</NavItem>
          <NavItem to={"/"}>Inspiration</NavItem>
          <NavItem to={"/about"}>About</NavItem>

        </ul>


            <div className="bg-primary p-2 shadow-md rounded-xl flex justify-center gap-3 w-20">
              <motion.button whileHover={{ scale: 1.1 }} className="fill-white">
                <SearchIcon />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="fill-white">
                <EmailIcon />
              </motion.button>
            </div>


      </motion.div>
    </div>
  );
};
export default Menu;
