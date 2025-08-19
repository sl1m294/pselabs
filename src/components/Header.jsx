import React, { useContext } from "react";
import Socials from "./Socials";
import Logo from "../img/header/logo2.png";
import MobileNav from "../components/MobileNav";

import { CursorContext } from "../context/CursorContext";

//import links

import { Link } from "react-router-dom";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* {logo imort} */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={"/"}
          className="max-w-[200px]"
        >
          <img src={Logo} alt="logo" className="w-[250px]" />
        </Link>
        {/* {Nav bar..} */}
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:flex gap-x-12"
        >
          <Link
            to={"/"}
            className="text-[#696c6d] transition hover:text-primary "
          >
            Home
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] transition hover:text-primary "
          >
            Portfolio
          </Link>{" "}
          <Link
            to={"/about"}
            className="text-[#696c6d] transition hover:text-primary "
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] transition hover:text-primary "
          >
            Contact
          </Link>
        </nav>
      </div>
      <Socials />
      {/* {mobile navigation} */}
      <MobileNav />
    </header>
  );
};

export default Header;
