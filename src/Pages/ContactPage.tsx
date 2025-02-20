import { useState, useRef } from "react";
import Top from "../Components/Top";
import Background from "../Image/cts.jpg";
import Footer from "../Components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import Link_what from "../Components/Link_what";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [information, setInformation] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInformation((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zifda7e", "template_tc8ss5r", form.current!, {
        publicKey: "-P7VYpK6kt0FIqOzd",
      })
      .then(
        () => {
          setSent(true);
        },
        (error) => {
          console.log(error);
        }
      );

    setInformation({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  useGSAP(() => {
    const tlMain = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact_page_form",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    tlMain
      .from(".contact_page_intro h1", { y: 100, duration: 0.5, opacity: 0 })
      .from(
        ".contact_page_form_left h1",
        { opacity: 0, duration: 0.5, y: -100 },
        ">"
      )
      .from(
        ".contact_page_form_left p",
        { y: 100, duration: 0.5, opacity: 0 },
        ">"
      )
      .from(".card_five_body p", { opacity: 0, duration: 0.5, y: 100 }, ">")
      .from(
        ".contact_page_form_right h1",
        { opacity: 0, duration: 0.5, y: -100 },
        ">"
      )
      .from(
        ".contact_page_form_right input",
        { opacity: 0, duration: 0.5, y: 100 },
        ">"
      )
      .from(
        ".contact_page_form_right button",
        { opacity: 0, duration: 1, y: 100, ease: "bounce.out" },
        ">"
      );
  });

  return (
    <div className="contact_container">
      <Link_what />
      <div className="p-4">
        <Top
          color="#ffa500"
          bgColor="#752b057a"
          background={Background}
          head="Contact Us"
          bge="MULTIPURPOSE"
        />
      </div>
      <div className="contact_page_intro mx-4 p-3 text-center d-flex justify-content-center align-items-center">
        <div>
          <h1 className="mt-3 text-5xl ft_hd">Contact Us</h1>
          <p className="mt-3">
            Powering Homes, Energizing Businesses, and Keeping Water Flowing.
            Looking for reliable solar, electrical, or plumbing solutions? Get in
            touch with us today!
          </p>
        </div>
      </div>
      <div className="col-md-10 m-auto">
        <div className="contact_page_form">
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="contact_page_form_left">
              <h1 className="text-4xl">Get In Touch</h1>
              <p className="mt-4 w-7/12">
                We provide expert solar installations, electrical services, and
                plumbing solutions tailored to your needs. Contact us for
                inquiries, quotes, or service requests.
              </p>
              <div className="d-flex align-items-center gap-3 mt-4">
                <div className="contact_icon">
                  <FaMapMarkerAlt size={30} color="#c76f16" />
                </div>
                <div>
                  <h1 className="cct_txt_1">Address</h1>
                  <p className="cct_txt_2">University of Ibadan</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mt-3">
                <div className="contact_icon">
                  <FaPhoneAlt size={30} color="#c76f16" />
                </div>
                <div>
                  <h1>Phone Number</h1>
                  <p>+2349010191502</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mt-3">
                <div className="contact_icon">
                  <FaEnvelope size={30} color="#c76f16" />
                </div>
                <div>
                  <h1>E-Mail</h1>
                  <p>judeakanf@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contact_page_form_right">
              <form className="pb-5" ref={form} onSubmit={handleSubmit}>
                <h1 className="ft_hd">Send a Message</h1>
                <div className="mt-3">
                  <input
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={information.name}
                    required
                  />
                </div>
                <div className="mt-4">
                  <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={information.email}
                    required
                  />
                </div>
                <div className="mt-4">
                  <input
                    onChange={handleChange}
                    name="message"
                    placeholder="Message"
                    value={information.message}
                    required
                  />
                </div>
                <span className="pt-3 d-block">
                  By submitting, you agree to our privacy policy.
                </span>
                <button className="d-block float-end ft_hd" type="submit">
                  Submit
                </button>
                {sent && (
                  <div className="alert alert-success" role="alert">
                    Email sent successfully
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Uncomment and adjust the map section as needed */}
      {/* <div className="map_cov mt-5">
        <div className="col-md-10 m-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.856411458786!2d3.3672932607276005!3d6.460445849429501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cc9b07cf55%3A0xc4ae10b395418b9b!2sLagos%20Island!5e0!3m2!1sen!2sng!4v1739901246880!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ borderRadius: "30px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default ContactPage;
