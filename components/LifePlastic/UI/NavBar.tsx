import React from "react";
import { Button, NavBar } from "../styles/PlasticStyles";
import { SystemList } from "../Interfaces/Interfaces";

interface NavProps {
  systems: SystemList;
  addRecyclable: (route: string) => void;
}
const randomRecycling = (addItem: (pickedItem: string) => void) => (
  possibleRoutes: Array<string>
) => {
  const randomNumber = Math.floor(Math.random() * possibleRoutes.length);
  addItem(possibleRoutes[randomNumber]);
};

const UIButtons: React.FC<NavProps> = ({ systems, addRecyclable }) => {
  return (
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
  );
};

export default UIButtons;
