import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    number: "",
    job: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
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

    setInfo({
      name: "",
      email: "",
      number: "",
      job: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  return (
    <div className="contact_container mt-5 pt-3">
      <div className="contact_head mx-5">
        <h1>CONTACT US</h1>
      </div>
      <h1 className="text-center contact_subtopic m-auto w-9/12 mt-5">
        Ready to bring your ideas to life? Let’s collaborate and create
        something amazing together! Get in touch, and let’s get started.
      </h1>
      <p className="contact_small_subtopic mt-5 text-center">
        Kindly take a moment to fill out the form below, <br />
        and we'll be in touch with you shortly!
      </p>
      <div className="contact_form mt-5 w-8/12 mx-auto ">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="row gap-md-5">
            <div className="col">
              <input
                type="text"
                className="form-control contact_input"
                placeholder="Name"
                name="name"
                value={info.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control contact_input"
                placeholder="Email (optional)"
                name="email"
                value={info.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row gap-md-5 mt-5">
            <div className="col">
              <input
                type="tel"
                className="form-control contact_input"
                placeholder="Phone number"
                name="number"
                value={info.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control contact_input"
                placeholder="Job Name"
                name="job"
                value={info.job}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-12 mt-5">
            <textarea
              placeholder="Message..."
              className="form-control contact_input"
              name="message"
              value={info.message}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5 text-center">
            <button className="contact_submit" type="submit">
              Submit
            </button>
          </div>
          {sent && (
            <div className="alert alert-success" role="alert">
              Email sent successfully
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
