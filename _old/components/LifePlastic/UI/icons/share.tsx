import * as React from "react";

interface Props {
  onClick: () => void;
}

const ShareIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <svg
        width="33"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="send" clip-path="url(#clipShare)">
          <g id="Vector" filter="url(#filter0_share)">
            <path
              d="M30.088 2.668L15.422 17.335"
              stroke="#666"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="Vector_2" filter="url(#filter1_share)">
            <path
              d="M30.088 2.668l-9.333 26.667-5.333-12-12-5.334 26.667-9.333z"
              stroke="#666"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_share"
            x="10.922"
            y="-1.832"
            width="23.667"
            height="23.667"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            id="filter1_share"
            x="-1.078"
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
          <clipPath id="clipShare">
            <path fill="#fff" transform="translate(.756)" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ShareIcon;
