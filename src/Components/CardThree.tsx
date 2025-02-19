import React from "react";
import { FiChevronRight } from "react-icons/fi"; // Import FiChevronRight from react-icons
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type CardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const CardThree: React.FC<CardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="card_three px-3 py-4 ">
      <div className="card_head">
        <div>
          <Icon className="services_page_icon" size="30" />
        </div>
        <div className="mt-3 card_three_header">
          <h1 className="ft_hd fs-4 headcard_three">{title}</h1>
        </div>
        <div className="mt-3">
          <p className="hgf_gsap">{description}</p>
        </div>
        <div className="mt-3 card_three_button headcard_four">
          <button className="d-flex align-items-center">
            Learn More <FiChevronRight className="ln_more" />{" "}
            {/* Updated icon here */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
