import React from "react";
import { SKYBACKGROUND, GROUNDBACKGROUND } from "./styles/PlasticStyles";

export const GarbageBackground: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "4028px",
        position: "absolute",
        zIndex: -3,
        background: `${SKYBACKGROUND}`,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "2248px",
          top: "1780px",
          background: GROUNDBACKGROUND,
          position: "absolute",
          zIndex: -2,
        }}
      />
    </div>
  );
};
