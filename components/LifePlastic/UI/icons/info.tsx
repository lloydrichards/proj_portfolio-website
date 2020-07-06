import * as React from "react";

interface Props {
    onClick: () => void
}

const InfoIcon: React.FC<Props> = ({onClick}) => {
  return (
    <div onClick={onClick}>
      <svg
        width="33"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="info" clip-path="url(#clipInfo)">
          <g id="Vector" filter="url(#filter0_info)">
            <path
              d="M16.964 29.335c7.364 0 13.334-5.97 13.334-13.334 0-7.363-5.97-13.333-13.334-13.333S3.631 8.638 3.631 16.001c0 7.364 5.97 13.334 13.333 13.334z"
              stroke="#FCE35F"
              strokeWidth="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g id="Vector_2" filter="url(#filter1_info)">
            <path
              d="M16.965 21.333V16"
              stroke="#FCE35F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="Vector_3" filter="url(#filter2_info)">
            <path
              d="M16.965 10.668h.013"
              stroke="#FCE35F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_info"
            x="-.869"
            y="-1.832"
            width="35.667"
            height="35.667"
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
            id="filter1_info"
            x="12.465"
            y="11.5"
            width="9"
            height="14.333"
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
            id="filter2_info"
            x="12.465"
            y="6.168"
            width="9.013"
            height="9"
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
          <clipPath id="clipInfo">
            <path fill="#fff" transform="translate(.965)" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default InfoIcon;
