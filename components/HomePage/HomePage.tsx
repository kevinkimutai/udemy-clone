import React from "react";
import Course from "./Course";

const HomePage = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-6 pt-[15vh] px-2 sm:px-8">
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
};

export default HomePage;
