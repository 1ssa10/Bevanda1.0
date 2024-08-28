import React from "react";

const HeroUI = () => {
  return (
    <>
      <div className=" text-dark500_light500 absolute top-1/4 z-10 -translate-y-1/2 px-4">
        <div className="flex-between flex-col gap-3  uppercase">
          <p className="h2-bold text-wrap  text-center font-orbitron text-primary-800 sm:text-4xl">
            Pure hydration, unstoppable refreshment
          </p>
          <span className=" text-dark900_light700 flex-between gap-2 ">
            <p>—just For</p>
            <span className=" primary-gradient rounded-lg px-4  py-2  text-dark-500">
              $2.99!
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default HeroUI;
