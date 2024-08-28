import { useTheme } from "@/context/ThemeProvider";
import React from "react";

const Video = () => {
  const { mode } = useTheme();
  return (
    <video
      className={`absolute bottom-0  w-screen object-cover max-sm:h-1/2  md:max-w-screen-md  ${mode === "light" ? "invert" : ""} `}
      autoPlay
      playsInline
      muted
    >
      <source src="/assets/videos/canHeroVideo.mp4" />
    </video>
  );
};

export default Video;
