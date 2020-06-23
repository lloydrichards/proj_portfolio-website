import styled from "@emotion/styled";

export const BUILDINGCOLOR = "#cfd8dc";
export const ISLANDGRASSCOLOR = "#9BBD8B";
export const ISLANDGROUNDCOLOR = "#666666";

export const PIPEOPACITY = "0.8";
export const PROCESSFILL = "tomato";

export const FILLCOLOR = "white";
export const STROKECOLOR = "black";
export const STROKEWEIGHT = "0.4";
export const FILLOPACITY_HIDDEN = "0";
export const FILLOPACITY = "0.9";

export const NAVBARFILL = "#373737";
export const GROUNDBACKGROUND = "#616161";
export const SKYBACKGROUND = "#e1f5fe";

export const Diagram = styled.div({
  position: "absolute",
  width: "100%",
  height: "4028px",
  margin: "0px auto",
});

export const NavBar = styled.div({
  backgroundColor: `${NAVBARFILL}`,
  boxShadow: "0px -2px 4px #1c313a",
  overflow: "hidden",
  position: "fixed",
  bottom: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const Button = styled.button({
  background: `${NAVBARFILL}`,
  display: "block",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "30%",
  boxShadow:
    "2px 2px 6px rgba(20,20,20,0.6), -2px -2px 6px rgba(255,225,225,0.4)",
  textShadow: "0 0 16px #9effff",
  textAlign: "center",
  padding: "14px 16px",
  margin: "32px 8px 32px 8px",
  textDecoration: "none",
  fontSize: "24px",
  height: "80px",
  width: "120px",

  "&:hover": {
    background: `${NAVBARFILL}`,
    color: `${NAVBARFILL}`,
    textShadow: "0 0 8px #9effff",
    boxShadow:
      "inset 2px 2px 4px rgba(20,20,20,0.6), inset -2px -2px 4px rgba(255,225,225,0.4)",
  },

  "&:focus": {
    border: "none",
    outline: "none",
  },
  "&:active": {
    border: "none",
    outline: "none",
    textShadow: "0 0 32px #9effff",
  },
});
