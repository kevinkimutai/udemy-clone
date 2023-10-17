"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Chapter, Topic } from "@prisma/client";
import { Button } from "../ui/button";
import TopicTable from "../Topic/TopicTable";
import useTopicModal from "@/hooks/useTopicModal";
import CourseTopicModal from "../Modal/CourseTopicModal";

type ChapterProps = {
  chapter?: Chapter & {
    topic: Topic[];
  };
};

const ChapterAccordion = ({ chapter }: ChapterProps) => {
  const { isOpen, onOpen, onClose } = useTopicModal();

  console.log(chapter);

  return (
    <>
      <div className="px-4 mb-4">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="item-1" defaultChecked>
            <AccordionTrigger className="font-semibold text-lg">
              {chapter?.number}.{"   "}
              {chapter?.name}
            </AccordionTrigger>
            <AccordionContent>
              {!chapter?.topic ? null : <TopicTable topics={chapter!.topic} />}
              <div className="flex justify-end items-end">
                <Button
                  onClick={() => {
                    onOpen();
                  }}
                >
                  Add Topic
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {isOpen && (
        <CourseTopicModal
          isOpen={isOpen}
          onClose={onClose}
          chapterId={chapter!.id}
        />
      )}
    </>
  );
};

export default ChapterAccordion;
