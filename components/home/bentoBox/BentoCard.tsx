import React from "react";
interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
}

const BentoCard = ({ className, children }: BentoCardProps) => {
  return (
    <div
      className={`background-light900_dark900 text-dark900_light900 rounded-lg p-6  ${className}`}
    >
      {children}
    </div>
  );
};

export default BentoCard;
