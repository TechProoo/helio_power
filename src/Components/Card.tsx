import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaSolarPanel } from "react-icons/fa"; // Import the icon from react-icons

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const cardHeaderRef = useRef(null); 
  const cardpara = useRef(null); 

  useGSAP(() => {
    gsap.from(cardHeaderRef.current, {
      scrollTrigger: {
        trigger: cardHeaderRef.current,
        start: "top 80%", 
        toggleActions: "play none none reverse", 
      },
      y: -50,
      duration: 1,
      opacity: 0,
    });
    gsap.from(cardpara.current, {
      scrollTrigger: {
        trigger: cardpara.current,
        start: "top 80%", 
        toggleActions: "play none none reverse",
      },
      y: -50,
      duration: 1,
      opacity: 0,
    });
  }, []);

  return (
    <div className="card p-3">
      <div className="card_inner">
        <div className="card_icon_cover w-14 h-14 p-1.5">
          <FaSolarPanel // Use the React icon here
            style={{ width: "40px", height: "40px", color: "#FFA500" }} // Customize the icon's size and color
          />
        </div>
        <div className="card_header mt-5">
          <h1 ref={cardHeaderRef} className="text-xl font-bold text-white ft_hd">
            Efficient Solar Panels
          </h1>
        </div>
        <div className="card_body mt-3">
          <p ref={cardpara} className="gg">
            Our solar panels deliver maximum efficiency ensuring you get the most
            out of every ray of sunshine
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
