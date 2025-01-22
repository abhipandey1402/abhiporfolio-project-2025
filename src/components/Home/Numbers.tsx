import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";
import d_jira from "../../assets/numbers/dark/jira.webp";
import d_safari from "../../assets/numbers/dark/safari.webp";
import d_tech from "../../assets/numbers/dark/tech.webp";
import d_leetcode from "../../assets/numbers/dark/leetcode.webp";
import d_aws from "../../assets/numbers/dark/aws.webp";
import l_jira from "../../assets/numbers/light/jira.webp";
import l_safari from "../../assets/numbers/light/safari.webp";
import l_tech from "../../assets/numbers/light/tech.webp";
import l_leetcode from "../../assets/numbers/light/leetcode.webp";
import l_aws from "../../assets/numbers/light/aws.webp";
import { useThemeStore } from "../../store/themeStore";
import NumberStatsCard from "./NumberStatsCard";

gsap.registerPlugin(ScrollTrigger);

const NumbersAndStats = () => {
  const [index, setIndex] = useState(0);
  const { darkMode } = useThemeStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const dataArray = useMemo(() => {
    if (!darkMode) {
      return [
        {
          imgUrl: l_safari,
          text: `<span class="orange"> 5+ </span>Freelance Clients`,
        },
        {
          imgUrl: l_jira,
          text: `<span class="orange"> 200+ </span>Tickets & Features`,
        },
        {
          imgUrl: l_tech,
          text: `<span class="orange"> 20+ </span>Technologies/Frameworks Mastered`,
        },
        {
          imgUrl: l_aws,
          text: `<span class="orange"> 10+ </span>Deployed Applications`,
        },
        {
          imgUrl: l_leetcode,
          text: `<span class="orange"> 500+ </span>DSA Challenges Mastered, On to the Next`,
        },
      ];
    }
    return [
      {
        imgUrl: d_safari,
        text: `<span class="orange"> 5+ </span>Freelance Clients`,
      },
      {
        imgUrl: d_jira,
        text: `<span class="orange"> 200+ </span>Tickets & Features`,
      },
      {
        imgUrl: d_tech,
        text: `<span class="orange"> 20+ </span>Technologies/Frameworks Mastered`,
      },
      {
        imgUrl: d_aws,
        text: `<span class="orange"> 10+ </span>Deployed Applications`,
      },
      {
        imgUrl: d_leetcode,
        text: `<span class="orange"> 500+ </span>DSA Challenges Mastered, On to the Next`,
      },
    ];
  }, [darkMode]);

  // Detect if the user is on a mobile device
  // const isMobile = window.innerWidth <= 768;

  // Use setInterval on mobile devices
  useEffect(() => {
    // if (isMobile) {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % dataArray.length);
    }, 1500);

    return () => clearInterval(interval);
    // }
  }, [dataArray]);

  return (
    <motion.div ref={containerRef} className="numbers-and-stats">
      <div className="center-text">
        <p className="text-p">Some Of My Interesting Stats</p>
      </div>
      <motion.div className="card-container">
        <AnimatePresence initial={false}>
          <NumberStatsCard
            key={index}
            frontCard={true}
            exitX={250}
            imgSrc={dataArray[index]?.imgUrl}
          />
          <NumberStatsCard key={index + 1} frontCard={false} exitX={-250} />
        </AnimatePresence>
      </motion.div>
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="card-text"
        dangerouslySetInnerHTML={{ __html: dataArray[index]?.text }}
      />
    </motion.div>
  );
};

export default NumbersAndStats;
