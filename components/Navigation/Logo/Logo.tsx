import React from "react";

import Image from "next/image";
import LogoImage from "../../../public/images/Udemy_logo.svg.png";
import MobileMenu from "../MobileMenu/MobileMenu";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link href={"/"}>
        <Image
          src={LogoImage}
          alt="Logo"
          className="w-28 hidden md:block object-contain"
        />
      </Link>
      <MobileMenu />
    </div>
  );
};

export default Logo;
