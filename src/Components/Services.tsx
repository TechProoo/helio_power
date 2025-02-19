import CardTwo from "./CardTwo";
import Box from "../Image/square1.png";
import { useEffect, useRef } from "react";
import { services } from "../services";
import ScrollReveal from "scrollreveal";

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const autoScroll = () => {
      if (sectionRef.current) {
        const section = sectionRef.current;

        if (section.scrollHeight > section.clientHeight) {
          section.scrollTop += 1;

          if (
            section.scrollTop + section.clientHeight >=
            section.scrollHeight
          ) {
            section.scrollTop = 0;
          }
        }
      }
    };

    const intervalId = setInterval(autoScroll, 50);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".wpa", {
      duration: 2400,
      distance: "200px",
      origin: "top",
      delay: 400,
    });
    ScrollReveal().reveal(".left_bottom p", {
      duration: 2400,
      distance: "200px",
      origin: "bottom",
      delay: 400,
    });
  }, []);

  return (
    <div className="services_section md:mt-8 pb-6 relative pt-5">
      <div className="blender"></div>
      {/* <img
        src={Rain}
        className="absolute opacity-10 services_image_design"
        alt=""
      /> */}
      <div className="absolute left-1/2">
        <svg
          width="60"
          height="78"
          viewBox="0 0 60 78"
          fill="#FF6447"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_328_70"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="-1"
            y="0"
            width="61"
            height="78"
          >
            <path
              d="M23.084 77.299L59.9978 13.3201L36.9116 -3.66052e-06L-0.00219635 63.9789L23.084 77.299Z"
              fill="white"
            ></path>
          </mask>
          <g mask="url(#mask0_328_70)">
            <path
              d="M5.36377 65.1097C5.39998 66.064 5.66016 66.8449 6.42825 67.5556C6.79862 67.8971 7.11439 67.9903 7.51748 67.9322C7.94052 67.8706 8.36438 67.8088 8.77353 67.7079C14.0806 66.4173 19.0349 64.5048 23.7185 62.126C26.8088 60.555 29.8674 58.9351 32.5837 56.8852C37.4137 53.2433 40.2653 48.4212 41.2854 42.5072C41.5999 40.6903 41.506 38.8201 41.1967 36.9145C41.1106 36.3843 41.1553 35.81 41.3239 35.334C43.2316 29.8821 43.9507 24.1703 43.127 18.1147C42.9081 16.4937 42.593 14.871 42.4985 13.1858C42.7378 13.5952 42.9806 14.0065 43.215 14.4168C43.5325 14.9715 43.8202 15.5365 44.1684 16.0782C44.9888 17.3684 46.7375 17.8198 48.056 17.0395C45.8313 12.0185 43.128 7.11671 40.5355 2.06954C39.4348 1.51216 38.1968 1.53706 36.9774 1.58526C36.3594 1.6083 35.9053 1.93077 35.7507 2.51187C35.6594 2.85386 35.5472 3.19194 35.4473 3.53333C34.2055 7.75077 32.0335 11.4196 28.8995 14.5221C28.63 14.7888 28.3992 15.0929 28.0732 15.4743C28.49 15.6797 28.7643 15.8849 29.0521 15.9463C29.8412 16.1147 30.6423 16.2712 31.4333 16.3405C32.0441 16.3947 32.55 16.1986 32.9402 15.7616C33.9585 14.6295 35.0288 13.5431 36.0813 12.4383C36.2675 12.2437 36.4643 12.0553 36.7506 11.7751C38.333 18.0361 38.1062 23.9041 36.88 29.7261C36.0459 29.1947 35.3149 28.7341 34.5883 28.2648C32.9914 27.2307 31.3184 26.9044 29.7039 27.4137C28.2657 27.8656 26.8528 28.4098 25.5604 29.0892C23.0829 30.398 20.7696 31.9099 18.8668 33.8635C17.9933 34.7615 17.3013 35.768 16.7977 36.9138C15.9905 38.7528 16.3771 40.5401 17.9249 42.2506C19.7279 44.2394 21.764 45.9059 24.513 46.5592C27.104 47.1746 29.3846 46.7596 31.48 45.7767C32.5822 45.2587 33.6145 44.6302 34.6747 44.0491C34.9562 43.8977 35.232 43.7392 35.7107 43.4698C35.6537 43.8974 35.6617 44.1306 35.5858 44.3268C34.027 48.2372 31.5431 51.5019 28.0138 53.9853C23.7412 56.9884 19.1398 59.5612 14.2336 61.7421C11.5144 62.9496 8.72253 64.0269 5.80247 64.8786C5.66196 64.9215 5.54854 65.0146 5.36377 65.1097ZM35.1966 30.7068C36.0665 31.6886 36.1003 32.51 35.5766 33.3542C34.9117 34.4265 34.3715 35.5788 33.6923 36.6434C31.7401 39.7073 28.5956 41.4437 24.9417 42.558C23.5874 42.9694 22.1112 42.9502 20.4477 42.4239C20.5466 41.7724 20.5407 41.142 20.7496 40.6041C21.0566 39.8247 21.3991 39.015 21.9499 38.3956C22.954 37.2634 24.05 36.1881 25.2375 35.2194C27.382 33.463 29.8274 32.0662 32.5795 31.0981C33.3891 30.8141 34.233 30.5769 35.1966 30.7068Z"
              fill="#FF6447"
            ></path>
          </g>
        </svg>
      </div>
      <div className="md:flex justify-between items-center w-11/12 m-auto">
        <div className="services_left">
          <div className="left_subhead">
            <h3 className="ft_hd badge font-black text-black bg-secondary-subtle p-3">
              Services
            </h3>
          </div>
          <div className="left_head mt-4">
            <h1 className="text-5xl wpa">
              We Provide Awesome <br /> Services
            </h1>
          </div>
          <div className="left_bottom">
            <p className="md:w-10/12 left_text mt-6">
              We are dedicated to providing exceptional all-around service,
              leveraging our expertise, hard work, and meticulous attention to
              detail to handle every aspect of your needs, including solar
              installation, electrical work, plumbing, and more.
            </p>
          </div>
          <img
            className="w-20 absolute left-52 top-1\240 hh"
            src={Box}
            alt=""
          />
        </div>
        <div className="services_right">
          <div ref={sectionRef} className="carousel_container me-5 relative">
            <div className="absolute services_blur"></div>
            <div className="d-flex flex-column  gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`carousel_card ${
                    index % 2 === 0 ? "services_active" : "services_active_two"
                  }`}
                >
                  <CardTwo service={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
