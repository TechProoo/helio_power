import Card from "./Card";
import Brand from "../Image/solar_full.jpg";
import doit from "../Image/wedoit.jpeg";
import Down from "../Image/down.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const Info = () => {
  useGSAP(() => {
    gsap.from(".info_paragraph", {
      scrollTrigger: ".info_paragraph",
      x: -50,
      duration: 1,
      opacity: 0,
    });
  });

  useEffect(() => {
    ScrollReveal().reveal(".ask_services", {
      duration: 2000,
      distance: "200px",
      origin: "bottom",
      delay: 400,
    });
  }, []);

  return (
    <div className="info_cover mt-5 relative">
      <div className="md:flex justify-between pt-2">
        <div>
          <p className="info_paragraph">
            We are dedicated to providing exceptional all-around service,
            leveraging our expertise, hard work, and meticulous attention to
            detail to handle every aspect of your needs, including solar
            installation, electrical work, plumbing, and more.
          </p>
          <div className="info_brand_image hidden md:block m-auto absolute left-20">
            <img src={Brand} className="" alt="" />
          </div>
        </div>
        <div className="card_holder relative d-md-flex justify-content-center gap-4">
          <div className="absolute inset-0 w-10 left-0 rounded-full display-md-none"></div>
          <Card
            topic="Efficient Solar Panels"
            body="Our solar panels deliver maximum efficiency ensuring you get the most
            out of every ray of sunshine"
          />
          <Card
            topic="Reliable Energy Storage"
            body="Our batteries store solar energy efficiently, ensuring uninterrupted power anytime."
          />
          <Card
            topic="Smart Inverter Tech"
            body="Optimize energy use with intelligent inverters that efficiently convert and regulate solar power."
          />
        </div>
      </div>
      <div className="services_intro text-center mt-20">
        <h1 className="md:text-6xl text-4xl font-bold ask_services">
          WHAT SERVICES DO YOU NEED?
        </h1>
        <div className="services_intro_image mx-auto mt-3">
          <img src={doit} alt="" />
        </div>
        <img src={Down} className="services_direction mx-auto" alt="" />
      </div>
    </div>
  );
};

export default Info;
