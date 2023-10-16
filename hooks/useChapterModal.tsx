"use client";

import { useState } from "react";

interface CourseChapterStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useChapterModal = (): CourseChapterStore => {
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

export default useChapterModal;
