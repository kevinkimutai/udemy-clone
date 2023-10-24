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
  setVideoUrl: React.Dispatch<React.SetStateAction<Topic | undefined>>;
  userStatus: boolean;
};

const MediaTopics = ({ chapters, setVideoUrl, userStatus }: ComponentProps) => {
  return (
    <>
      <h2 className="p-2 font-semibold text-lg w-full bg-white text-center">
        Course Content
      </h2>
      {chapters.map((chap: ChapterWithTopics) => (
        <>
          <MediaChapters
            chapter={chap}
            key={chap.id}
            setVideoUrl={setVideoUrl}
            userStatus={userStatus}
          />
        </>
      ))}
    </>
  );
};

export default MediaTopics;
