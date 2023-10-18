import { Attachment, Topic } from "@prisma/client";
import React from "react";
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

type TopicsWithAttachments = Topic[] & {
  attachment: Attachment[];
};

type MediaTopicsProps = {
  topics: TopicsWithAttachments;
};

const MediaTopicsTable = ({ topics }: MediaTopicsProps) => {
  return (
    <div>
      <Table>
        <TableBody>
          {topics.map((topic) => (
            <>
              <TableRow className="cursor-pointer">
                <TableCell>
                  <Checkbox defaultChecked />
                </TableCell>
                <TableCell>{topic.number}</TableCell>
                <TableCell>{topic.name}</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MediaTopicsTable;
