"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  BarChart,
  BookOpenCheck,
  Clapperboard,
  Compass,
  Heart,
  Layout,
  List,
  ListChecks,
  LucideIcon,
  ShoppingCart,
} from "lucide-react";
import ImageLogo from "../../public/images/Udemy_logo.svg.png";

type RouteItems = {
  icon: LucideIcon;
  label: string;
  route: string;
};

let sideBarRoutes: RouteItems[];

const userRoutes = [
  {
    route: "/user/learning",
    label: "My Learning",
    icon: BookOpenCheck,
  },
  {
    route: "/user/wishlist",
    label: "Wishlist",
    icon: Heart,
  },
  {
    route: "/user/cart",
    label: "Cart",
    icon: ShoppingCart,
  },
  {
    route: "/user/cart",
    label: "Teach On Udemy",
    icon: Clapperboard,
  },
];

const teacherRoutes = [
  {
    icon: ListChecks,
    label: "Courses",
    route: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    route: "/teacher/analytics",
  },
];

const SideBar = () => {
  const pathname = usePathname();

  if (pathname.includes("/teacher")) {
    sideBarRoutes = teacherRoutes;
  }

  if (pathname.includes("/user")) {
    sideBarRoutes = userRoutes;
  }

  console.log(pathname);

  return (
    <aside className="fixed top-0 bottom-0 shadow-lg w-1/5 bg-purple-100 py-4 justify-start ">
      <Image src={ImageLogo} alt="home" className="w-16 px-5 object-contain" />
      <ul className="pt-12">
        {sideBarRoutes.map(({ route, label, icon: Icon }) => (
          <li
            key={label}
            className={`flex p-4 justify-start items-center ${
              pathname === route
                ? "bg-white border-r-4 border-r-purple-600 shadow-sm"
                : ""
            }`}
          >
            <Icon className="mr-2 text-sm" />
            {label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
