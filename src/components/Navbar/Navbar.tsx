import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import { scrollToComponent } from "../../utils/scrollToComponent";
import MenuIcon from "./MenuIcon";

function Navbar() {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const links = [
    {
      name: "Skills.",
      href: "#skills",
      top: 40,
    },
    {
      name: "Work.",
      href: "#work",
    },
    {
      name: "LinkedIn.",
      href: "https://linkedin.com/in/abhipandey1402",
    },
    {
      name: "Github.",
      href: "https://github.com/abhipandey1402",
    },
  ];
  const expandedWidth = useMemo(
    () => (isMobile ? "300px" : "700px"),
    [isMobile]
  );

  return (
    <motion.div
      className="navbar"
      onMouseEnter={!isMobile ? () => setIsHovered(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsHovered(false) : undefined}
      onClick={() => setIsHovered(!isHovered)}
      animate={{
        width: isHovered ? expandedWidth : "auto",
      }}
      transition={{
        type: "spring",
        stiffness: isMobile ? 200 : 100,
        damping: 15,
      }}
    >
      <MenuIcon isHovered={isHovered} setIsHovered={setIsHovered} />
      {!isMobile ? (
        <h1 className="heading">Abhi Pandey.</h1>
      ) : isMobile && !isHovered ? (
        <h1 className="heading">Abhi Pandey.</h1>
      ) : null}
      <motion.div
        className={`links`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          display: isHovered ? "flex" : "none",
        }}
        transition={{ delay: isHovered ? 0.3 : 0, duration: 0.3 }}
      >
        {links.map((link, i) => (
          <p
            onClick={() => {
              if (link.href.includes("#")) {
                scrollToComponent(link.href.split("#")[1], link.top);
              } else {
                window.open(link.href, "_blank");
              }
            }}
            key={`link-${i}`}
            className={!isHovered ? "hidden" : ""}
          >
            {link.name}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
