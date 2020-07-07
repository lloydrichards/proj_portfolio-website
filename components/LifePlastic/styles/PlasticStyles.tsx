import styled from "@emotion/styled";

export const BUILDINGCOLOR = "#cfd8dc";
export const ISLANDGRASSCOLOR = "#9BBD8B";
export const ISLANDGROUNDCOLOR = "#666666";

export const ISLANDOPACITY = "1";
export const BUILDINGOPACITY = "0.9";

export const PIPEOPACITY = "0.8";
export const PROCESSFILL = "#dce775";

export const FILLCOLOR = "white";
export const STROKECOLOR = "black";
export const STROKEWEIGHT = "0.4";
export const FILLOPACITY_HIDDEN = "0";
export const FILLOPACITY = "0.9";

export const NAVBARFILL = "#e1f5fe";
export const GROUNDBACKGROUND = "#616161";
export const SKYBACKGROUND = "#e1f5fe";

export const TEXTFILL = "#8e8e8e";
export const TEXTSTROKE = "none";
export const TEXTOPACITY = "0.8";

export const Diagram = styled.div({
  position: "absolute",
  width: "100%",
  height: "4028px",
  margin: "0px auto",
});

export const NavBar = styled.div({
  overflow: "hidden",
  width: "950px",
  padding: "0px 80px",
  display: "flex",
  justifyContent: "left",
  zIndex: 5,
  "&>h2": {
    width: "100px",
    textAlign: "center",
    padding: "10px 0px",
    letterSpacing: "3px",
    fontFamily: "Muli,sans-serif",
    fontWeight: 200,
    fontSize: "20px",
  },
});
export const TopNavBar = styled.div({
  overflow: "hidden",
  position: "fixed",
  top: 10,
  width: "950px",
  padding: "0px 80px",
  zIndex: 5,
  "&>div": {
    cursor: "pointer",
    display: "flex",
    float: "right",
    padding: "10px 10px",
  },
});

export const TutorialSplash = styled.div({});
type ModalProps = {
  top: number;
};

export const Toggle = styled.button({
  background: `${NAVBARFILL}`,
  cursor: "pointer",
  overflow: "visible",
  display: "block",
  color: "#cfd8dc",
  border: "none",
  outline: "none",
  borderRadius: "12px",
  boxShadow:
    "-4px 4px 12px rgba(20,20,20,0.08), 4px -4px 12px rgba(255,255,255,0.8)",
  textShadow: "0 0 16px #cfd8dc",
  textAlign: "center",
  transform: "rotate(-90deg)",
  padding: "14px 16px",
  margin: "16px -1px",
  textDecoration: "none",
  fontSize: "24px",
  height: "60px",
  width: "100px",

  "&:hover": {
    background: `${NAVBARFILL}`,
    color: `#616161`,
    textShadow: "0 0 8px #cfd8dc",
    boxShadow:
      " -2px 2px 4px rgba(20,20,20,0.1), 2px -2px 4px rgba(255,255,255,0.8)",
  },
  "&.selected": {
    color: "#616161",
    textShadow: "none",
    boxShadow:
      "inset -4px 4px 8px rgba(20,20,20,0.1), inset 4px -4px 8px rgba(255,255,255,0.8)",
  },
  "&.selected:hover": {
    color: "#616161",
    textShadow: "none",
    boxShadow:
      "inset -2px 2px 4px rgba(20,20,20,0.1), inset 2px -2px 4px rgba(255,255,255,0.8)",
  },
  "&:disabled": {
    cursor: "default",
    color: "#cfd8dc",
    textShadow: "none",
    boxShadow:
      "inset -4px 4px 8px rgba(20,20,20,0.1), inset 4px -4px 8px rgba(255,255,255,0.8)",
  },
  "@media only screen and (max-width: 600px)": {},
});

export const AddButton = styled.button({
  background: `${NAVBARFILL}`,
  cursor: "pointer",
  display: "block",
  color: "#616161",
  border: "none",
  outline: "none",
  borderRadius: "50%",
  boxShadow:
    "4px 4px 12px rgba(20,20,20,0.08), -4px -4px 12px rgba(255,255,255,0.8)",
  textShadow: "0 0 16px #cfd8dc",
  textAlign: "center",
  margin: "16px 17px",
  padding: "0",
  textDecoration: "none",
  fontSize: "24px",
  height: "64px",
  width: "64px",

  "&:hover": {
    background: `${NAVBARFILL}`,
    color: `#cfd8dc`,
    textShadow: "0 0 8px #cfd8dc",
    boxShadow:
      "inset 4px 4px 8px rgba(20,20,20,0.1), inset -4px -4px 8px rgba(255,255,255,0.8)",
  },

  "&:focus": {
    border: "none",
    outline: "none",
  },
  "&:active": {
    background: `${NAVBARFILL}`,
    color: `#616161`,
    textShadow: "0 0 8px #cfd8dc",
    boxShadow:
      "inset 4px 4px 8px rgba(20,20,20,0.1), inset -4px -4px 8px rgba(255,255,255,0.8)",
  },
  "&:disabled": {
    cursor: "default",
    color: "#cfd8dc",
    textShadow: "none",
    boxShadow:
      "inset 4px 4px 8px rgba(20,20,20,0.1), inset -4px -4px 8px rgba(255,255,255,0.8)",
  },
  "@media only screen and (max-width: 600px)": {},
});

