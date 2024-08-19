"use client";

import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { mode, setMode } = useTheme();
  return (
    <nav className="flex-between background-light900_dark900  w-full p-6">
      <Link href={"/"} className="flex-center">
        <Image
          src={"/assets/svg/site-logo.svg"}
          width={32}
          height={32}
          alt="site-logo"
        />
        <p className="h2-bold text-dark900_light900  font-spaceGrotesk">
          BEV<span className=" text-primary-800">ANDA</span>
        </p>
      </Link>
      <button
        className="text-dark500_light500"
        onClick={() => {
          if (mode === "light") {
            setMode("dark");
            localStorage.theme = "dark";
          } else {
            setMode("light");
            localStorage.removeItem("theme");
          }
        }}
      >
        {mode} theme
      </button>
    </nav>
  );
};

export default NavBar;
