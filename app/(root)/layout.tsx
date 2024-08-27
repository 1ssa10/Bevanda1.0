import NavBar from "@/components/shared/navbar/NavBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" background-light900_dark900 relative">
      <NavBar />
      <section className="min-h-[calc(100vh-50px)] ">{children}</section>
      Footer
    </main>
  );
};

export default layout;
