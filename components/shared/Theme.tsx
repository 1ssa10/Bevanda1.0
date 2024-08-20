import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { themes } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className=" border-none ">
      <MenubarMenu>
        <MenubarTrigger className=" ">
          {mode === "dark" ? (
            <Image
              src={"/assets/svg/moon.svg"}
              width={20}
              height={20}
              alt="moon"
              className="active-theme"
            />
          ) : (
            <Image
              src={"/assets/svg/sun.svg"}
              width={20}
              height={20}
              alt="sun"
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className=" text-dark500_light500 background-light700_dark700 min-w-[120px] rounded-lg border-none">
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className=" h3-semibold  flex gap-4 font-spaceGrotesk"
              onClick={() => {
                setMode(item.value);
                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else localStorage.removeItem("theme");
              }}
            >
              <Image
                src={item.icon}
                width={20}
                height={20}
                alt="theme"
                className={`${mode === item.value && "active-theme"}`}
              />
              <p className={`${mode === item.value && "active-theme"}`}>
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
