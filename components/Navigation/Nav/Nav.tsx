import React from "react";
import { Logo, Search, UserMenu } from "..";

const Nav = () => {
  return (
    <div className="fixed w-full flex justify-between items-center py-2 px-2 sm:px-8  shadow-md">
      <Logo />
      <Search />
      <UserMenu />
    </div>
  );
};

export default Nav;
