import React from "react";
import HamburgerIcon from "../../images/hamburger_icon.svg";
import CloseIcon from "../../images/close_icon.svg";
import { motion, useScroll, useTransform } from "framer-motion";

const Hamburger = ({ toggleMenu, isOpen }) => {
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 100], [30, 25.2]);

  return (
    <motion.button
      className="stroke-black w-9 h-8 self-center hover:fill-orange-600 hover:stroke-orange-600"
      style={{ width }}
      onClick={toggleMenu}
    >
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </motion.button>
  );
};

export default Hamburger;
