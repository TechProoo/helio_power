import React, { ChangeEvent, useEffect } from "react";
import Top from "../Components/Top";
import Background from "../Image/ptf.webp";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Image1 from "../Image/copy_1.jpg";
import Image2 from "../Image/IMG-20250218-WA0033.jpg";
import Image3 from "../Image/IMG-20250218-WA0035.jpg";
import Image4 from "../Image/services.jpeg";
import Image5 from "../Image/IMG-20250218-WA0034.jpg";
import Image6 from "../Image/IMG-20250218-WA0036.jpg";
import Image7 from "../Image/IMG-20250218-WA0037.jpg";
import Image8 from "../Image/IMG-20250218-WA0038.jpg";
import Image9 from "../Image/IMG-20250218-WA0039.jpg";
import Image10 from "../Image/IMG-20250218-WA0040.jpg";
import Image11 from "../Image/IMG-20250218-WA0041.jpg";
import Image12 from "../Image/IMG-20250218-WA0043.jpg";
import Image13 from "../Image/IMG-20250218-WA0044.jpg";
import Image15 from "../Image/IMG-20250218-WA0045.jpg";
import Image16 from "../Image/IMG-20250218-WA0046.jpg";
import Image17 from "../Image/IMG-20250218-WA0049.jpg";
// import Image18 from "../Image/IMG-20250218-WA0048.jpg";
import Img from "../Image/1.jpg";
import Img1 from "../Image/2.jpg";
import Img2 from "../Image/3.jpg";
import Img3 from "../Image/4.jpg";
import Img4 from "../Image/5.jpg";
import Typed from "typed.js";
import Solar from "../Image/solarLink.jpg";
import Footer from "../Components/Footer";
import ScrollReveal from "scrollreveal";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link_what from "../Components/Link_what";
gsap.registerPlugin(ScrollTrigger);

