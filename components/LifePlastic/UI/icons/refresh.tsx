import * as React from "react";

interface Props {
  onClick: () => void;
}

const RefreshIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <svg
        width="33"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="repeat" clip-path="url(#clipRefresh)">
          <g id="Vector" filter="url(#filter0_refresh)">
            <path
              d="M23.422 1.332l5.333 5.333L23.422 12"
              stroke="#666"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="Vector_2" filter="url(#filter1_refresh)">
            <path
              d="M4.756 14.668v-2.667a5.333 5.333 0 015.333-5.333h18.667"
              stroke="#666"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="Vector_3" filter="url(#filter2_refresh)">
            <path
              d="M10.09 30.667l-5.334-5.334L10.089 20"
              stroke="#666"
              stroke-Width="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="Vector_4" filter="url(#filter3_refresh)">
            <path
              d="M28.756 17.332v2.667a5.333 5.333 0 01-5.334 5.333H4.756"
              stroke="#666"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_refresh"
            x="18.922"
            y="-3.168"
            width="14.333"
            height="19.667"
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
            id="filter1_refresh"
            x=".256"
            y="2.168"
            width="33"
            height="17"
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
            id="filter2_refresh"
            x=".256"
            y="15.5"
            width="14.333"
            height="19.667"
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
            id="filter3_refresh"
            x=".256"
            y="12.832"
            width="33"
            height="17"
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
          <clipPath id="clipRefresh">
            <path fill="#fff" transform="translate(.756)" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default RefreshIcon;