export const Button = styled.button({
  background: `${NAVBARFILL}`,
  display: "block",
  color: "#616161",
  border: "none",
  outline: "none",
  borderRadius: "12px",
  boxShadow:
    "-4px 4px 12px rgba(20,20,20,0.08), 4px -4px 12px rgba(255,255,255,0.8)",
  textShadow: "0 0 16px #cfd8dc",
  textAlign: "center",
  transform: "rotate(-90deg)",
  padding: "14px 16px",
  margin: "16px 4px",
  textDecoration: "none",
  fontSize: "24px",
  height: "60px",
  width: "100px",

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
    background: `${NAVBARFILL}`,
    color: `#616161`,
    textShadow: "0 0 8px #cfd8dc",
    boxShadow:
      "inset -4px 4px 8px rgba(20,20,20,0.1), inset 4px -4px 8px rgba(255,255,255,0.8)",
  },
  "&:disabled": {
    color: "#cfd8dc",
    textShadow: "none",
    boxShadow:
      "inset -4px 4px 8px rgba(20,20,20,0.1), inset 4px -4px 8px rgba(255,255,255,0.8)",
  },
  "@media only screen and (max-width: 600px)": {},
});

export const TutorialTitleDIV = styled.div({
  width: "100%",
  height: "250px",
  margin: "4px 50px",
  "&>h1": {
    fontSize: "64px",
    lineHeight: "83%",
    letterSpacing: "3px",
    fontFamily: "Muli,sans-serif",
    fontWeight: 200,
    padding: "50px 0px 0px 0px",
    margin: "0",
    width: "400px",
  },
  "&>h3": {
    fontSize: "24px",
    fontFamily: "Pacifico",
    color: "#9BBD8B",
    textShadow:
      "4px 4px 2px rgba(20,20,20,0.1), -2px -2px 2px rgba(255,255,255,0.8)",
    padding: "0px 100px",
    margin: "0",
  },
});
export const TutorialDIV = styled.div({
  width: "100%",
  height: "250px",
  margin: "4px 50px",
  display: "flex",
  alignItems: "center",
  "&>p": {
    fontSize: "16px",
    textAlign: "justify",
    align: "left",
    lineHeight: "150%",
    fontFamily: "Josefin Slab,sans-serif",
    paddingLeft: "250px",
    width: "400px",
  },
  "&>div.example": {
    position: "absolute",
    top: "-200px",
    align: "right",
  },
  "@media only screen and (max-width: 600px)": {
    width: "1080px",
    display: "flex",
    alignContent: "center",
    "&>p": {
      fontSize: "18px",
      textAlign: "justify",
      align: "left",
      lineHeight: "150%",
      fontFamily: "Josefin Sans,sans-serif",
      width: "400px",
    },
    "&>div.example": {
      position: "relative",
      top: "0",
      align: "right",
    },
  },
});

export const GroundStyle = styled.div({
  width: "200vw",
  marginLeft: "-50vw",
  height: "2248px",
  top: "-2248px",
  background: GROUNDBACKGROUND,
  position: "relative",
  zIndex: -2,
  "@media only screen and (max-width: 600px)": {
    width: "400vw",
  },
});

export const SkyStyle = styled.div({
  width: "200%",
  marginLeft: "-50%",
  top: "0px",
  height: "4028px",
  position: "relative",
  zIndex: -3,
  background: `${SKYBACKGROUND}`,
  "@media only screen and (max-width: 600px)": {
    width: "400vw",
  },
});
export const RevealSkyStyle = styled.div({
  width: "200vw",
  marginLeft: "-50vw",
  top: "-0",
  height: "4028px",
  position: "relative",
  background: `${SKYBACKGROUND}`,
  zIndex: 4,
  "@media only screen and (max-width: 600px)": {
    width: "400vw",
  },
});
