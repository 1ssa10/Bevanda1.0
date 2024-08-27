import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import Image from "next/image";
import { navigations } from "@/constants";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        {navigations.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <NavigationMenuItem key={item.route}>
              <Link href={item.route} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} gap-1 ${isActive ? "primary-gradient text-light-900 dark:text-dark-500" : "background-light500_dark700 text-dark500_light500"}   px-4 py-2 font-spaceGrotesk `}
                >
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={`${isActive ? " invert-0 dark:invert" : "invert-colors"}  `}
                  />
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
