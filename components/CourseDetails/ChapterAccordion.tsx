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
    topics: Topic[];
  };
};

const ChapterAccordion = ({ chapter }: ChapterProps) => {
  const { isOpen, onOpen, onClose } = useTopicModal();

  return (
    <>
      <div className="px-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" defaultChecked>
            <AccordionTrigger>{chapter?.name}</AccordionTrigger>
            <AccordionContent>
              {!chapter?.topics ? null : (
                <TopicTable topics={chapter!.topics} />
              )}
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

      {isOpen && <CourseTopicModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

export default ChapterAccordion;
