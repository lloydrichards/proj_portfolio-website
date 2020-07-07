/** @jsx jsx */
import * as React from "react";
import TutorialIcon from "./icons/tutorial";
import CloseIcon from "./icons/close";
import { jsx, css } from "@emotion/core";

interface Props {
  offset: number;
  onClose: () => void;
  onContinue: () => void;
}

const TutorialModal: React.FC<Props> = ({
  offset,
  onClose,
  onContinue,
  children,
}) => {
  const ModalStyle = css`
    top: ${offset}px;
    position: relative;
    min-height: 190px;
    width: 475px;
    margin: 0 auto;
    z-index: 9;
    border-radius: 12px;
    box-shadow: 4px 4px 8px rgba(20, 20, 20, 0.12);
    background: white;
    opacity: 0.9;
    p {
      font-size: 16px;
      text-align: justify;
      align: left;
      line-height: 150%;
      font-family: Josefin Slab, sans-serif;
      margin: 0px auto;
      padding: 60px 0px 0px;
      width: 400px;
    }
    button {
      background: white;
      opacity: 0.9;
      cursor: pointer;
      float: right;
      margin: 10px 30px 30px;
      overflow: visible;
      display: block;
      border: none;
      outline: none;
      font-size: 18px;
      line-height: 83%;
      letter-spacing: 3px;
      font-family: Muli, sans-serif;
      font-weight: 200;
    }
  `;
  return (
    <div css={ModalStyle}>
      <div style={{ width: "100%" }}>
        <TutorialIcon />
        <CloseIcon onClick={onClose} />
      </div>

      {children}
      <button onClick={onContinue}>
        <i>continue</i>
      </button>
    </div>
  );
};

export default TutorialModal;
