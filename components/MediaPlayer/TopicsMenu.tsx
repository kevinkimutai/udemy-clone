import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MediaTopics from "./MediaTopics";
import { GraduationCap } from "lucide-react";
import { Attachment, Chapter, Topic } from "@prisma/client";

type ChapterWithTopics = Chapter & {
  topic: Topic[] & {
    attachment: Attachment[];
  };
};

type ComponentProps = {
  chapters: ChapterWithTopics[];
};

const TopicsMenu = ({ chapters }: ComponentProps) => {
  return (
    <div className="block fixed top-2 right-2 md:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center p-1 bg-white">
            <GraduationCap size={20} className="mr-2" />
            Topics
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Topics</SheetTitle>
          </SheetHeader>
          <MediaTopics chapters={chapters} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default TopicsMenu;
