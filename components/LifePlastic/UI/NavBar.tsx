import React from "react";
import { Button, NavBar } from "../styles/PlasticStyles";
import { SystemList } from "../Interfaces/Interfaces";

interface NavProps {
  systems: SystemList;
  addRecyclable: (route: string) => void;
  resetState: () => void;
  modeChange: () => void;
  saveSystem: () => void;
}
const randomRecycling = (addItem: (pickedItem: string) => void) => (
  possibleRoutes: Array<string>
) => {
  const randomNumber = Math.floor(Math.random() * possibleRoutes.length);
  addItem(possibleRoutes[randomNumber]);
};

const UIButtons: React.FC<NavProps> = ({
  systems,
  addRecyclable,
  resetState,
  modeChange,
}) => {
  return (
    <div style={{ position: "absolute", top: 1700 }}>
      <Button
        style={{
          top: "1350px",
          left: "885px",
          position: "absolute",
          transform: "rotate(0deg)",
        }}
        onClick={() => resetState()}
      >
        RESET
      </Button>
      <Button
        style={{
          top: "1480px",
          left: "885px",
          position: "absolute",
          transform: "rotate(0deg)",
        }}
        onClick={() => modeChange()}
      >
        MODE
      </Button>
      <NavBar>
        <Button
          onClick={() => {
            randomRecycling(addRecyclable)([
              "Mixed-PS-Machine",
              "Mixed-PS-Hand",
              "Mixed-Other",
              "Mixed-LDPE",
              "Mixed-PP",
              "Mixed-HDPE",
              "Mixed-PETE",
            ]);
          }}
          disabled={
            !systems.PETMachineSorting &&
            !systems.HDPEMachineSorting &&
            !systems.PPMachineSorting &&
            !systems.PSMachineSorting &&
            !systems.LDPEMachineSorting &&
            !systems.OTHERMachineSorting
          }
        >
          Mixed
        </Button>
        <Button
          onClick={() => {
            addRecyclable("PET");
          }}
          disabled={!systems.PETHandSorting}
        >
          PET
        </Button>
        <Button
          onClick={() => {
            addRecyclable("HDPE");
          }}
          disabled={!systems.HDPEHandSorting}
        >
          HDPE
        </Button>
        <Button
          onClick={() => {
            addRecyclable("PP");
          }}
          disabled={!systems.PPHandSorting}
        >
          PP
        </Button>
        <Button
          onClick={() => {
            addRecyclable("PS");
          }}
          disabled={!systems.PSHandSorting}
        >
          PS
        </Button>
        <Button
          onClick={() => {
            addRecyclable("LDPE");
          }}
          disabled={!systems.LDPEHandSorting}
        >
          LDPE
        </Button>
        <Button
          onClick={() => {
            addRecyclable("PVC");
          }}
          disabled={!systems.PVCHandSorting}
        >
          PVC
        </Button>
        <Button
          onClick={() => {
            addRecyclable("Other");
          }}
          disabled={!systems.OTHERHandSorting}
        >
          OTHER
        </Button>
      </NavBar>
    </div>
  );
};

export default UIButtons;
