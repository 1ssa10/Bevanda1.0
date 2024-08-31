import { useTheme } from "@/context/ThemeProvider";
import React, { useEffect, useRef } from "react";

const Video = () => {
  const { mode } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [videoRef]);

  return (
    <video
      ref={videoRef}
      className={`absolute bottom-0  w-screen object-cover max-sm:h-1/2  md:max-w-screen-md  ${mode === "light" ? "invert" : ""} `}
      playsInline
      preload="auto"
      muted
    >
      <source src="/assets/videos/canHeroVideo.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
