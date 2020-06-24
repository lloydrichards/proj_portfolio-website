import * as React from "react";
import { motion } from "framer-motion";
import { SKYBACKGROUND, GROUNDBACKGROUND } from "../styles/PlasticStyles";
const RevealBox: React.FC = ({ children }) => {
  const [reveal, setReveal] = React.useState(false);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: [1, 0, 0], y: ["0%", "0%", "-500%"] },
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      if (yPos > 1200) {
        setReveal(true);
      }
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return (
    <motion.div
      animate={reveal ? "hidden" : "visible"}
      transition={{ duration: 3, ease: "easeOut", delayChildren: 10 }}
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
