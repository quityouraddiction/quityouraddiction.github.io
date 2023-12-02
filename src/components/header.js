import * as React from "react";
import { Link } from "gatsby";
import {heading, navLinks, navLinkItem, navLinkText } from "./layout.module.css"

const Header = () => {
  return (
    <nav className={heading}>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={navLinkText}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
