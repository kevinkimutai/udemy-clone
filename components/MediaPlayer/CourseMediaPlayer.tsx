"use client";

import React, { Component } from "react";

import ReactPlayer from "react-player";

type ComponentProps = {
  url: string;
};

const CourseMediaPlayer = ({ url }: ComponentProps) => {
  return (
    <div>
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default CourseMediaPlayer;
