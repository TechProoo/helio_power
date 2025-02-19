import Top from "./Top";
import bg from "../Image/bg_image.webp";
import bg2 from "../Image/ff.jpg";
import bg3 from "../Image/plumber.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Upper = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Top
              color={"#ffa500"}
              bgColor={"#752b054d"}
              background={bg}
              head="EMBRACING THE FUTURE WITH CUTTING-EDGE SOLAR ENERGY SOLUTIONS"
              bge="Solar Energy"
            />
          </div>
          <div className="carousel-item">
            <Top
              color={"#155d95"}
              bgColor={"#155d9582"}
              background={bg2}
              head="POWERING TOMORROW WITH INNOVATIVE ELECTRICAL SOLUTIONS"
              bge="Electrical Flow"
            />
          </div>
          <div className="carousel-item">
            <Top
              color={"#00ff37"}
              bgColor={"#8eb4864b"}
              background={bg3}
              head="BUILDING A STRONGER FUTURE WITH RELIABLE PLUMBING SOLUTIONS"
              bge="Pipe Works"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upper;
