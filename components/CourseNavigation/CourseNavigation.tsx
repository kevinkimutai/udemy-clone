import React from "react";
import { ArrowBigLeftDash } from "lucide-react";
import Image from "next/image";
import LogoImage from "../../public/images/Udemy_logo.svg.png";
import MobileMenu from "../Navigation/MobileMenu/MobileMenu";

const CourseNavigation = ({}) => {
  return (
    <nav className="flex justify-start px-8 py-2">
      <MobileMenu />
      <Image
        src={LogoImage}
        alt="Logo"
        className="w-20 hidden md:block object-contain"
      />
    </nav>
  );
};

export default CourseNavigation;
