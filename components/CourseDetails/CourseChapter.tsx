"use client";

import React from "react";
import { Button } from "../ui/button";
import useChapterModal from "@/hooks/useChapterModal";
import { Chapter } from "@prisma/client";
import Modal from "../Modal/Modal";
import CourseChapterModal from "../Modal/CourseChapterModal";

type ComponentProps = {
  chapters: Chapter[];
  courseId: string;
};
const CourseChapter = ({ chapters, courseId }: ComponentProps) => {
  const { isOpen, onOpen, onClose } = useChapterModal();

  return (
    <>
      <div className="flex justify-between items-start  mb-4 p-4">
        <div>
          <h2 className="font-semibold text-xl mb-2">Chapters</h2>
          <p className="max-w-[75%] text-slate">
            Skill is the unified force of experience, intellect, and passion in
            their operation.- John Ruskin
          </p>
        </div>

        <Button
          className="py-2"
          onClick={() => {
            onOpen();
          }}
        >
          Add New Chapters
        </Button>
      </div>
      {isOpen && (
        <CourseChapterModal
          isOpen={isOpen}
          onClose={onClose}
          courseId={courseId}
        />
      )}
    </>
  );
};

export default CourseChapter;
