import React from "react";

const Contact: React.FC = () => {
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
        <form action="">
          <div className="row gap-md-5">
            <div className="col">
              <input
                type="text"
                className="form-control contact_input"
                placeholder="Name"
                aria-label="Name"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control contact_input"
                placeholder="Email (optional)"
                aria-label="Email"
              />
            </div>
          </div>
          <div className="row gap-md-5 mt-5">
            <div className="col">
              <input
                type="number"
                className="form-control contact_input"
                placeholder="Phone number"  
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control contact_input"
                placeholder="Job Name"
                aria-label="Job Name"
                required
              />
            </div>
          </div>
          <div className="col-12 mt-5">
            <input
              type="text"
              placeholder="Message..."
              className="form-control contact_input"
            />
          </div>
          <div className="mt-5 text-center">
            <button className=" contact_submit " type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