const Portfolio_Page: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".image_fit", { bottom: 100, stagger: 0.1, duration: 0.8 });
    },
    { scope: container }
  );

  useGSAP(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".img_second"); // Ensure TypeScript knows the elements are HTMLElements

    if (elements.length > 0) {
      gsap.from(elements, {
        scrollTrigger: {
          trigger: elements[0] as HTMLElement, // Explicitly cast to HTMLElement
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        stagger: 0.1,
        duration: 1,
      });
    }
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".portfolio_one", {
      duration: 2400,
      distance: "200px",
      origin: "left",
      delay: 100,
    });
    ScrollReveal().reveal(".portfolio_two", {
      duration: 3000,
      distance: "80px",
      origin: "bottom",
      delay: 500,
    });
    ScrollReveal().reveal(".clk", {
      duration: 3000,
      distance: "100px",
      origin: "top",
      delay: 600,
    });
    ScrollReveal().reveal(".img_des", {
      duration: 3000,
      distance: "100px",
      origin: "left",
      delay: 200,
    });
    ScrollReveal().reveal(".con", {
      duration: 3000,
      distance: "80px",
      origin: "bottom",
      delay: 500,
    });
  }, []);

  const [value, setValue] = React.useState<string>("1");

  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "Reliable",
        "Professional",
        "Dedicated",
        "Trusted",
        "Efficient",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleChange = (_event: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    gsap.from(".image_fit", {
      y: 100,
      duration: 0.8,
    });
  };

  useEffect(() => {
    gsap.to(".image_fit", {
      duration: 0.5,
      scale: 1,
      y: 40,
      ease: "power1.inOut",
      stagger: {
        grid: [7, 15],
        from: "center",
        amount: 1.5,
      },
    });
  }, [value]);

  return (
    <div className="">
      <Link_what />
      <div className="portfolio_page">
        <div className="p-4">
          <Top
            color="#ffa500"
            bgColor="#752b057a"
            background={Background}
            head="Our Portfolio"
            bge="MULTIPURPOSE"
          />
        </div>
        <div className="portfolio_middle text-center mt-5">
          <b className="ft_hd portfolio_one">NOT CONVINCED</b>
          <p className="mt-3 portfolio_two">
            See How We're Powering Change with Our Recent Projects
          </p>
          <div className="tab_cover">
            <Box
              sx={{
                width: "100%",
                typography: "body1",
                display: "flex",
                flexDirection: "column",
                minHeight: "800px",
              }}
            >
              <TabContext value={value}>
                <Box sx={{ flexGrow: 1, p: 2 }}>
                  <TabPanel value="1">
                    <div className="row" ref={container}>
                      <div className="col-md-4">
                        <div className="col-12">
                          <div
                            className="image_fit"
                            style={{ height: "385px" }}
                          ></div>
                        </div>
                        <div className="col-12">
                          <div
                            className="image_fit mt-4"
                            style={{
                              backgroundImage: `url(${Image1})`,
                              height: "180px",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="row g-4">
                          <div className="col-12">
                            <div
                              className="image_fit"
                              style={{
                                backgroundImage: `url(${Image1})`,
                                height: "180px",
                              }}
                            ></div>
                          </div>
                          <div className="col-6">
                            <div className="col-12">
                              <div
                                className="image_fit"
                                style={{
                                  backgroundImage: `url(${Image4})`,
                                  height: "180px",
                                }}
                              ></div>
                            </div>
                            <div className="col-12 mt-4 ">
                              <div
                                className="image_fit"
                                style={{
                                  backgroundImage: `url(${Image3})`,
                                  height: "180px",
                                }}
                              ></div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div
                              className="image_fit"
                              style={{
                                backgroundImage: `url(${Image2})`,
                                height: "100%",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="2">
                    <div className="row g-4">
                      <div className="col-md-8">
                        <div className="row g-4">
                          <div className="col-12">
                            <div
                              className="image_fit"
                              style={{
                                height: "180px",
                                backgroundImage: `url(${Image5})`,
                              }}
                            ></div>
                          </div>
                          <div className="col-6">
                            <div
                              className="image_fit"
                              style={{
                                height: "380px",
                                backgroundImage: `url(${Image6})`,
                              }}
                            ></div>
                          </div>
                          <div className="col-6">
                            <div
                              className="image_fit"
                              style={{
                                height: "380px",
                                backgroundImage: `url(${Image7})`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row g-4">
                          <div className="col-12">
                            <div
                              className="image_fit"
                              style={{
                                height: "180px",
                                backgroundImage: `url(${Image8})`,
                              }}
                            ></div>
                          </div>
                          <div className="col-12">
                            <div
                              className="image_fit"
                              style={{
                                height: "180px",
                                backgroundImage: `url(${Image9})`,
                              }}
                            ></div>
                          </div>
                          <div className="col-12">
                            <div
                              className="image_fit"
                              style={{
                                height: "180px",
                                backgroundImage: `url(${Image10})`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="3">
                    <div className="row g-4">
                      <div className="col-md-8">
                        <div className="row g-4">
                          <div className="col-6">
                            <div className="row g-4">
                              <div className="col-12">
                                <div
                                  className="image_fit"
                                  style={{
                                    height: "180px",
                                    backgroundImage: `url(${Image11})`,
                                  }}
                                ></div>
                              </div>
                              <div className="col-12">
                                <div
                                  className="image_fit"
                                  style={{
                                    height: "220px",
                                    backgroundImage: `url(${Image12})`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div
                              className="image_fit"
                              style={{
                                height: "100%",
                                backgroundImage: `url(${Image13})`,
                              }}
                            ></div>
                          </div>
                          <div className="col-12">
                            <div
                              className="image_fit"
                              style={{
                                height: "180px",
                                backgroundImage: `url(${Image15})`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row g-4">
                          <div className="col-12">
                            <div
                              className="image_fit"
                              style={{
                                height: "200px",
                                backgroundImage: `url(${Image16})`,
                              }}
                            ></div>
                          </div>
                          <div className="col-12">
                            <div
                              className="image_fit"
                              style={{
                                height: "403px",
                                backgroundImage: `url(${Image17})`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Box>

                <Box
                  sx={{
                    borderTop: 1,
                    borderColor: "divider",
                    color: "white",
                    padding: "20px",
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Solar Installations" value="1" />
                    <Tab label="Electricals" value="2" />
                    <Tab label="Pluming Works" value="3" />
                  </TabList>
                </Box>
              </TabContext>
            </Box>
          </div>

          <div className="portfolio_design mt-5 p-4">
            <div className="row g-2 m-0">
              <div className="col-md-8">
                <div className="row position-sticky" style={{ top: "0" }}>
                  <div className="text_port md:mt-60 md:mx-40">
                    <h1 className="text-start text-wrap">
                      WE ARE VERY{" "}
                      <span className="ft_hd auto-type">RELIABLE</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-md-4 overflow-hidden">
                <div className="row g-2">
                  <div className="col-3">
                    <div
                      className="image_fit img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img})`,
                      }}
                    ></div>
                    <div
                      className="image_fit mt-2 img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img1})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-7">
                    <div
                      className="image_fit img_second"
                      style={{
                        borderRadius: "0",
                        height: "100%",
                        backgroundImage: `url(${Img2})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-2">
                    <div
                      className="image_fit img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img3})`,
                      }}
                    ></div>
                    <div
                      className="image_fit mt-2 img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img4})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-3">
                    <div
                      className="image_fit img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img})`,
                      }}
                    ></div>
                    <div
                      className="image_fit mt-2 img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img1})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-7">
                    <div
                      className="image_fit img_second"
                      style={{
                        borderRadius: "0",
                        height: "100%",
                        backgroundImage: `url(${Img2})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-2">
                    <div
                      className="image_fit img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img3})`,
                      }}
                    ></div>
                    <div
                      className="image_fit mt-2 img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img4})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-3">
                    <div
                      className="image_fit img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img1})`,
                      }}
                    ></div>
                    <div
                      className="image_fit mt-2 img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img2})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-7">
                    <div
                      className="image_fit img_second"
                      style={{
                        borderRadius: "0",
                        height: "100%",
                        backgroundImage: `url(${Img3})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-2">
                    <div
                      className="image_fit img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img4})`,
                      }}
                    ></div>
                    <div
                      className="image_fit mt-2 img_second"
                      style={{
                        borderRadius: "0",
                        height: "220px",
                        backgroundImage: `url(${Img1})`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio_link mt-40">
            <div className="d-md-flex justify-content-center flex-column">
              <h1 className="link_sub ft_hd">Let's work together</h1>
              <h1 className="link_text mt-2">We are just a link away😌</h1>
              <div className="d-flex justify-content-between gap-md-5 mt-3 m-auto">
                <div className="img_des">
                  <img src={Solar} className="img_link" alt="" />
                </div>
                <div className="whatsapp my-auto">
                  <h1 className="clk">Or click here to get started</h1>
                  <div className="ft_hd mt-3">
                    <a
                      href=" https://wa.me/qr/JH2RUECQAL4QL1 "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ft-hd mt-3 con"
                    >
                      CONNECT...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio_Page;
