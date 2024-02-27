import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import Hamburger from "./hamburger.js";
import NavItem from "./navItem.js";
import ScocialMediaIcons from "./socialmedial.js";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import SearchIcon from "../../images/search_icon.svg";
import EmailIcon from "../../images/email_icon.svg";
import QuitYourAddictionLogo from "../../images/quit_logo.svg";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 100], [112, 78.4]);
  const padding = useTransform(scrollY, [0, 100], [40, 28]);
  const handleClickOutside = (event) => {
    if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className="fixed w-full">
      <motion.div
        className="bg-white flex justify-between p-10"
        style={{ padding }}
      >
        <motion.div className="w-32" style={{ width }}>
          {}
          <Link to="/">
            <QuitYourAddictionLogo key="mobile" />
          </Link>
        </motion.div>
        <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            ref={menuRef}
            className="flex justify-between bg-white"
          >
            <div className="self-center p-7">
              <ScocialMediaIcons flexDirection={"flex-col"} />
            </div>
            <motion.nav className="flex justify-end text-right">
              <motion.ul className="flex flex-col gap-5 p-7">
                <NavItem to={"/"}>Home</NavItem>
                <NavItem to={"/"}>Resources</NavItem>
                <NavItem to={"/"}>Addiction 101</NavItem>{" "}
                <NavItem to={"/"}>Recovery Process</NavItem>
                <NavItem to={"/"}>Inspiration</NavItem>
                <NavItem to={"/about"}>About</NavItem>
                
                <div className="flex justify-end gap-3">
                  <button aria-label="search">
                    <SearchIcon className="fill-orange-500" />
                  </button>
                  <button aria-label="email">
                    <EmailIcon className="fill-orange-500" />
                  </button>
                </div>
              </motion.ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default MobileMenu;
