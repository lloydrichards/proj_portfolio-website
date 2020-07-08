import React from "react";
import { NavBar, AddButton, Toggle, TopNavBar } from "../styles/PlasticStyles";
import { SystemList, Logs } from "../Interfaces/Interfaces";
import RecycleSymbol from "./RecycleSymbol";
import InfoIcon from "./icons/info";
import RefreshIcon from "./icons/refresh";
import ShareIcon from "./icons/share";

interface NavProps {
  systems: SystemList;
  logs: Array<Logs>;
  addRecyclable: (route: string) => void;
  resetState: () => void;
  modeChange: () => void;
  saveSystem: () => void;
  setSystem: (systems: SystemList) => void;
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
  setSystem,
  resetState,
  modeChange,
}) => {
  return (
    <div style={{ position: "relative", top: 1500 }}>
      <TopNavBar>
        <ShareIcon onClick={() => console.log("Share Clicked!")} />
        <InfoIcon onClick={modeChange} />
        <RefreshIcon onClick={resetState} />
      </TopNavBar>
      <NavBar>
        <Toggle
          className={systems.MixedBin ? "selected" : ""}
          onClick={() => {
            if (systems.MixedBin) {
              return setSystem({
                ...systems,
                MixedBin: false,
                PETMachineSorting: false,
                HDPEMachineSorting: false,
                PPMachineSorting: false,
                PSMachineSorting: false,
                LDPEMachineSorting: false,
                OTHERMachineSorting: false,
              });
            }
            return setSystem({
              ...systems,
              MixedBin: true,
              PETMachineSorting: true,
              HDPEMachineSorting: true,
              PPMachineSorting: true,
              PSMachineSorting: true,
              LDPEMachineSorting: true,
              OTHERMachineSorting: true,
            });
          }}
        >
          Mixed
        </Toggle>
        <Toggle
          className={systems.PETBin ? "selected" : ""}
          onClick={() => {
            if (systems.PETBin) {
              return setSystem({
                ...systems,
                PETBin: false,
                PETHandSorting: false,
                PETMixedGrinder: false,
                PETSeperateGrinder: false,
                rPETMixedRefiner: false,
                rPETSeperateRefiner: false,
              });
            }
            return setSystem({
              ...systems,
              PETBin: true,
              PETHandSorting: true,
              PETMixedGrinder: true,
              PETSeperateGrinder: true,
              rPETMixedRefiner: true,
              rPETSeperateRefiner: true,
            });
          }}
        >
          PET
        </Toggle>
        <Toggle
          className={systems.HDPEBin ? "selected" : ""}
          onClick={() => {
            if (systems.HDPEBin) {
              return setSystem({
                ...systems,
                HDPEBin: false,
                HDPEHandSorting: false,
                HDPESeperateGrinder: false,
                HDPEMixedGrinder: false,
                rHDPEMixedRefiner: false,
                rHDPESeperateRefiner: false,
              });
            }
            return setSystem({
              ...systems,
              HDPEBin: true,
              HDPEHandSorting: true,
              HDPESeperateGrinder: true,
              HDPEMixedGrinder: true,
              rHDPEMixedRefiner: true,
              rHDPESeperateRefiner: true,
            });
          }}
        >
          HDPE
        </Toggle>
        <Toggle
          className={systems.PPBin ? "selected" : ""}
          onClick={() => {
            if (systems.PPBin) {
              return setSystem({
                ...systems,
                PPBin: false,
                PPHandSorting: false,
                PPGrinder: false,
                rPPRefiner: false,
              });
            }
            return setSystem({
              ...systems,
              PPBin: true,
              PPHandSorting: true,
              PPGrinder: true,
              rPPRefiner: true,
            });
          }}
        >
          PP
        </Toggle>
        <Toggle
          className={systems.PSBin ? "selected" : ""}
          onClick={() => {
            if (systems.PSBin) {
              return setSystem({
                ...systems,
                PSBin: false,
                PSHandSorting: false,
                PSMachineSorting: false,
                EPSSmelter: false,
                PSGrinder: false,
                rPSRefiner: false,
              });
            }
            return setSystem({
              ...systems,
              PSBin: true,
              PSMachineSorting: true,
              EPSSmelter: true,
              PSHandSorting: true,
              PSGrinder: true,
              rPSRefiner: true,
            });
          }}
        >
          PS
        </Toggle>
        <Toggle
          className={systems.LDPEBin ? "selected" : ""}
          onClick={() => {
            if (systems.LDPEBin) {
              return setSystem({
                ...systems,
                LDPEBin: false,
                LDPEHandSorting: false,
                LDPEMachineSorting: false,
                rLDPERefiner: false,
              });
            }
            return setSystem({
              ...systems,
              LDPEBin: true,
              LDPEHandSorting: true,
              LDPEMachineSorting: true,
              rLDPERefiner: true,
            });
          }}
        >
          LDPE
        </Toggle>
        <Toggle
          className={systems.PVCBin ? "selected" : ""}
          onClick={() => {
            if (systems.PVCBin) {
              return setSystem({
                ...systems,
                PVCBin: false,
                PVCHandSorting: false,
                PVCGrinder: false,
                rPVCRefiner: false,
              });
            }
            return setSystem({
              ...systems,
              PVCBin: true,
              PVCHandSorting: true,
              PVCGrinder: true,
              rPVCRefiner: true,
            });
          }}
        >
          PVC
        </Toggle>
        <Toggle
          className={systems.OTHERBin ? "selected" : ""}
          onClick={() => {
            if (systems.OTHERBin) {
              return setSystem({
                ...systems,
                OTHERBin: false,
                OTHERHandSorting: false,
                OTHERMachineSorting: false,
                OtherRefiner: false,
              });
            }
            return setSystem({
              ...systems,
              OTHERBin: true,
              OTHERHandSorting: true,
              OTHERMachineSorting: true,
              OtherRefiner: true,
            });
          }}
        >
          Other
        </Toggle>
        <h2>Add/ Remove System</h2>
      </NavBar>
      <NavBar>
        <AddButton
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
          <RecycleSymbol
            number={0}
            colour={
              !systems.PETMachineSorting &&
              !systems.HDPEMachineSorting &&
              !systems.PPMachineSorting &&
              !systems.PSMachineSorting &&
              !systems.LDPEMachineSorting &&
              !systems.OTHERMachineSorting
                ? "#cfd8dc"
                : "#78909c"
            }
          />
        </AddButton>
        <AddButton
          onClick={() => {
            addRecyclable("PET");
          }}
          disabled={!systems.PETHandSorting}
        >
          <RecycleSymbol
            number={1}
            colour={!systems.PETHandSorting ? "#cfd8dc" : "#d50000"}
          />
        </AddButton>
        <AddButton
          onClick={() => {
            addRecyclable("HDPE");
          }}
          disabled={!systems.HDPEHandSorting}
        >
          <RecycleSymbol
            number={2}
            colour={!systems.HDPEHandSorting ? "#cfd8dc" : "#aa00ff"}
          />
        </AddButton>
        <AddButton
          onClick={() => {
            addRecyclable("PP");
          }}
          disabled={!systems.PPHandSorting}
        >
          <RecycleSymbol
            number={5}
            colour={!systems.PPHandSorting ? "#cfd8dc" : "#304ffe"}
          />
        </AddButton>
        <AddButton
          onClick={() => {
            addRecyclable("PS");
          }}
          disabled={!systems.PSHandSorting}
        >
          <RecycleSymbol
            number={6}
            colour={!systems.PSHandSorting ? "#cfd8dc" : "#00b8d4"}
          />
        </AddButton>
        <AddButton
          onClick={() => {
            addRecyclable("LDPE");
          }}
          disabled={!systems.LDPEHandSorting}
        >
          <RecycleSymbol
            number={4}
            colour={!systems.LDPEHandSorting ? "#cfd8dc" : "#00c853"}
          />
        </AddButton>
        <AddButton
          onClick={() => {
            addRecyclable("PVC");
          }}
          disabled={!systems.PVCHandSorting}
        >
          <RecycleSymbol
            number={3}
            colour={!systems.PVCHandSorting ? "#cfd8dc" : "#ffd600"}
          />
        </AddButton>
        <AddButton
          onClick={() => {
            addRecyclable("Other");
          }}
          disabled={!systems.OTHERHandSorting}
        >
          <RecycleSymbol
            number={7}
            colour={!systems.OTHERHandSorting ? "#cfd8dc" : "#ff6d00"}
          />
        </AddButton>

        <h2>Add Plastic</h2>
      </NavBar>
    </div>
  );
};

export default UIButtons;
