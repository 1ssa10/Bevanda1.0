"use client";

import React from "react";
import HeroUI from "./HeroUI";
import Video from "./Video";
const Hero = () => {
  return (
    <div className="relative flex  min-h-[calc(100vh)]  flex-col items-center  justify-between font-spaceGrotesk ">
      <HeroUI />
      <Video />
    </div>
  );
};

export default Hero;
