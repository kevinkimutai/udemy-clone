import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Topic } from "@prisma/client";
import { Pencil, Trash } from "lucide-react";

import { formatDate } from "../../utils/formatDate";

type ComponentProps = {
  topics: Topic[];
};

const TopicTable = ({ topics }: ComponentProps) => {
  return (
    <Table>
      <TableCaption>Topics For Chapter</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Id</TableHead>
          <TableHead>Topic Number</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Is Free?</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topics.map((topic) => (
          <>
            <TableRow>
              <TableCell className="font-medium">
                {topic.id.slice(0, 6) + "..."}
              </TableCell>
              <TableCell>{topic.number}</TableCell>
              <TableCell>{topic.name}</TableCell>
              <TableCell>{topic.isFree === true ? "Yes" : "No"}</TableCell>
              <TableCell>{formatDate(topic.createdAt)}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-center items-center gap-4">
                  <Pencil size={15} className="cursor-pointer" />
                  <Trash size={15} className="cursor-pointer" />
                </div>
              </TableCell>
            </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  );
};

export default TopicTable;
