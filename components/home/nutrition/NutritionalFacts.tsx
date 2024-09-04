"use client";
import { nutritionFacts } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NutritionalFacts = () => {
  const [imgScale, setImgScale] = useState<number>(200);
  useEffect(() => {
    setImgScale(window.innerWidth < 640 ? 200 : 400);
  }, []);
  return (
    <div className="flex-center background-light900_dark900 relative  w-full  flex-col rounded-2xl p-8 sm:flex-row">
      <h1 className=" h2-bold absolute top-0 -translate-y-1/2 font-orbitron text-4xl text-primary-500 sm:left-[10%]">
        Nutritional Facts
      </h1>
      <Image
        src={"/assets/images/2can.png"}
        width={imgScale}
        height={imgScale}
        alt="2can"
      />
      <div className="text-dark500_light500 mx-6  flex  max-w-3xl  flex-col gap-9">
        <div className=" mx-3 font-orbitron ">
          <span className="font-spaceGrotesk uppercase text-primary-100">
            per 330ml
          </span>
          {nutritionFacts.map((item) => (
            <div className="" key={item.label}>
              <span className=" flex-between">
                <p className="flex-1">{item.label}</p>
                <p>
                  <span>{item.value}</span>
                  <span>{item.unit}</span>
                </p>
              </span>
            </div>
          ))}
        </div>
        <p className=" paragraph-small text-center font-spaceGrotesk">
          No added sugars, fats, or proteins. Lightly infused with minerals, it
          offers a crisp and clean taste, making it a healthy hydration choice.
        </p>
      </div>
    </div>
  );
};

export default NutritionalFacts;
