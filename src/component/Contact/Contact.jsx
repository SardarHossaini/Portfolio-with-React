import React from "react";
import "./Contact.css";
export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "68d28ac4-861d-4559-b20a-53ee580c1933");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take a new projects, so Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Placeat ipsum cum
            architecto. Ab, quisquam exercitationem?
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <i className="fa fa-envelope"></i>{" "}
              <p>sardarhossini2022@gmail.com</p>
            </div>
            <div className="contact-detail">
              <i className="fa fa-phone"></i> <p>+93 (0)78-214-8885</p>
            </div>
            <div className="contact-detail">
              <i className="fa fa-location-dot"></i> <p>Kabul, AFG</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="8"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};
