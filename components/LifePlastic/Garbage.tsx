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
      }}
    >
      <div
        style={{
          width: "200vw",
          marginLeft: "-50vw",
          top: "0px",
          height: "4028px",
          position: "relative",
          zIndex: -3,
          background: `${SKYBACKGROUND}`,
        }}
      />
      <div
        style={{
          width: "200vw",
          marginLeft: "-50vw",
          height: "2248px",
          top: "-2248px",
          background: GROUNDBACKGROUND,
          position: "relative",
          zIndex: -2,
        }}
      />
    </div>
  );
};
