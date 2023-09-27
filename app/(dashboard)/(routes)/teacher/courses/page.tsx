"use client";

import CourseModal from "@/components/Modal/CourseModal";

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

const invoices = [
  {
    id: "INV001",
    title: "Paid",
    category: "$250.00",
    price: "Credit Card",
    number_of_students: 120,
    published: true,
  },
  {
    id: "INV002",
    title: "Pending",
    category: "$150.00",
    price: "PayPal",
    number_of_students: 120,
    published: true,
  },
  {
    id: "INV003",
    title: "Unpaid",
    category: "$350.00",
    price: "Bank Transfer",
    number_of_students: 120,
    published: true,
  },
  {
    id: "INV004",
    title: "Paid",
    category: "$450.00",
    price: "Credit Card",
    number_of_students: 120,
    published: true,
  },
  {
    id: "INV005",
    title: "Paid",
    category: "$550.00",
    price: "PayPal",
    number_of_students: 120,
    published: true,
  },
  {
    id: "INV006",
    title: "Pending",
    category: "$200.00",
    price: "Bank Transfer",
    number_of_students: 120,
    published: true,
  },
  {
    id: "INV007",
    paymentStatus: "Unpaid",
    category: "Bank Transfer",
    price: "Credit Card",
    number_of_students: 120,
    published: true,
  },
];

export default function TableDemo() {
  const { isOpen, onOpen, onClose } = useCourseModal();

  return (
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
          {invoices.map((course) => (
            <TableRow key={course.id}>
              <TableCell className="font-medium">{course.id}</TableCell>
              <TableCell>{course.title}</TableCell>
              <TableCell>{course.category}</TableCell>
              <TableCell>{course.price}</TableCell>
              <TableCell>{course.number_of_students}</TableCell>
              <TableCell>{course.paymentStatus}</TableCell>
              <TableCell>{course.published}</TableCell>
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
  );
}
