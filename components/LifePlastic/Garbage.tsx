import React from "react";
import { SKYBACKGROUND, GROUNDBACKGROUND } from "./styles/PlasticStyles";

export const GarbageBackground: React.FC = () => {
  return (
    <svg
      width="100%"
      height="4028"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        zIndex: -3,
        background: `${SKYBACKGROUND}`,
      }}
    >
      <g id="GarbageBackground">
        <path
          id="Rectangle 114"
          fill={GROUNDBACKGROUND}
          d="M-86.893 1780.04h1212.84v2251.17H-86.893z"
        />
        <g
          id="trash-2"
          stroke="#fff"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path id="Vector" d="M950.809 3969.82H998.85" />
          <path
            id="Vector_2"
            d="M964.151 3969.82v-5.54c0-1.48.563-2.89 1.564-3.93a5.234 5.234 0 013.774-1.62h10.676c1.416 0 2.774.58 3.775 1.62a5.661 5.661 0 011.563 3.93v5.54m8.007 0v38.82c0 1.47-.562 2.88-1.563 3.92a5.235 5.235 0 01-3.775 1.62h-26.689a5.235 5.235 0 01-3.775-1.62 5.655 5.655 0 01-1.563-3.92v-38.82h37.365z"
          />
          <path id="Vector_3" d="M969.49 3983.69v16.63" />
          <path id="Vector_4" d="M980.166 3983.69v16.63" />
        </g>
        <path
          id="Vector 154"
          d="M72.973 3969.25v6.12c0 5.35 4.333 9.68 9.678 9.68h817.71m36.384-15.8v6.12c0 5.35-4.333 9.68-9.678 9.68h-26.706m0 0v15.73c0 5.35 4.333 9.68 9.678 9.68h26.706"
          stroke="#fff"
          stroke-width="3.723"
        />
      </g>
    </svg>
  );
};
