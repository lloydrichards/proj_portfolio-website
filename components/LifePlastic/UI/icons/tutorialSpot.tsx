import * as React from "react";

interface Props {
  offset: number;
  onClick: () => void;
}

const TutorialSpotIcon: React.FC<Props> = ({ onClick, offset }) => {
  return (
    <div
      style={{
        position: "absolute",
        float: "left",
        cursor: "pointer",
        padding: "15px",
        zIndex: 6,
        top: offset,
      }}
      onClick={onClick}
    >
      <svg
        width="41"
        height="41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_spot)">
          <path
            d="M19.09 1.383c9.941 0 18 8.059 18 18 0 9.94-8.059 18-18 18s-18-8.06-18-18c0-9.941 8.059-18 18-18z"
            fill="#FCE35F"
          />
        </g>
        <g filter="url(#filter1_spot)">
          <path
            d="M19.28 22.09v-3.294c6.78 0 6.663-7.748 0-7.748-1.809-.129-5.425.427-5.425 3.68"
            stroke="#C4C4C4"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g filter="url(#filter2_spot)">
          <path
            d="M19.172 27.734h.017"
            stroke="#C4C4C4"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_spot"
            x=".09"
            y=".383"
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
          <filter
            id="filter1_spot"
            x="11.855"
            y="9.031"
            width="14.466"
            height="19.059"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow" />
          </filter>
          <filter
            id="filter2_spot"
            x="17.172"
            y="25.734"
            width="4.017"
            height="8"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default TutorialSpotIcon;
