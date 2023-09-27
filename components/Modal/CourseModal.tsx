"use client";

import React, { useState } from "react";
import Modal from "./Modal";

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

  const onNext = () => {
    setStep((prevState) => prevState + 1);
  };
  const onBack = () => {
    setStep((prevState) => prevState - 1);
  };

  let header;
  if (step === STEPS.DESC) {
    header = {
      title: "Create Course",
      desc: "Teach Millions Of Learners Across The Globe.",
    };
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CourseModal;
