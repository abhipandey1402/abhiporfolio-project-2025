import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight, FiLink } from "react-icons/fi";
import ScrambleAnimation from "react-scrambled-text/dist/src/ScrambleAnimation";
import useIsMobile from "../../hooks/useIsMobile";
import { scrollToComponent } from "../../utils/scrollToComponent";
import CommonButton from "../Shared/CommonButton";

const bottomTexts = [
  `Abhi Pandey is a <span class="black"> Software Development Engineer </span> at <span class="black"> RegorTalent </span>, where he has been instrumental in building the platform from the ground up, delivering impactful solutions for enterprise clients.`,
  `With a strong foundation in the <span class="black"> MERN Stack </span> and extensive experience in full-stack development, Abhi excels at creating robust, scalable, and innovative software systems.`,
  `Beyond coding, Abhi has a keen interest in <span class="black"> Algorithm Design, System Architecture, and Product Development, </span> continually striving to push the boundaries of technology and user experience.`,
];


function Hero() {
  const isMobile = useIsMobile();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % bottomTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [bottomTexts.length]);

  return (
    <div className="hero-section">
      <div className="heading-section">
        <motion.div
          className="heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          data-color-inverted={"true"}
        >
          <ScrambleAnimation
            style={{
              fontSize: isMobile ? "32px" : "56px",
              color: "var(--primary-orange)",
            }}
            texts={["Fullstack", "Frontend", "Software", "Web"]}
            speed={100}
            pauseDuration={1000}
            start={true}
          />
          <h1 className="heading">Developer.</h1>
        </motion.div>
        <motion.p
          className="desc"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Abhi Pandey is a Software Development Engineer at RegorTalent, 
          passionate about Product Management and Entrepreneurship. 
          He specializes in crafting user-centric, scalable solutions and 
          delivering exceptional tech products that address real-world challenges.
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.25 }}
        >
          <CommonButton
            text="Connect"
            Icon={<FiLink className="icon-link" />}
            iconPosition="right"
            onClick={() => window.open("https://linkedin.com/in/abhipandey1402")}
          />
          <CommonButton
            text="See Work"
            variant="outline"
            Icon={<FiArrowRight className="icon-arrow" />}
            iconPosition="right"
            onClick={() => scrollToComponent("work")}
          />
        </motion.div>
        <motion.p
          key={currentTextIndex}
          className="bottom-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          dangerouslySetInnerHTML={{ __html: bottomTexts[currentTextIndex] }}
        />
      </div>
    </div>
  );
}

export default Hero;
