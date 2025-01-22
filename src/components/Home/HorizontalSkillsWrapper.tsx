import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo, useRef } from "react";
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
import { useThemeStore } from "../../store/themeStore";
import HorizontalSkills from "./HorizontalSkills";

gsap.registerPlugin(ScrollTrigger);

const lightIcons1 = [
  l_icon1,
  l_icon2,
  l_icon3,
  l_icon6,
  l_icon9,
  l_icon10,
];
const lightIcons2 = [
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

const darkIcons1 = [
  d_icon1,
  d_icon2,
  d_icon3,
  d_icon6,
  d_icon9,
  d_icon10,
];
const darkIcons2 = [
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


function HorizontalSkillsWrapper() {
  const { darkMode } = useThemeStore();
  const containerRef1 = useRef<HTMLDivElement | null>(null);
  const containerRef2 = useRef<HTMLDivElement | null>(null);

  const icons1 = useMemo(
    () => (darkMode ? darkIcons1 : lightIcons1),
    [darkMode]
  );
  const icons2 = useMemo(
    () => (darkMode ? darkIcons2 : lightIcons2),
    [darkMode]
  );

  return (
    <div className="horizontal-skills-parent">
      <HorizontalSkills icons={icons1} ref={containerRef1} />
      <HorizontalSkills icons={icons2} reverse={true} ref={containerRef2} />
    </div>
  );
}

export default HorizontalSkillsWrapper;
