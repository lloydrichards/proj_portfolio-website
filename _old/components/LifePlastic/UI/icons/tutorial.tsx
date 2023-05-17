import * as React from "react";

const TutorialIcon: React.FC = () => {
  return (
    <div style={{ float: "left", padding: "10px" }}>
      <svg
        width="33"
        height="33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clipTutorial)">
          <g filter="url(#filter0_tutorial)">
            <path
              d="M16.142 3.482c7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.97 13.333-13.333 13.333-7.364 0-13.333-5.97-13.333-13.333 0-7.364 5.97-13.333 13.333-13.333z"
              stroke="#666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g filter="url(#filter1_tutorial)">
            <path
              d="M16.283 18.82v-2.44c5.023 0 4.937-5.739 0-5.739-1.339-.095-4.017.316-4.017 2.727"
              stroke="#666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g filter="url(#filter2_tutorial)">
            <path
              d="M16.203 23.004h.014"
              stroke="#666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_tutorial"
            x="-1.191"
            y="-.52"
            width="34.667"
            height="34.667"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_tutorial"
            x="8.266"
            y="6.629"
            width="15.753"
            height="16.192"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_tutorial"
            x="12.203"
            y="19.004"
            width="8.013"
            height="8"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow"
              result="shape"
            />
          </filter>
          <clipPath id="clipTutorial">
            <path
              fill="#fff"
              transform="matrix(1 0 0 -1 .143 32.816)"
              d="M0 0h32v32H0z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default TutorialIcon;
