"use client";

import { Button } from "@/components/ui/button";
import {
  BarChart,
  BookOpenCheck,
  Clapperboard,
  Heart,
  Key,
  ListChecks,
  LucideIcon,
  ShoppingCart,
  UserSquare2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type RouteItems = {
  icon: LucideIcon;
  label: string;
  route: string;
};

let routes: RouteItems[];

const homeRoutes = [
  //   {
  //     route: "/user",
  //     label: "My Profile",
  //     icon: UserSquare2,
  //   },
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
    route: "/teacher/courses",
    label: "Teach On Udemy",
    icon: ShoppingCart,
  },
];

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
  {
    icon: BarChart,
    label: "Analytics",
    route: "/teacher/create",
  },
];

const MobileRoutes = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    routes = homeRoutes;
  }
  if (pathname.includes("user")) {
    routes = userRoutes;
  }
  if (pathname.includes("teacher")) {
    routes = teacherRoutes;
  }

  return (
    <>
      <ul className="pt-8 pb-4 text-left">
        {routes.map(({ route, label, icon: Icon }: RouteItems) => (
          <li key={label} className="mb-4">
            <Link href={route} className="flex items-center">
              <Icon className="text-sm mr-5" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Button>
        <Key className="mr-2 h-4 w-4" /> Login
      </Button>
    </>
  );
};

export default MobileRoutes;
