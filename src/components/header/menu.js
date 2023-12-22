import React from "react";
import { Link } from "gatsby";
import { motion, useScroll, useTransform } from "framer-motion";
import NavItem from "./navItem.js";
import QuitYourAddictionLogo from "../../images/quit_logo.svg";
import SearchIcon from "../../images/search_icon.svg";
import EmailIcon from "../../images/email_icon.svg";
const Menu = () => {
  const { scrollY } = useScroll();
  const marginTop = useTransform(scrollY, [0, 100], [0, -40]);
  return (
    <div
      className="flex items-center justify-between p-4 bg-white"
      style={{ marginTop }}
    >
      <motion.div className="w-28">
        <Link to="/">
          <QuitYourAddictionLogo />
        </Link>
      </motion.div>
      <motion.div>
        <ul className="flex whitespace-nowrap items-center justify-center gap-5">
          <NavItem to={"/"}>Home</NavItem>
          <NavItem to={"/"}>Resources</NavItem>
          <NavItem to={"/"}>Addiction 101</NavItem>
          <NavItem to={"/"}>Recovery Process</NavItem>
          <NavItem to={"/"}>Inspiration</NavItem>
          <NavItem to={"/about"}>About</NavItem>
          <div className="bg-[#E27022] p-2 shadow-md rounded-xl flex gap-3">
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
