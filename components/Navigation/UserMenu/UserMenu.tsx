import { UserButton } from "@clerk/nextjs";
import { Bell, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserMenu = () => {
  return (
    <div className="flex justify-center items-center">
      <ul className="hidden  justify-center items-center mr-8 lg:flex">
        <li className="mr-4 hover:text-purple-600 transition cursor pointer">
          <Link href="/teacher/courses">Teach On Udemy</Link>
        </li>
        <li className=" hover:text-purple-600 transition cursor pointer">
          My Learning
        </li>
      </ul>
      <ul className="hidden sm:flex justify-center items-center">
        <li className="mr-5">
          <Heart className="hover:text-red-600 text-md cursor-pointer" />
        </li>
        <li className="mr-5">
          <ShoppingCart className="hover:text-red-600 text-md cursor-pointer" />
        </li>
        <li className="mr-5">
          <Bell className="hover:text-red-600 text-md cursor-pointer" />
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default UserMenu;
