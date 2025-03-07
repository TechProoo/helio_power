import React from "react";
import Top from "../Components/Top";
import Background from "../Image/services_bg.webp";
import Robo from "../Image/service_robot.png";
import CardThree from "../Components/CardThree";
import { FaSun, FaBolt, FaWater, FaWrench, FaAngleRight } from "react-icons/fa"; // Imported react-icons
import CardFour from "../Components/CardFour";
import Card_five from "../Components/Card_five";
import Person from "../Image/copy_1.jpg";
import CardSix from "../Components/CardSix";
import Footer from "../Components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link_what from "../Components/Link_what"
import Vid from "../Image/VID-20250218-WA0004.mp4";
gsap.registerPlugin(ScrollTrigger);

type ServicesPageProps = {};

const ServicesPage: React.FC<ServicesPageProps> = () => {
  useGSAP(() => {
    // Get elements
    const elements: HTMLElement[] =
      gsap.utils.toArray<HTMLElement>(".hgf_gsap");
    const elementTwo: HTMLElement[] =
      gsap.utils.toArray<HTMLElement>(".headcard_three");
    const elementThree: HTMLElement[] =
      gsap.utils.toArray<HTMLElement>(".headcard_four");
    const elementFour: HTMLElement[] =
      gsap.utils.toArray<HTMLElement>(".six_h1");

    if (elements.length) {
      gsap.from(elements, {
        scrollTrigger: {
          trigger: elements[0] as HTMLElement,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        stagger: 0.1,
        duration: 1,
      });
    }

    if (elementTwo.length) {
      gsap.from(elementTwo, {
        scrollTrigger: {
          trigger: elementTwo[0] as HTMLElement,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: -20,
        stagger: 0.1,
        duration: 1,
      });
    }

    if (elementThree.length) {
      gsap.from(elementThree, {
        scrollTrigger: {
          trigger: elementThree[0] as HTMLElement,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 40,
        y: -20,
        stagger: 0.1,
        duration: 1,
      });
    }

    var tlMain = gsap.timeline({
      scrollTrigger: {
        trigger: ".card_four_body",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    tlMain
      .from(".expert_two", { opacity: 0, duration: 0.5, y: -100 }, ">")
      .from(".card_four_body", { y: -100, duration: 0.5 }, ">")
      .from(".card_four_head", { x: -50, duration: 0.5, opacity: 0 }, ">")
      .from(".card_five_body h1", { x: 50, duration: 0.5, opacity: 0 }, ">")
      .from(".card_five_body p", { opacity: 0, duration: 0.5, y: 100 }, ">");

    elementFour.forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 40,
        duration: 1,
      });
    });

    gsap.from(".ct_h1", {
      scrollTrigger: {
        trigger: ".ct_h1",
        start: "top 80%",
      },
      y: -40,
      duration: 1,
      ease: "bounce.out",
    });

    gsap.from(".btn_gsap", {
      scrollTrigger: {
        trigger: ".ct_h1",
        start: "top 80%",
      },
      y: -40,
      duration: 1,
      ease: "bounce.out",
    });
  }, []);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".page_inner",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      })
      .from(".person_img", { y: -100, duration: 0.5 })
      // .from(".p", { y: 50, duration: 0.5, opacity: 0 }, 0.5)
      .from(".pg_in_h1", { opacity: 0, y: 50, duration: 1 })
      .from(".pg_inner_btn", { opacity: 0, y: 50, duration: 1 }, "-=0.5");

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="p-4">
      <Link_what />
      <div className="services_page">
        <div className="services_page_hero">
          <Top
            color="#ffa500"
            bgColor="#752b057a"
            background={Background}
            head="Our Services"
            bge="MULTIPURPOSE"
          />
          <div className="servics_page_section_one mt-5">
            <div className="text-center">
              <small>
                <b className="ft_hd">OUR SERVICES</b>
              </small>
              <h1 className="services_pg_head mt-3">
                We Provide Professional Solar, Electrical, <br /> and Plumbing
                Solutions
              </h1>
            </div>
            <div className="row justify-content-evenly mt-5 pt-5 gap-3">
              <div className="col-md-12 mt-4">
                <div className="row g-4">
                  <div className="col-md-4 my-auto">
                    <div className="robo_img m-auto">
                      <img
                        src={Robo}
                        className="img-fluid"
                        alt="Service Robot"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div>
                      <div className="row g-4">
                        <div className="col-6">
                          <div className="services_page_card">
                            <CardThree
                              icon={FaSun}
                              title="Solar Panel Installation"
                              description="Harness the power of the sun with our expert solar solutions."
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="services_page_card tdd">
                            <CardThree
                              icon={FaBolt}
                              title="Electrical Repairs & Installations"
                              description="Safe and efficient wiring, lighting, and power solutions."
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="services_page_card">
                            <CardThree
                              icon={FaWater}
                              title="Plumbing Services"
                              description="From pipe repairs to full installations, we ensure water flows smoothly."
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="services_page_card">
                            <CardThree
                              icon={FaWrench}
                              title="Maintenance & Inspection"
                              description="Regular check-ups to keep your systems running perfectly."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page_section_two p-4 mt-4 pt-5">
              <div className="d-md-flex ">
                <div className="d-md-flex g-2  px-4 py-5 mt-5 gap-5 justify-content-between">
                  <div className="expert_one">
                    <b className="ft_hd">TRUSTED EXPERTS</b>
                    <div className="mt-3">
                      <CardFour />
                    </div>
                  </div>
                  <div className="expert_two">
                    <div className="exp22">
                      <video
                        autoPlay
                        muted
                        loop
                        id="myVideo"
                        className="vid_pp"
                      >
                        <source src={Vid} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                    </div>
                  </div>
                  <div className="expert_three">
                    <Card_five />
                  </div>
                </div>
              </div>
              <div className="divider my-20"></div>
              <div className="page_inner mt-5">
                <div className="row g-5">
                  <div className="col-md-4">
                    <img className="person_img" src={Person} alt="" />
                  </div>
                  <div className="col-md-8">
                    <div className="py-4">
                      <div className="page_inner_head">
                        <b className="ft_hd">Why Choose Us?</b>
                      </div>
                      <div className="page_inner_body">
                        <h1 className="text-4xl my-4 lh-base fw-bold pg_in_h1">
                          We Offer High-Quality and Reliable Services for Homes
                          and Businesses, Ensuring Excellence in Every Project.
                        </h1>
                        <button className="pg_inner_btn mb-4 mt-2">
                          Get In Touch
                        </button>
                        <div className="card_six_holder">
                          <div className="row g-4">
                            <div className="col-6">
                              <CardSix
                                text_one="Renewable Energy Solutions"
                                text_two="Sustainable and cost-effective solar systems."
                              />
                            </div>
                            <div className="col-6">
                              <CardSix
                                text_one="Expert Electrical Work"
                                text_two="From minor fixes to complete installations."
                              />
                            </div>
                            <div className="col-6">
                              <CardSix
                                text_one="Plumbing You Can Rely On "
                                text_two="Quick, clean, and professional service."
                              />
                            </div>
                            <div className="col-6">
                              <CardSix
                                text_one="24/7 Support & Emergency Services"
                                text_two="We’re here when you need us."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider my-20"></div>
              <div className="services_contact">
                <div className="services_img_bg mb-2">
                  <div className="services_bg_color"></div>
                  <div className="services_bg_inner ">
                    <div className="p-auto m-auto">
                      <h1 className="ct_h1">
                        Ready to Upgrade Your Home or Business?
                      </h1>
                      <button className="btn_gsap d-flex align-items-center justify-content-center">
                        Get Started Today <FaAngleRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
