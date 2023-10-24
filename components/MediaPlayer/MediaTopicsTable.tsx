"use client";

import { Attachment, Topic } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Lock } from "lucide-react";
import { getUserProgress } from "@/services/actions/getUserProgress";

type TopicsWithAttachments = Topic[] & {
  attachment: Attachment[];
};

type MediaTopicsProps = {
  topics: TopicsWithAttachments;
  setVideoUrl: React.Dispatch<React.SetStateAction<Topic | undefined>>;
  userStatus: boolean;
};

const MediaTopicsTable = ({
  topics,
  setVideoUrl,
  userStatus,
}: MediaTopicsProps) => {
  const [progress, setProgress] = useState();

  useEffect(() => {
    const fetchUserProgress = async () => {
      const res = await fetch("/api/topic/user");
      const data = await res.json();

      setProgress(data);
    };

    fetchUserProgress();
  }, []);

  console.log(progress);

  return (
    <>
      {!progress ? (
        <p>loading</p>
      ) : (
        <div>
          <Table>
            <TableBody>
              {topics.map((topic) => (
                <>
                  {userStatus ? (
                    <TableRow
                      className="cursor-pointer"
                      onClick={() => {
                        setVideoUrl(topic);
                      }}
                    >
                      <TableCell>
                        <Checkbox
                          checked={
                            false
                            //@ts-ignore
                            // progress!.topicsCovered.find(
                            //   (top: Topic) => top.id === topic.id
                            // )
                            //   ? true
                            //   : false
                          }
                        />
                      </TableCell>
                      <TableCell>{topic.number}</TableCell>
                      <TableCell>{topic.name}</TableCell>
                    </TableRow>
                  ) : (
                    <TableRow className="cursor-pointer bg-slate-300">
                      <TableCell>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Lock />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>This Content Is Locked! Enroll To Course</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                      <TableCell>{topic.number}</TableCell>
                      <TableCell>{topic.name}</TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};

export default MediaTopicsTable;
