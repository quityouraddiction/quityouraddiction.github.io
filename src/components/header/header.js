import React from "react";
import Menu from "./menu";
import MobileMenu from "./mobileMenu";
import ScocialMediaIcons from "./socialmedial";

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-10 ">
      <div className="max-[912px]:hidden flex flex-col items-center bg-white pt-4">
        <ScocialMediaIcons flexDirection={"flex-row"} />
        <Menu />
      </div>
      <div className="min-[913px]:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
