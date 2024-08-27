"use client";

import { useTheme } from "@/context/ThemeProvider";
import React from "react";

const page = () => {
  const { mode, setMode } = useTheme();
  return (
    <>
      <div className="relative flex  min-h-[calc(100vh)]  flex-col items-center  justify-between font-spaceGrotesk ">
        <p className=" text-dark500_light500 absolute top-1/4 z-10 -translate-y-1/2">
          hello
        </p>
        <video
          className={`absolute bottom-0  w-screen md:max-w-screen-md  ${mode === "light" ? "invert" : ""} `}
          autoPlay
          playsInline
          muted
          loop
        >
          <source src="/assets/videos/canHeroVideo.mp4" />
        </video>
      </div>
    </>
  );
};

export default page;
