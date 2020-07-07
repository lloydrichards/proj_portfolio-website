/** @jsx jsx */
import React from "react";
import { GROUNDBACKGROUND } from "../../styles/PlasticStyles";
import { jsx, css, keyframes } from "@emotion/core";

interface SymbolProps {
  number: number;
  offset: number;
  onClick: () => void;
}

const pulse = keyframes`
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 #FCE35F;
    }

    70% {
      transform: scale(1.8);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
`;

const TutorialSpotIcon: React.FC<SymbolProps> = ({
  number,
  onClick,
  offset,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "centre",
        cursor: "pointer",
        padding: "15px",
        zIndex: 6,
        top: offset,
      }}
      onClick={onClick}
    >
      <div
        css={css`
          position: absolute;
          top: 14px;
          left: 14px;
          background: #fce35f;
          border-radius: 50%;
          margin: 10px;
          height: 20px;
          width: 20px;

          box-shadow: 0 0 0 0 #fce35f;
          transform: scale(1);
          animation: ${pulse} 3s infinite;
        `}
      />
      <svg
        width="41"
        height="41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_spot)">
          <path
            d="M19.09 1.137c9.941 0 18 8.059 18 18 0 9.94-8.059 18-18 18s-18-8.06-18-18c0-9.941 8.059-18 18-18z"
            fill="#FCE35F"
          />
        </g>
        <defs>
          <filter
            id="filter0_filter0_spot"
            x=".09"
            y=".137"
            width="40"
            height="40"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <p
        style={{
          fontSize: 24,
          fontFamily: "Muli,sans-serif",
          fontWeight: 200,
          position: "relative",
          left: 4,
          top: -2,
          margin: "auto -33px",
          color: `${GROUNDBACKGROUND}`,
        }}
      >
        {number}
      </p>
    </div>
  );
};

export default TutorialSpotIcon;
