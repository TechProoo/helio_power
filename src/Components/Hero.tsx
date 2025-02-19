import React, { useRef } from "react";
import { AiOutlineRightCircle } from "react-icons/ai"; // Import AiOutlineRightCircle from react-icons
import Badge from "./Badge";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

type heroProp = {
  head: string;
  bge: string;
  color: string;
};

const Hero: React.FC<heroProp> = ({ head, bge, color }) => {
  const heroTextRef = useRef(null);
  useGSAP(() => {
    gsap.from(heroTextRef.current, {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="hero_section relative mt-2">
      <div className="hero_head">
        <Badge message={bge} color={color} />
      </div>
      <div className="hero_body mt-7">
        <h1 className="hero_text ft_hd" ref={heroTextRef}>{head}</h1>
      </div>
      <div className="hero_bottom mt-5">
        <Link to={"/portfolio"}
          style={{ color: `${color}` }}
          className="portfolio_btn flex items-center gap-2 px-2"
        >
          <span>
            Our<span>Portfolio</span>{" "}
          </span>
          <AiOutlineRightCircle className="right_portfolio" /> {/* Updated icon */}
        </Link>
      </div>
      <div className="hero_info absolute right-1 bottom-24">
        <p>
          Utility Technology <br />
          Harnessing{" "}
          <span className="ft_hd uppercase" style={{ color: `${color}` }}>
            the Power
          </span>{" "}
          of Electricity, Plumbing, and More
        </p>
      </div>
    </div>
  );
};

export default Hero;
