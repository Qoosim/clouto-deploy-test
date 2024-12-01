"use client";

import React from "react";
import ReactPlayer from "react-player";

export const Player = () => {
  return (
    <>
      <div className="w-full h-screen">
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/HWjShLq-GD0?si=vYolpJVorW3r1CV9"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};
