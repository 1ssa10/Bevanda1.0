import BentoBox from "@/components/home/bentoBox/BentoBox";
import Hero from "@/components/home/hero/Hero";
import NutritionalFacts from "@/components/home/nutrition/NutritionalFacts";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <section className=" background-light500_dark700 flex-center   w-full  flex-col p-6">
        <BentoBox />
        <NutritionalFacts />
      </section>
    </>
  );
};

export default page;
