import React from "react";

interface SymbolProps {
  number: number;
  colour: string;
}

const RecycleSymbol: React.FC<SymbolProps> = ({ number, colour }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "centre",
      }}
    >
      <svg
        width="61"
        height="65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.243 9.955c2.28-4.143 8.234-4.143 10.513 0L52.02 39.51c2.2 3.998-.693 8.892-5.257 8.892H14.236c-4.564 0-7.457-4.894-5.257-8.892L25.243 9.955z"
          stroke={colour}
          stroke-width="4"
        />
        <path
          d="M33.836 53.402l-5.242-5.5 5.242-5.5M10.483 25.04l7.24-1.68 1.6 7.595M47.727 20.404l-1.363 7.645-7.287-1.43"
          stroke={colour}
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
      <p
        style={{
          fontSize: 14,
          position: "relative",
          margin: "auto -33px",
          color: `${colour}`,
        }}
      >
        {number}
      </p>
    </div>
  );
};

export default RecycleSymbol;
