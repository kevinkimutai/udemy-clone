import { Course } from "@prisma/client";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ComponentProps = {
  course: Course;
};

const LearnCourse = ({ course }: ComponentProps) => {
  return (
    <Link href={`/course/${course.id}`}>
      <div className="cursor-pointer hover:scale-105 transition-all">
        <div className="rounded-lg overflow-hidden ">
          <Image
            src={course.imageUrl}
            width={200}
            height={600}
            alt={course.title}
            className="object-contain w-full"
          />
        </div>
        <div className="px-1 text-slate-700">
          <p>{course.title}</p>
          <p className="text-sm">By: Kevin Kimutai</p>
          <p className="font-semibold flex items-center text-purple-950 text-md">
            <DollarSign size={20} />
            {course.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LearnCourse;
