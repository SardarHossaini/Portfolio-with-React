import React from "react";
import "./About.css";
import profile from "../../assets/sardar2.jpg";

export const About = () => {
  return (
    <div id="about" className="about">
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
              year of experience in developing web applications. I have hands-on
              experience with front-end technologies like HTML, CSS, JavaScript,
              and Vue.js, as well as back-end frameworks such as Laravel. I am
              passionate about building efficient, scalable, and user-friendly
              websites and applications, and I enjoy solving complex problems to
              deliver high-quality solutions.
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
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Laravel</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "75%" }} />
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
