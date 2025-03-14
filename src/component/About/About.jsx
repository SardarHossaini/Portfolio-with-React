import React from "react";
import "./About.css";
import profile from "../../assets/sardar2.jpg";

export const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a full-stack developer from Kabul, Afghanistan, with over one
              year of experience in building and managing web applications. My
              expertise spans both front-end and back-end development, allowing
              me to create seamless and efficient digital solutions. I am
              proficient in technologies like HTML, CSS, JavaScript, and
              React.js for front-end development, as well as Laravel for
              back-end development. With a strong passion for coding and
              problem-solving, I strive to deliver high-quality and scalable web
              solutions that meet client needs and industry standards.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>TailwantCSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>GSAP</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>PORJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};
