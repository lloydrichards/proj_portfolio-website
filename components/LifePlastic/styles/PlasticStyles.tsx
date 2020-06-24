import styled from "@emotion/styled";

export const BUILDINGCOLOR = "#cfd8dc";
export const ISLANDGRASSCOLOR = "#9BBD8B";
export const ISLANDGROUNDCOLOR = "#666666";

export const ISLANDOPACITY = "0.9";
export const BUILDINGOPACITY = "0.8";

export const PIPEOPACITY = "0.8";
export const PROCESSFILL = "tomato";

export const FILLCOLOR = "white";
export const STROKECOLOR = "black";
export const STROKEWEIGHT = "0.4";
export const FILLOPACITY_HIDDEN = "0";
export const FILLOPACITY = "0.9";

export const NAVBARFILL = "#e1f5fe";
export const GROUNDBACKGROUND = "#616161";
export const SKYBACKGROUND = "#e1f5fe";

export const TEXTFILL = "#373737";
export const TEXTSTROKE = "none";
export const TEXTOPACITY = "0.9";

export const Diagram = styled.div({
  position: "absolute",
  width: "100%",
  height: "4028px",
  margin: "0px auto",
});

export const NavBar = styled.div({
  overflow: "hidden",
  position: "absolute",
  bottom: -650,
  width: "1050",
  display: "flex",
  justifyContent: "center",
  zIndex: 5,
});

export const Button = styled.button({
  background: `${NAVBARFILL}`,
  display: "block",
  color: "#616161",
  border: "none",
  outline: "none",
  borderRadius: "30%",
  boxShadow:
    "-4px 4px 12px rgba(20,20,20,0.08), 4px -4px 12px rgba(255,255,255,0.8)",
  textShadow: "0 0 16px #cfd8dc",
  textAlign: "center",
  transform: "rotate(-90deg)",
  padding: "14px 16px",
  margin: "32px 4px 32px",
  textDecoration: "none",
  fontSize: "24px",
  height: "90px",
  width: "120px",

  "&:hover": {
    background: `${NAVBARFILL}`,
    color: `#cfd8dc`,
    textShadow: "0 0 8px #cfd8dc",
    boxShadow:
      "inset -4px 4px 8px rgba(20,20,20,0.1), inset 4px -4px 8px rgba(255,255,255,0.8)",
  },

  "&:focus": {
    border: "none",
    outline: "none",
  },
  "&:active": {
    border: "none",
    outline: "none",
    textShadow: "0 0 32px #9BBD8B",
  },
  "&:disabled": {
    color: "#cfd8dc",
    textShadow: "none",
    boxShadow:
    "inset -4px 4px 8px rgba(20,20,20,0.1), inset 4px -4px 8px rgba(255,255,255,0.8)",
  },
});
