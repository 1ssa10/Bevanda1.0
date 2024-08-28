import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigations } from "@/constants";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {navigations.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${isActive ? "primary-gradient rounded-lg  " : "text-dark500_light500"} flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? " invert-0 dark:invert" : "invert-colors"}`}
              />
              <p
                className={`${isActive ? "font-bold text-light-500 dark:text-dark-500" : ""}`}
              >
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src={"/assets/svg/hamburger.svg"}
          width={36}
          height={36}
          alt="Menu"
          className=" invert-colors active-theme sm:hidden"
        />
      </SheetTrigger>
      <SheetContent className="text-dark500_light500 background-light500_dark700  ">
        <Link href={"/"} className="flex-center">
          <Image
            src={"/assets/svg/site-logo.svg"}
            width={32}
            height={32}
            alt="site-logo"
          />
          <p className="h2-bold text-dark900_light900  font-spaceGrotesk    ">
            BEV<span className=" text-primary-800">ANDA</span>
          </p>
        </Link>
        <SheetClose asChild>
          <NavContent />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
