"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CourseMediaPlayer from "@/components/MediaPlayer/CourseMediaPlayer";
import { Category, Chapter, Course, SubCategory, Topic } from "@prisma/client";
import getCourseById from "@/services/actions/getCourseById";
import CourseAccordion from "@/components/CourseDetails/CourseAccordion";
import { Braces, CalendarDays, DollarSignIcon, Users2 } from "lucide-react";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import MediaTopics from "@/components/MediaPlayer/MediaTopics";
import TopicsMenu from "@/components/MediaPlayer/TopicsMenu";

type ParamsPage = {
  courseId: string;
};

type CourseWithCategories = Course & {
  category: Category;
} & {
  subcategory: SubCategory;
} & {
  chapters: Chapter[];
} & {
  topic: Topic[];
};

const Page = ({ params }: { params: ParamsPage }) => {
  const [course, setCourse] = useState<CourseWithCategories>();
  const [videoUrl, setVideoUrl] = useState<Topic>();
  const [paidStatus, setPaidStatus] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchCourse = async () => {
      //@ts-ignore
      const res = await fetch(`/api/course/${params.courseId}`);

      if (res.ok) {
        const data = await res.json();

        setCourse(data);
        //@ts-ignore
        setVideoUrl(data.chapters[0].topic[0]);
      }
    };

    const fetchPaidStatus = async () => {
      //@ts-ignore
      const res = await fetch(`/api/course/${params.courseId}/user`);

      if (res.status === 200) {
        setPaidStatus(true);
      }

      if (res.status === 401) {
        setPaidStatus(false);
      }
    };

    fetchCourse();
    fetchPaidStatus();
  }, [params]);

  const checkout = async () => {
    const res = await fetch(`/api/course/${course?.id}/checkout`);

    if (res.ok) {
      const data = await res.json();

      router.push(data.url);
    }
  };

  const playNext = async () => {
    //@ts-ignore
    let chapterIndex = course?.chapters.findIndex((chap) =>
      //@ts-ignore
      chap.topic.find((topic) => videoUrl.id === topic.id)
    );

    //@ts-ignore
    let topicsLength = course?.chapters[chapterIndex].topic.length;

    //@ts-ignore
    let topicIndex = course?.chapters[chapterIndex].topic.findIndex(
      (topic: Topic) => topic.id === videoUrl!.id
    );

    topicIndex = topicIndex + 1;
    console.log(chapterIndex, topicsLength, topicIndex);

    // if (!paidStatus) {
    //   return;
    // }

    if (topicIndex >= topicsLength) {
      return;
    } else {
      //SAVE USER PROGRESS
      const res = await fetch(`/api/course/${course?.id}/user`);

      if (res.ok) {
        //@ts-ignore
        setVideoUrl(course?.chapters[chapterIndex].topic[topicIndex]);
      }
    }
  };

  return (
    <>
      {!course ? (
        //TODO:ADD A SPINNER
        <p>loading</p>
      ) : (
        <div className="flex">
          <div className="w-full md:w-[70%] pl-8">
            <CourseMediaPlayer topic={videoUrl!} playNext={playNext} />
            <h1 className="font-semibold text-2xl mt-4">{course.title}</h1>
            <div className="p-4 w-full">
              <CourseAccordion desc={course.description} />
            </div>
            <div className="p-4 w-1/2">
              <div className="flex  items-center">
                <p className="w-1/2 flex justify-start items-center">
                  <DollarSignIcon size={15} />:
                  <span className="ml-2">Price</span>
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
                  <CalendarDays size={15} />:
                  <span className="ml-2">Created</span>
                </p>
                <p className="w-1/2 font-semibold">
                  {formatDate(course.createdAt)}
                </p>
              </div>
            </div>
            <div className="p-4 w-1/2">
              <div className="flex  items-center">
                <p className="w-1/2 flex justify-start items-center">
                  <Users2 size={15} />:
                  <span className="ml-2">No. Students</span>
                </p>
                {/* TODO:CALCULATE NO OF STUDENTS */}
                <p className="w-1/2 font-semibold">300</p>
              </div>
            </div>
            <div className="p-4 w-1/2">
              <div className="flex w-full gap-4 ">
                <Button type="submit" onClick={checkout} className="w-full">
                  Enroll Now @{course.price}
                </Button>
              </div>
            </div>
          </div>
          {/* @ts-ignore */}
          <TopicsMenu chapters={course.chapters} setVideoUrl={setVideoUrl} />
          <div className="fixed bottom-0 top-0 right-0 w-[30%] bg-purple-500 shadow-md hidden md:block">
            <MediaTopics
              //@ts-ignore
              chapters={course.chapters}
              setVideoUrl={setVideoUrl}
              userStatus={paidStatus}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
