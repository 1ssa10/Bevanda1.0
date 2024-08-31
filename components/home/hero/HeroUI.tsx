import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const HeroUI = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 6,
    });
    gsap.to("#price", {
      y: 0,
      opacity: 1,
      delay: 8,
    });
  }, []);
  return (
    <>
      <div className=" text-dark500_light500 absolute top-1/4 z-10 -translate-y-1/2 px-4">
        <div className="flex-between flex-col gap-3  uppercase">
          <p
            id="hero"
            className="h2-bold text-wrap  text-center font-orbitron text-primary-800 opacity-0 sm:text-4xl"
          >
            Pure hydration, unstoppable refreshment
          </p>
          <span
            id="price"
            className=" text-dark900_light700 flex-between translate-y-full gap-2 opacity-0 "
          >
            <p className="font-medium">—just For</p>
            <span className=" primary-gradient rounded-lg px-4  py-2  font-semibold text-dark-500">
              $2.99!
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default HeroUI;
