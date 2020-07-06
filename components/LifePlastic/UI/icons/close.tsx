import * as React from "react";

interface Props {
  onClick: () => void;
}

const CloseIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <div style={{ float: "right", cursor: "pointer", padding: "15px"  }} onClick={onClick}>
      <svg
        width="17"
        height="17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.232 15.01l6.385-6.384M15 2.242L8.617 8.626m0 0L15 15.011M8.617 8.626L2.232 2.242"
          stroke="#666"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default CloseIcon;
