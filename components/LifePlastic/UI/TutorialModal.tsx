import * as React from "react";
import TutorialIcon from "./icons/tutorial";
import CloseIcon from "./icons/close";
import { Modal } from "../styles/PlasticStyles";

const TutorialModal: React.FC = ({ children }) => {
  return (
    <Modal>
      <div style={{ width: "100%"}}>
        <TutorialIcon />
        <CloseIcon onClick={() => console.log("Close!")} />
      </div>

      {children}
      <button>`{`>`}` Continue</button>
    </Modal>
  );
};

export default TutorialModal;
