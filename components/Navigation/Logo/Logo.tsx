import React from "react";

import Image from "next/image";
import LogoImage from "../../../public/images/Udemy_logo.svg.png";
import MobileMenu from "../MobileMenu/MobileMenu";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={LogoImage}
        alt="Logo"
        className="w-28 hidden md:block object-contain"
      />
      <MobileMenu />
    </div>
  );
};

export default Logo;
