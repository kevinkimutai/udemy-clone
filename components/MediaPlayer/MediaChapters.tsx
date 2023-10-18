import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Attachment, Chapter, Topic } from "@prisma/client";
import MediaTopicsTable from "./MediaTopicsTable";

type ChapterProps = {
  chapter?: Chapter & {
    topic: Topic[] & {
      attachment: Attachment[];
    };
  };
};

const MediaChapters = ({ chapter }: ChapterProps) => {
  return (
    <div className="px-4 mb-2 bg-white">
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1" defaultChecked>
          <AccordionTrigger className="font-semibold text-lg">
            {chapter?.number}.{chapter?.name}
          </AccordionTrigger>
          <AccordionContent>
            <MediaTopicsTable topics={chapter!.topic} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MediaChapters;
