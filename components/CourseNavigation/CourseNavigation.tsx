import React from "react";
import { ArrowBigLeftDash } from "lucide-react";
import Image from "next/image";
import LogoImage from "../../public/images/Udemy_logo.svg.png";
import MobileMenu from "../Navigation/MobileMenu/MobileMenu";
import Link from "next/link";

const CourseNavigation = ({}) => {
  return (
    <nav className="flex justify-start px-8 py-2">
      <MobileMenu />
      <Link href={"/"}>
        <Image
          src={LogoImage}
          alt="Logo"
          className="w-20 hidden md:block object-contain"
        />
      </Link>
    </nav>
  );
};

export default CourseNavigation;
