import { Category, Course, SubCategory } from "@prisma/client";
import React from "react";

type CourseWithCategories = {
  course: Course & {
    category: Category;
  } & {
    subcategory: SubCategory;
  };
};

const CourseExample = ({ course }: CourseWithCategories) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1>{course?.title}</h1>
        <div>
          <p>{course?.category?.name}</p>
          <p>{course?.subcategory?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseExample;
