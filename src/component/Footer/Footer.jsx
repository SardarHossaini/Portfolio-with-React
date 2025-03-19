import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid" id="footer">
        <div className="container">
          <div className="row" id="main-footer">
            <div className="col-md-5" id="part1-footer">
              <a href="#home">
                <h2>SarDar</h2>
              </a>
              <p>
                I'm a Full-Stack developer from Kabul, AFG with 1 years of
                experience in multiple companies like woosat and Bami.
              </p>
              <h6>Follow Me In</h6>
              <div className="social-media">
                <a href="https://www.facebook.com/profile.php?id=100022777820383">
                  <span className="fab fa-facebook-square"></span>
                </a>
                <a href="https://www.linkedin.com/in/sardar-hossaini/">
                  <span className="fab fa-linkedin"></span>
                </a>
                <a href="https://github.com/SardarHossaini">
                  <span className="fab fa-github"></span>
                </a>
                <a href="https://x.com/Sardar626285221">
                  <span className="fab fa-twitter"></span>
                </a>
                <a href="https://www.instagram.com/sardarhussaini2024/">
                  <span className="fab fa-instagram"></span>
                </a>
              </div>
            </div>
            <div className="col-md-7" id="part2-footer">
              <div className="row" id="sub-footer">
                <div className="col-md-6 col-sm-12" id="sub1">
                  <h4>Links</h4>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About Me</a>
                    </li>
                    <li>
                      <a href="#work">My Work</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-12" id="sub3">
                  <h4>Contact</h4>
                  <ul>
                    <li>
                      <p>
                        <span className="fa fa-phone-volume"></span>
                        <span>
                          <a href="tel:+93774027496">+93 (0) 782148885</a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-envelope"></span>
                        <span>
                          <a href="mailto:sardarhossaini2022@gmail.com">
                            sardarhossaini2022@gmail.com
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-location-dot"></span>
                        <span>Kabul, Afghanistan</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="copy">
        <div className="container">
          <div id="end-footer">
            <p>
              &copy; copyright 2023 Hossaini Restaurant | All rights reserved
            </p>
            <p>
              Autor : <span>Sardar Hossaini</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
