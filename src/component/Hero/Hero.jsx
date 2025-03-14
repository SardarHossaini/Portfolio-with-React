import React from "react";
import "./Hero.css";
import hero from "../../assets/sardar.jpg";
export const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="" className="hero-img" />
      <h1>
        <span>I'm Sardar Hossaini,</span> Full-Stack Developer based in AFG
      </h1>
      <p>
        I'm a Full-Stack developer from Kabul, AFG with 1 years of experience in
        multiple companies like woosat and Bami.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};
