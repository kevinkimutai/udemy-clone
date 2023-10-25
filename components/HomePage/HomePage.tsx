import React from "react";

import Category from "./Category";
import { Course } from "@prisma/client";
import LearnCourse from "./LearnCourse";

type ComponentProps = {
  courses: Course[];
};

const HomePage = ({ courses }: ComponentProps) => {
  return (
    <div className="px-2 sm:px-8 pt-[15vh]">
      <Category />
      <h1 className="font-semibold text-slate-600  mb-4 text-xl">Courses</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-6 ">
        {courses.map((course: Course) => (
          <LearnCourse course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
