"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import * as z from "zod";
import TitleForm from "../Input/TitleForm";
import { Course } from "@prisma/client";
import CategoryForm from "../Input/CategoryForm";
import Category from "../Input/Category";

enum STEPS {
  DESC = 0,
  CATEGORY = 1,
  PRICE = 2,
  IMAGEURL = 3,
  ATTACHMENT = 4,
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CourseModal = ({ isOpen, onClose }: ModalProps) => {
  const [step, setStep] = useState<STEPS>(STEPS.DESC);
  const [formData, setFormData] = useState<Course>();

  const handleSubmit = (data: any) => {
    console.log("DATA", data);
    setStep((prevState) => prevState + 1);
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const onNext = () => {
    setStep((prevState) => prevState + 1);
  };

  const onBack = () => {
    setStep((prevState) => prevState - 1);
  };

  let header;
  let FormComponent;

  if (step === STEPS.DESC) {
    header = {
      title: "Create Course",
      desc: "Teach Millions Of Learners Across The Globe.",
    };
    FormComponent = <TitleForm submitForm={handleSubmit} />;
  }

  if (step === STEPS.CATEGORY) {
    header = {
      title: "Categories",
      desc: "We Offer All Types Of Categories",
    };
    FormComponent = <Category onBack={onBack} submitForm={handleSubmit} />;
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} header={header}>
        {FormComponent}
      </Modal>
    </>
  );
};

export default CourseModal;
