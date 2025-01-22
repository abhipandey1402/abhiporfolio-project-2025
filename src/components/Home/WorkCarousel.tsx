import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/work-carousel/img1.webp";
import img2 from "../../assets/work-carousel/img2.webp";
import img3 from "../../assets/work-carousel/img3.webp";
import img4 from "../../assets/work-carousel/img4.webp";
import img5 from "../../assets/work-carousel/img5.webp";
import { useThemeStore } from "../../store/themeStore";

gsap.registerPlugin(ScrollTrigger);

const images = [img1, img5, img2, img3, img4];

const WorkCarousel = () => {
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

  return (
    <div
      className="work-carousel"
      onMouseEnter={() => mouseEnterAndExit(true)}
      onMouseLeave={() => mouseEnterAndExit(false)}
    >
      <div className="carousel-container">
        <h1 className="heading">
          Currently Working At
          <span className="blue">
            <a href="https://acciojob.com" target="_blank" rel="noreferrer">
              {" "}
              RegorTalent
            </a>
          </span>{" "}
        </h1>
        <p className="desc">
        RegorTalent is an AI-powered recruitment platform to optimize talent acquisition and streamline hiring processes.</p>
        <div className="images-container">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {images?.map((image, index) => (
              <SwiperSlide key={`${image}-${index}`}>
                <img
                  alt="work-carousel"
                  src={image}
                  className="carousel-image  swiper-lazy"
                />
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WorkCarousel;
