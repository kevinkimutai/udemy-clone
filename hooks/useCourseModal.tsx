"use client";

import { useState } from "react";

interface CourseModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCourseModal = (): CourseModalStore => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useCourseModal;
