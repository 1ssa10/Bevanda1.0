"use client";

import { useTheme } from "@/context/ThemeProvider";
import React from "react";

const page = () => {
  const { mode, setMode } = useTheme();
  return (
    <div className="relative flex  min-h-[calc(100vh)]  flex-col items-center  justify-between font-spaceGrotesk ">
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
  );
};

export default page;
