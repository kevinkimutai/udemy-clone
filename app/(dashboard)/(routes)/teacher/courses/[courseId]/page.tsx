import { Button } from "@/components/ui/button";
import getCourseById from "@/services/actions/getCourseById";
import { Category, Chapter, Course, SubCategory, Topic } from "@prisma/client";
import Image from "next/image";
import React from "react";
import {
  Braces,
  CalendarDays,
  Code2,
  DollarSign,
  DollarSignIcon,
  FlagTriangleRight,
  History,
  Receipt,
  Users,
} from "lucide-react";
import CourseAccordion from "@/components/CourseDetails/CourseAccordion";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import CourseChapter from "@/components/CourseDetails/CourseChapter";
import ChapterAccordion from "@/components/CourseDetails/ChapterAccordion";
import { formatDate } from "@/utils/formatDate";

type ParamsPage = {
  courseId: string;
};
type CourseWithCategories = Course & {
  category: Category;
} & {
  subcategory: SubCategory;
};

type ChapterWithTopics = Chapter & {
  topic: Topic[];
};

const page = async ({ params }: { params: ParamsPage }) => {
  //@ts-ignore
  const { course }: CourseWithCategories = await getCourseById(params);

  return (
    <>
      {/* <CourseDetails course={course} /> */}
      <h1 className="font-semibold text-2xl">{course.title}</h1>
      <div className="p-4 flex flex-wrap gap-4">
        <div className="flex justify-between items-start bg-purple-100 rounded-2xl p-4 w-[15rem]">
          <div className="rounded-3xl bg-yellow-300">
            <Users size={55} className="p-2 text-white" />
          </div>
          <div className="flex flex-col items-end">
            <h2 className="font-semibold">Students</h2>
            <p className="font-semibold text-xl">48</p>
          </div>
        </div>

        <div className="flex justify-between items-start bg-purple-100 rounded-2xl p-4 w-[15rem]">
          <div className="rounded-3xl bg-emerald-300">
            <Receipt size={55} className="p-2 text-white" />
          </div>
          <div className="flex flex-col items-end">
            <h2 className="font-semibold">Account</h2>
            <p className="font-semibold text-xl">48</p>
          </div>
        </div>
      </div>

      <div className="p-4 w-1/2">
        <div className="flex  items-center">
          <p className="w-1/2 flex justify-start items-center">
            <DollarSignIcon size={15} />:<span className="ml-2">Price</span>
          </p>
          <p className="w-1/2 font-semibold">{course.price}</p>
        </div>
      </div>
      <div className="p-4 w-1/2">
        <div className="flex  items-center">
          <p className="w-1/2 flex justify-start items-center">
            <Braces size={15} />:<span className="ml-2">Category</span>
          </p>
          <p className="w-1/2 font-semibold">{course.category.name}</p>
        </div>
      </div>
      <div className="p-4 w-1/2">
        <div className="flex  items-center">
          <p className="w-1/2 flex justify-start items-center">
            <CalendarDays size={15} />:<span className="ml-2">Created</span>
          </p>
          <p className="w-1/2 font-semibold">{formatDate(course.createdAt)}</p>
        </div>
      </div>

      <div className="p-4 w-1/2">
        <div className="flex justify-end gap-4 ">
          <Button variant={"outline"}>Edit</Button>
          <Button type="submit">Publish</Button>
        </div>
      </div>

      <div className="p-4 w-2/3">
        <CourseAccordion desc={course.description} />
      </div>
      <CourseChapter chapters={course.chapters} courseId={course.id} />

      {course.chapters.map((chap: ChapterWithTopics) => (
        <>
          <ChapterAccordion chapter={chap} />
        </>
      ))}

      {/* {course.chapters.map((chap: Chapter) => (
          <div className="p-4 w-1/2" key={chap.id}>
            <CourseAccordion desc={course.description} />
          </div>
        ))
      )} */}
    </>
  );
};

export default page;
