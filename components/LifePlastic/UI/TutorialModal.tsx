import * as React from "react";
import TutorialIcon from "./icons/tutorial";
import CloseIcon from "./icons/close";
import { Modal } from "../styles/PlasticStyles";

interface Props {
  offset: number;
  onClose: () => void;
  onContinue: () => void;
}

const TutorialModal: React.FC<Props> = ({offset, onClose, onContinue, children }) => {
  return (
    <Modal top={offset} >
      <div style={{ width: "100%" }}>
        <TutorialIcon />
        <CloseIcon onClick={onClose} />
      </div>

      {children}
      <button onClick={onContinue}>
        <i>continue</i>
      </button>
    </Modal>
  );
};

export default TutorialModal;
