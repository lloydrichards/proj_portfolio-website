import React from "react";
import { Button, NavBar } from "../styles/PlasticStyles";

interface NavProps {
  addRecyclable: (route: string) => void;
}
const randomRecycling = (addItem: (pickedItem: string) => void) => (
  possibleRoutes: Array<string>
) => {
  const randomNumber = Math.floor(Math.random() * possibleRoutes.length);
  addItem(possibleRoutes[randomNumber]);
};

const UIButtons: React.FC<NavProps> = ({ addRecyclable }) => {
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
      >
        PET
      </Button>
      <Button
        onClick={() => {
          addRecyclable("HDPE");
        }}
      >
        HDPE
      </Button>
      <Button
        onClick={() => {
          addRecyclable("PP");
        }}
      >
        PP
      </Button>
      <Button
        onClick={() => {
          addRecyclable("PS");
        }}
      >
        PS
      </Button>
      <Button
        onClick={() => {
          addRecyclable("LDPE");
        }}
      >
        LDPE
      </Button>
      <Button
        onClick={() => {
          addRecyclable("PVC");
        }}
      >
        PVC
      </Button>
      <Button
        onClick={() => {
          addRecyclable("Other");
        }}
      >
        OTHER
      </Button>
    </NavBar>
  );
};

export default UIButtons;
