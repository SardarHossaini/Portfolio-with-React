import React from "react";
import "./Hero.css";
import hero from "../../assets/sardar.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
export const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={hero} alt="" className="hero-img" />
      <h1>
        <span>I'm Sardar Hossaini,</span> Full-Stack Developer based in AFG
      </h1>
      <p>
        I'm a Full-Stack developer from Kabul, AFG with 1 years of experience in
        multiple companies like woosat and Bami.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink href="#contact" className="anchor-link">
            Connect With Me
          </AnchorLink>
        </div>
        <div
          className="hero-resume"
          onClick={() => {
            window.open("./CV.pdf");
          }}
        >
          My resume
        </div>
      </div>
    </div>
  );
};
