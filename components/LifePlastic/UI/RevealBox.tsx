import * as React from "react";
import { motion } from "framer-motion";
const RevealBox: React.FC = ({ children }) => {
  const [revealFirst, setRevealFirst] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      if (yPos > 1200) {
        setRevealFirst(true);
      }
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return (
    <motion.div
      animate={{ display: revealFirst ? "none" : "block" }}
      transition={{ duration: 2, ease: "easeOut", delayChildren: 10 }}
      initial={{ display: "block" }}
      style={{
        width: "100%",
        height: "4000px",
        background: "skyblue",
        position: "absolute",
        zIndex: 10,
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealBox;
