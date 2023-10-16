"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import * as z from "zod";
import TitleForm from "../Input/TitleForm";
import { Course } from "@prisma/client";
import CategoryForm from "../Input/CategoryForm";
import PriceForm from "../Input/PriceForm";
import CourseImageForm from "../Input/CourseImageInputForm";
import CreateChapter from "../Input/CreateChapter";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
}

const CourseChapterModal = ({ isOpen, onClose, courseId }: ModalProps) => {
  const handleSubmit = async (data: any) => {
    console.log("DATA", data);
    //Submit To B/E
    console.log(data);

    let chapter = { ...data, number: +data.number, courseId };
    try {
      const res = await fetch("/api/chapter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chapter),
      });

      if (res.ok) {
        //TODO:ADD TOAST NOTIFICATION
        onClose();
      }
    } catch (error) {
      console.log("SOMETHING WENT WRONG", error);
    }
  };

  const header = {
    title: "Create Chapter",
    desc: "Topics Are Structured Within Chapters",
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} header={header}>
        <CreateChapter submitForm={handleSubmit} />
      </Modal>
    </>
  );
};

export default CourseChapterModal;
