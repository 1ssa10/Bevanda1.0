import { bentoList } from "@/constants";
import React from "react";
import BentoCard from "./BentoCard";

const BentoBox = () => {
  return (
    <div className=" mb-32 grid w-full auto-rows-[300px] grid-cols-4 gap-4">
      {bentoList.map((item) => (
        <BentoCard className={`${item.className} `} key={item.index}>
          {item.text}
        </BentoCard>
      ))}
    </div>
  );
};

export default BentoBox;
