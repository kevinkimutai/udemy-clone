"use client";

import { useState } from "react";

interface CourseTopicStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useTopicModal = (): CourseTopicStore => {
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

export default useTopicModal;
