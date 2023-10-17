import { Button } from "@/components/ui/button";
import getCourseById from "@/services/actions/getCourseById";
import { Category, Chapter, Course, SubCategory, Topic } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { Code2, DollarSign, FlagTriangleRight, History } from "lucide-react";
import CourseAccordion from "@/components/CourseDetails/CourseAccordion";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import CourseChapter from "@/components/CourseDetails/CourseChapter";
import ChapterAccordion from "@/components/CourseDetails/ChapterAccordion";

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
      <CourseDetails course={course} />
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
