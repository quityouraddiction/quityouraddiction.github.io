import React from "react";
import Menu from "./menu";
import MobileMenu from "./mobileMenu";

const Header = () => {
  return (
    <div className="fixed top-0 w-full">
      <div className="max-md:hidden">
        <Menu />
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
