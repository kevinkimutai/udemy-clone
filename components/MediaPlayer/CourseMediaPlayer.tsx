"use client";

import { Topic } from "@prisma/client";
import React, { Component } from "react";

import ReactPlayer from "react-player";

type ComponentProps = {
  topic: Topic;
  playNext: () => void;
};

const CourseMediaPlayer = ({ topic, playNext }: ComponentProps) => {
  return (
    <div>
      <ReactPlayer
        className="react-player"
        url={topic.videoUrl}
        width="100%"
        height="100%"
        controls
        onEnded={playNext}
      />
    </div>
  );
};

export default CourseMediaPlayer;
