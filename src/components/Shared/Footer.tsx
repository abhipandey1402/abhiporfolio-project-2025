import { useCallback } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { useThemeStore } from "../../store/themeStore";

function Footer() {
  const { darkMode } = useThemeStore();
  const mouseEnterAndExit = useCallback(
    (enter: boolean) => {
      const customMouse = document.querySelector(
        ".custom-mouse"
      ) as HTMLElement;
      if (customMouse) {
        if (enter) {
          customMouse.style.backgroundColor = darkMode
            ? "var(--black)"
            : "var(--white)";
        } else {
          customMouse.style.backgroundColor = darkMode
            ? "var(--black)"
            : "var(--black)";
        }
      }
    },
    [darkMode]
  );

  const socialLinks = [
    {
      icon: <FaGithub className="icon" />,
      url: "https://github.com/abhipandey1402",
    },
    {
      icon: <FaLinkedinIn className="icon" />,
      url: "https://linkedin.com/in/abhipandey1402",
    },
    {
      icon: <FaInstagram className="icon" />,
      url: "https://www.instagram.com/abhipandey1402/",
    },
    {
      icon: <MdOutlineContactPage className="icon" />,
      url: "https://drive.google.com/file/d/1MhzK8AIi09XoOKgtWJ6Ren1CDkQoVGlB/view?usp=sharing",
    },
  ];

  return (
    <div className="footer-wrapper">
      <div
        className="footer"
        onMouseEnter={() => mouseEnterAndExit(true)}
        onMouseLeave={() => mouseEnterAndExit(false)}
      >
        <div className="left-heading">Abhi Pandey.</div>
        <div className="right-icons">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              onClick={() => window.open(link.url, "_blank")}
              style={{ cursor: "pointer" }}
            >
              {link.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
