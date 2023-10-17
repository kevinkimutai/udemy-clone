"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import * as z from "zod";
import TitleForm from "../Input/TitleForm";
import { Attachment, Course, Topic } from "@prisma/client";
import CategoryForm from "../Input/CategoryForm";
import PriceForm from "../Input/PriceForm";
import CourseImageForm from "../Input/CourseImageInputForm";
import TopicInput from "../Topic/TopicInput";
import TopicVideo from "../Topic/TopicVideo";
import TopicAttachment from "../Topic/TopicAttachment";
import TopicFreeForm from "../Topic/TopicFreeForm";
enum STEPS {
  NAME = 0,
  VIDEO_URL = 1,
  ATTACHMENT = 2,
  ISFREE = 3,
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CourseTopicModal = ({ isOpen, onClose }: ModalProps) => {
  const [step, setStep] = useState<STEPS>(STEPS.NAME);
  const [formData, setFormData] = useState<
    Topic & {
      attachment: Attachment;
    }
  >();

  const handleSubmit = (data: any) => {
    if (step === STEPS.ISFREE) {
      //submit

      console.log("FORM", formData);
    } else {
      setStep((prevState) => prevState + 1);
      setFormData((prev) => ({ ...prev, ...data }));
    }
  };

  const onNext = () => {
    setStep((prevState) => prevState + 1);
  };

  const onBack = () => {
    setStep((prevState) => prevState - 1);
  };

  let header;
  let TopicComponent;

  if (step === STEPS.NAME) {
    header = {
      title: "Create Topic",
      desc: "Journey To start Teaching Millions.",
    };
    TopicComponent = <TopicInput submitForm={handleSubmit} />;
  }

  if (step === STEPS.VIDEO_URL) {
    header = {
      title: "Upload Video",
      desc: "All Types Of Video Formats",
    };
    TopicComponent = <TopicVideo onBack={onBack} submitForm={handleSubmit} />;
  }
  if (step === STEPS.ATTACHMENT) {
    header = {
      title: "Add Files For This Topic",
      desc: "If No Files/Attachment, Click Next.",
    };
    TopicComponent = (
      <TopicAttachment onBack={onBack} submitForm={handleSubmit} />
    );
  }
  if (step === STEPS.ISFREE) {
    header = {
      title: "Is This Topic Free",
      desc: "Give A Sneak Peak To Your Potential Users",
    };
    TopicComponent = <TopicFreeForm />;
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} header={header}>
        {TopicComponent}
      </Modal>
    </>
  );
};

export default CourseTopicModal;
