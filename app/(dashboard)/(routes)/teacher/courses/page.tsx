"use client";

import CourseModal from "@/components/Modal/CourseModal";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useCourseModal from "@/hooks/useCourseModal";
import { FileEdit, Trash2 } from "lucide-react";
import { Category, Course } from "@prisma/client";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

type CoursesWithCategories = Course & {
  category: Category;
};

export default function TableDemo() {
  const { isOpen, onOpen, onClose } = useCourseModal();
  const [courses, setCourses] = useState<CoursesWithCategories[]>();

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/course/teacher");

      if (res.ok) {
        const data: CoursesWithCategories[] = await res.json();
        setCourses(data);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      {courses?.length === 0 ? (
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center flex-col bg-black px-4 py-2 text-white rounded-md">
            <p>You Dont Have Any Courses</p>
            <p>Become A Teacher</p>
          </div>
        </div>
      ) : (
        <>
          <CourseModal isOpen={isOpen} onClose={onClose} />

          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="font-bold mb-2 text-xl">Courses</h1>
              <p className="text-slate-500">Manage All Your Courses</p>
            </div>
            <Button onClick={() => onOpen()}>Add Course</Button>
            {/* <DialogDemo /> */}
          </div>

          <div className="w-full bg-slate-400 h-[1px] mb-10" />

          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>$ Price</TableHead>
                <TableHead>No/Students</TableHead>
                <TableHead>Date Updated</TableHead>
                <TableHead>Published</TableHead>
                <TableHead className="text-right">Edit/Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses?.map((course: CoursesWithCategories) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">
                    {course.id.slice(0, 6) + "..."}
                  </TableCell>
                  <TableCell>
                    <Link href={`/teacher/courses/${course.id}`}>
                      <p className="text-purple-900 font-semibold">
                        {course.title}
                      </p>
                    </Link>
                  </TableCell>
                  <TableCell>{course.category.name}</TableCell>
                  <TableCell>{course.price}</TableCell>
                  {/* TODO:CALCULATE NO/STUDENTS */}
                  <TableCell>30</TableCell>
                  <TableCell>{formatDate(course.updatedAt)}</TableCell>
                  <TableCell>
                    {course.isPublished ? (
                      <p className="px-2 py-1 flex justify-center items-center bg-purple-800 rounded-md">
                        true
                      </p>
                    ) : (
                      <p className="px-2 py-1 flex justify-center items-center bg-black text-white rounded-md">
                        false
                      </p>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-center items-center gap-2">
                      <FileEdit size={18} />
                      <Trash2 size={18} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
}
