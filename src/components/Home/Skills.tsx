import { motion, Transition, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useMemo, useRef } from "react";
import d_icon1 from "../../assets/skills/dark/icon1.webp";
import d_icon10 from "../../assets/skills/dark/icon10.webp";
import d_icon13 from "../../assets/skills/dark/icon13.webp";
import d_icon2 from "../../assets/skills/dark/icon2.webp";
import d_icon3 from "../../assets/skills/dark/icon3.webp";
import d_icon6 from "../../assets/skills/dark/icon6.webp";
import d_icon9 from "../../assets/skills/dark/icon9.webp";

import d_icon14 from "../../assets/skills/dark/icon14.webp";
import d_icon15 from "../../assets/skills/dark/icon15.webp";
import d_icon16 from "../../assets/skills/dark/icon16.webp";
import d_icon17 from "../../assets/skills/dark/icon17.webp";
import d_icon18 from "../../assets/skills/dark/icon18.webp";
import d_icon19 from "../../assets/skills/dark/icon19.webp";
import d_icon20 from "../../assets/skills/dark/icon20.webp";
import d_icon21 from "../../assets/skills/dark/icon21.webp";
import d_icon22 from "../../assets/skills/dark/icon22.webp";

import l_icon1 from "../../assets/skills/light/icon1.webp";
import l_icon10 from "../../assets/skills/light/icon10.webp";
import l_icon13 from "../../assets/skills/light/icon13.webp";
import l_icon2 from "../../assets/skills/light/icon2.webp";
import l_icon3 from "../../assets/skills/light/icon3.webp";
import l_icon6 from "../../assets/skills/light/icon6.webp";
import l_icon9 from "../../assets/skills/light/icon9.webp";

import l_icon14 from "../../assets/skills/light/icon14.webp";
import l_icon15 from "../../assets/skills/light/icon15.webp";
import l_icon16 from "../../assets/skills/light/icon16.webp";
import l_icon17 from "../../assets/skills/light/icon17.webp";
import l_icon18 from "../../assets/skills/light/icon18.webp";
import l_icon19 from "../../assets/skills/light/icon19.webp";
import l_icon20 from "../../assets/skills/light/icon20.webp";
import l_icon21 from "../../assets/skills/light/icon21.webp";
import l_icon22 from "../../assets/skills/light/icon22.webp";
import useIsMobile from "../../hooks/useIsMobile";
import { useThemeStore } from "../../store/themeStore";

const lightIcons = [
  l_icon1,
  l_icon2,
  l_icon3,
  l_icon6,
  l_icon9,
  l_icon10,
  l_icon13,
  l_icon14,
  l_icon15,
  l_icon16,
  l_icon17,
  l_icon18,
  l_icon19,
  l_icon20,
  l_icon21,
  l_icon22,
];

const darkIcons = [
  d_icon1,
  d_icon2,
  d_icon3,
  d_icon6,
  d_icon9,
  d_icon10,
  d_icon13,
  d_icon14,
  d_icon15,
  d_icon16,
  d_icon17,
  d_icon18,
  d_icon19,
  d_icon20,
  d_icon21,
  d_icon22,
];


const initialPosition = {
  x: 0,
  y: 0,
};

const deskstopFinalPositions = [
  { x: -500, y: 0 },
  { x: 575, y: 150 },
  { x: 550, y: -100 },
  { x: 120, y: -200 },
  { x: -300, y: 50 },
  { x: 400, y: 50 },
  { x: -250, y: 200 },
  { x: 300, y: 225 },
  { x: -450, y: -150 },
  { x: 300, y: -300 },
  { x: -500, y: 300 },
  { x: 450, y: 250 },
  { x: -350, y: -200 },
  { x: 500, y: -250 },
  { x: -450, y: 150 },
  { x: 300, y: -100 },
];

const mobileFinalPositions = [
  { x: -100, y: 100 },
  { x: 120, y: 120 },
  { x: 100, y: -150 },
  { x: 10, y: -200 },
  { x: -150, y: 250 },
  { x: 150, y: 280 },
  { x: 50, y: 200 },
  { x: -50, y: 180 },
  { x: 60, y: -180 },
  { x: -100, y: 300 },
  { x: 200, y: -150 },
  { x: -200, y: 300 },
  { x: 150, y: -50 },
  { x: -150, y: 100 },
  { x: 50, y: 250 },
  { x: -50, y: -250 },
];



const randomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const Skills: React.FC = () => {
  const isMobile = useIsMobile();
  const { darkMode } = useThemeStore();
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  const finalPositions = useMemo(
    () => (isMobile ? mobileFinalPositions : deskstopFinalPositions),
    [isMobile]
  );

  const bubbleVariants: Transition = {
    initial: { scale: 0 },
    animate: (i: number) => ({
      scale: [0, 1.5, 1],
      x: [initialPosition.x, finalPositions[i].x],
      y: [initialPosition.y, finalPositions[i].y],
      transition: {
        delay: i * 0.075,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
    oscillate: (i: number) => ({
      y: [
        finalPositions[i].y,
        finalPositions[i].y + randomInRange(-10, 10),
        finalPositions[i].y + randomInRange(-10, 10),
        finalPositions[i].y,
      ],
      x: [
        finalPositions[i].x,
        finalPositions[i].x + randomInRange(-10, 10),
        finalPositions[i].x + randomInRange(-10, 10),
        finalPositions[i].x,
      ],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    }),
  };

  useEffect(() => {
    if (inView) {
      controls
        .start((i) => bubbleVariants.animate(i))
        .then(() => {
          controls.start((i) => bubbleVariants.oscillate(i));
        });
    }
  }, [controls, inView]);

  const icons = useMemo(() => {
    return darkMode ? darkIcons : lightIcons;
  }, [darkMode]);

  return (
    <div className="skills-container" ref={ref} id="skills">
      <p className="main-text" data-color-inverted={"true"}>
        Always Building, <br />
        Always Growing.
      </p>
      {icons.map((icon, i) => (
        <motion.img
          src={icon}
          className="bubble"
          custom={i}
          initial="initial"
          animate={controls}
          variants={bubbleVariants as any}
          key={`icon-${i}`}
        />
      ))}
    </div>
  );
};

export default Skills;
