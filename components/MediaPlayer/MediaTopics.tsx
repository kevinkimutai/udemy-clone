import { Attachment, Chapter, Topic } from "@prisma/client";
import React from "react";
import MediaTopicsTable from "./MediaTopicsTable";
import ChapterAccordion from "../CourseDetails/ChapterAccordion";
import MediaChapters from "./MediaChapters";

type ChapterWithTopics = Chapter & {
  topic: Topic[] & {
    attachment: Attachment[];
  };
};

type ComponentProps = {
  chapters: ChapterWithTopics[];
};

const MediaTopics = ({ chapters }: ComponentProps) => {
  console.log("CHAPTERS", chapters);
  return (
    <>
      <h2 className="p-2 font-semibold text-lg w-full bg-white text-center">
        Course Content
      </h2>
      {chapters.map((chap: ChapterWithTopics) => (
        <>
          <MediaChapters chapter={chap} key={chap.id} />
        </>
      ))}
    </>
  );
};

export default MediaTopics;
