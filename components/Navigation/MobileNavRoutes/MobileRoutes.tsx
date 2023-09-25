import { Button } from "@/components/ui/button";
import {
  BookOpenCheck,
  Heart,
  Key,
  LucideIcon,
  ShoppingCart,
  UserSquare2,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type RouteItems = {
  icon: LucideIcon;
  label: string;
  route: string;
};

const routes: RouteItems[] = [
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

const MobileRoutes = () => {
  return (
    <>
      <ul className="pt-8 pb-4 text-left">
        {routes.map(({ route, label, icon: Icon }: RouteItems) => (
          <li key={label} className="mb-4">
            <Link href={route} className="flex items-center">
              <Icon className=" text-md mr-5" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Button>
        <Key className="mr-2 h-4 w-4" /> Login
      </Button>
    </>

    // <ul>
    //   {routes.map(({ route, label, icon: Icon }) => {
    //     <li key={label}>
    //       <Link href={route}>
    //         <Icon />
    //         {label}
    //       </Link>
    //     </li>;
    //   })}
    // </ul>
  );
};

export default MobileRoutes;
