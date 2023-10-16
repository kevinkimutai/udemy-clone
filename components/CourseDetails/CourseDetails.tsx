import { Category, Course, SubCategory } from "@prisma/client";
import { Code2, DollarSign, FlagTriangleRight, History } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type ComponentProps = {
  course: Course & {
    category: Category;
  } & {
    subcategory: SubCategory;
  };
};

const CourseDetails = ({ course }: ComponentProps) => {
  return (
    <div className="w-full">
      <div className="bg-purple-100 flex mb-4 rounded-2xl p-6 ">
        <div className="w-1/2 ">
          <h1 className="font-semibold text-2xl text-gray-500 mb-6">
            {course?.title}
          </h1>
          <p className="flex  items-center mb-2">
            <DollarSign className="mr-1" size={15} />

            <span className="font-semibold text-orange-400 text-lg ml-2">
              {+course.price.toFixed(2)}
            </span>
          </p>
          <p className="flex  items-center">
            <Code2 className="mr-1" size={15} />
            <span className="ml-2 ">{course?.category?.name}</span>
          </p>
          <p className="flex  items-center">
            <History className="mr-1" size={15} />

            <span className="ml-2 ">7.5 Total Hours</span>
          </p>
          <p className="flex  items-center">
            <FlagTriangleRight className="mr-1" size={15} />
            {/* <span className="ml-2 ">Created: {Date(course.createdAt)}</span> */}
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src={course.imageUrl}
            alt="Banner"
            width={200}
            height={150}
            className="w-full object-contain"
          />
          <div className="flex justify-end gap-4 mt-4">
            <Button variant={"outline"}>Edit</Button>
            <Button type="submit">Publish</Button>
          </div>
        </div>
      </div>
      {/* <div className=" overflow-hidden border border-blue-200">
          
        </div> */}
    </div>
  );
};

export default CourseDetails;
