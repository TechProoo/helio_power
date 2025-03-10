import { useEffect, useState } from "react";
import Elect from "../Image/elect.png";
import Plumber from "../Image/plumber.webp";
import Solar from "../Image/bg_image.webp";
import { FiArrowRight } from "react-icons/fi"; // Import FiArrowRight from react-icons
import Image_viewer from "./Image_viewer";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const Portfoli = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [viewState, setViewState] = useState({
    view: false,
    image: "",
  });

  useEffect(() => {
    ScrollReveal().reveal(".ch", {
      duration: 2400,
      distance: "20px",
      origin: "left",
      delay: 200,
    });
    ScrollReveal().reveal(".us", {
      duration: 2400,
      distance: "20px",
      origin: "right",
      delay: 500,
    });
    ScrollReveal().reveal(".ou", {
      duration: 2400,
      distance: "20px",
      origin: "left",
      delay: 800,
    });
  }, []);

  return (
    <div className="portfolio_section md:mt-10 pb-6 relative pt-5 mb-3">
      <Image_viewer setView={setViewState} enlarge={viewState} />

      <Link to={"/portfolio"} className="portfolio_view">View more</Link>

      <div className="divider mb-20"></div>

      <div className="portfolio_top w-11/12  m-auto">
        <div className="left_subhead">
          <h3 className="ft_hd badge bg-secondary-subtle p-3 font-black text-black">
            Recent Projects
          </h3>
        </div>
      </div>

      <div className="port_sec_width w-9/12  m-auto">
        <div className="d-md-flex justify-content-between mt-5 gap-1 align-items-center">
          <div className=" text-center">
            <div className="d-flex flex-column">
              <h1 className="text-6xl ch">Check.</h1>
              <h1 className="text-6xl mt-3 us" style={{ color: "#ffa500" }}>
                Us.
              </h1>
              <h1 className="text-6xl mt-3 ou">Out.</h1>
            </div>
          </div>
          <div className="">
            <div className="d-md-flex justify-content-center gap-5">
              <div
                className="portfoio_img_card port_one"
                style={{ width: isHovered ? "70px" : "300px" }}
              >
                <div className="portfolio_img">
                  <img className="" src={Elect} alt="" />
                </div>
                <h1 className="portfolio_vertical">ELECTRICALS.</h1>
                <div className="portfolio_card_body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="portfolio_card_head">
                      <h1
                        className=""
                        style={{ opacity: isHovered ? "0" : "1" }}
                      >
                        ELECTRICAL <br /> WORKS
                      </h1>
                    </div>
                    <div className="expand_icon_cover">
                      <FiArrowRight
                        onClick={() =>
                          setViewState(() => ({
                            image: Elect,
                            view: true,
                          }))
                        }
                        className="expand_icon"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="portfoio_img_card port_two"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="portfolio_img">
                  <img className="" src={Plumber} alt="" />
                </div>
                <h1 className="portfolio_vertical_two">PLUMBING.</h1>
                <div className="portfolio_card_body_two">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="portfolio_card_head">
                      <h1
                        className=""
                        style={{ opacity: isHovered ? "1" : "0" }}
                      >
                        PLUMBING <br /> WORKS
                      </h1>
                    </div>
                    <div className="expand_icon_cover">
                      <FiArrowRight
                        className="expand_icon"
                        onClick={() =>
                          setViewState(() => ({
                            image: Plumber,
                            view: true,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="portfoio_img_card port_three"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="portfolio_img">
                  <img className="" src={Solar} alt="" />
                </div>
                <h1 className="portfolio_vertical_three">SOLAR.</h1>
                <div className="portfolio_card_body_two">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="portfolio_card_head">
                      <h1
                        className=""
                        style={{ opacity: isHovered ? "1" : "0" }}
                      >
                        SOLAR <br /> WORKS
                      </h1>
                    </div>
                    <div className="expand_icon_cover">
                      <FiArrowRight
                        className="expand_icon"
                        onClick={() =>
                          setViewState(() => ({
                            image: Solar,
                            view: true,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoli;
