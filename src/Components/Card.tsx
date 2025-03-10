import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaSolarPanel } from "react-icons/fa"; // Import the icon from react-icons

gsap.registerPlugin(ScrollTrigger);

type cardProp = {
  topic: string;
  body: string;
};

const Card: React.FC<cardProp> = ({ topic, body }) => {
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
    <div className="card ">
      <div className="card_inner m-2">
        <div className="card_icon_cover d-flex align-items-center justify-content-center w-14 h-14 p-1.5">
          <FaSolarPanel
            style={{ width: "30px", height: "30px", color: "#FFA500" }} // Customize the icon's size and color
          />
        </div>
        <div className="card_header mt-1">
          <h1
            ref={cardHeaderRef}
            className="text-lg font-bold text-white ft_hd"
            style={{width: "100%", textWrap: "wrap"}}
          >
            {topic}
          </h1>
        </div>
        <div className="card_body mt-3">
          <p ref={cardpara} className="gg">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
