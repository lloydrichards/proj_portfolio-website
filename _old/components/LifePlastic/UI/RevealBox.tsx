import * as React from "react";
import { motion } from "framer-motion";
import { SKYBACKGROUND, GROUNDBACKGROUND } from "../styles/PlasticStyles";

interface RevealProps {
  show?: boolean;
  onRemove?: () => void;
}
const RevealBox: React.FC<RevealProps> = ({ onRemove, show, children }) => {
  const [reveal, setReveal] = React.useState(false);

  const variants = {
    visible: { opacity: 1, y: "0%" },
    hidden: { opacity: [1, 0, 0], y: ["0%", "0%", "-500%"] },
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      if (yPos > 1500) {
        setReveal(true);
        if (onRemove) setTimeout(() => onRemove(), 3000);
      }
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  React.useEffect(() => {
    console.log("back to into");
    if (show) {
      setReveal(true);
      if (onRemove) setTimeout(() => onRemove(), 3000);
    }
  }, [show]);

  return (
    <motion.div
      animate={reveal ? "hidden" : "visible"}
      transition={{ duration: 3, ease: "easeOut" }}
      initial="visible"
      variants={variants}
      style={{
        width: "150vw",
        height: "4000px",
        background: SKYBACKGROUND,
        position: "absolute",
        zIndex: 4,
      }}
    >
      {children}
      <motion.div
        style={{
          width: "100%",
          height: "4000px",
          top: "1780px",
          background: GROUNDBACKGROUND,
          position: "absolute",
          zIndex: 4,
        }}
      />
    </motion.div>
  );
};

export default RevealBox;
