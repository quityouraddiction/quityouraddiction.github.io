import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <nav className="md:flex md:flex-col md:items-center p-10">
      {/* logo */} {/* hamburger Icon */}
      <div className="flex justify-between items-center">
        <div className="mb-10">
          <StaticImage src="../images/quityouraddiction_logo.png" alt="logo" />
        </div>

        <div className="mb-10 md:hidden lg:hidden">
          <button>
            <StaticImage src="../images/hamburger_icon.png" alt="hamburger" />
          </button>
        </div>
      </div>
      {/* nav links */}
      <ul className="hidden whitespace-nowrap md:flex list-none font-semibold items-center">
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li className="">
          <Link to="/">Resources</Link>
        </li>
        <li className="">
          <Link to="/">Addiction 101</Link>
        </li>
        <li className="">
          <Link to="/">Recovery Process</Link>
        </li>
        <li className="">
          <Link to="/">Inspiration</Link>
        </li>
        <li className="">
          <Link to="/about">About</Link>
        </li>

        {/* icons */}
        <div className="bg-orange-500 p-2 rounded-xl">
          <button className="mx-3 my-0">
            <StaticImage src="../images/search_icon.png"></StaticImage>
          </button>
          <button className="mx-1 my-0">
            <StaticImage src="../images/email_icon.png"></StaticImage>
          </button>
        </div>
      </ul>
      {/* menu_mobile */}
      <div className="md:hidden bg-mobile-menu-bg bg-cover h-screen w-screen fixed top-0 left-0">
        <ul className="flex flex-col list-none font-semibold items-center gap-4 text-white justify-center">
          <motion.li initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }} transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.3
          }}className="border-b-2">
            <Link to="/">Home</Link>
          </motion.li>
          <li className="">
            <Link to="/">Resources</Link>
          </li>
          <li className="">
            <Link to="/">Addiction 101</Link>
          </li>
          <li className="">
            <Link to="/">Recovery Process</Link>
          </li>
          <li className="">
            <Link to="/">Inspiration</Link>
          </li>
          <li className="">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
