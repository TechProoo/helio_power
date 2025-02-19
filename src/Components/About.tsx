import Image from "../Image/services.jpeg";
import Design from "../Image/dots.png"

const About = () => {
  return (
    <div className="about_container mt-5 pt-5 w-9/12 mx-auto">
      <div className="d-md-flex justify-content-between gap-5">
        <div>
          <div className="about_topic ">
            <b className="badge p-0 ">ABOUT US</b>
          </div>
          <div className="about_head mt-3">
            <h1>
              Your Trusted Service Provider for Plumbing, Electrical, Solar
              Solutions and More
            </h1>
          </div>
          <div className="about_text mt-3">
            With years of experience and a team of dedicated professionals, we
            are committed to delivering exceptional service that ensures
            customer satisfaction. Our mission is to simplify your life by
            offering reliable, efficient, and affordable services tailored to
            your unique requirements.
          </div>
          <div>
            <img src={Design} className="about_des" alt="" />
          </div>
        </div>
        <div>
          <div className="about_img">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
