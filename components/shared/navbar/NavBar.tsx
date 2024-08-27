"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";

import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <nav className="flex-between background-light900_dark900  fixed z-50 w-full gap-5 p-6 ">
      <Link href={"/"} className="flex-center">
        <Image
          src={"/assets/svg/site-logo.svg"}
          width={32}
          height={32}
          alt="site-logo"
        />
        <p className="h2-bold text-dark900_light900  font-spaceGrotesk max-sm:hidden    ">
          BEV<span className=" text-primary-800">ANDA</span>
        </p>
      </Link>
      <Navigation />
      <Theme />
    </nav>
  );
};

export default NavBar;
