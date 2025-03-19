import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    // <div classNameName="footer">
    //   <div classNameName="footer-top">
    //     <div classNameName="footer-top-left">
    //       <h2>SarDar</h2>
    //       <p>
    //         I'm a Full-Stack developer from Kabul, AFG with 1 years of
    //         experience in multiple companies like woosat and Bami.
    //       </p>
    //     </div>
    //     <div classNameName="footer-top-right">
    //       <div classNameName="footer-email-input">
    //         <i classNameName="fa fa-user-alt"></i>
    //         <input type="email" placeholder="Enter your email" />
    //       </div>
    //       <div classNameName="footer-subscribe">Subscribe</div>
    //     </div>
    //   </div>
    //   <hr />
    //   <div classNameName="footer-bottom">
    //     <p classNameName="footer-bottom-left">
    //       &copy; 2025 Sardar Hossaini. All rights reserved.
    //     </p>
    //     <div classNameName="footer-bottom-right">
    //       <p>Term of Services</p>
    //       <p>Privacy Policy</p>
    //       <p>Connect with me</p>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="container-fluid" id="footer">
        <div className="container">
          <div className="row" id="main-footer">
            <div className="col-md-4" id="part1-footer">
              <a href="#home">
                <h2>SarDar</h2>
              </a>
              <h6>Love your hungar and celebrate it with the whole family.</h6>
              <h6>Follow Us</h6>
              <a href="#">
                <span className="fab fa-facebook-square"></span>
              </a>
              <a href="#">
                <span className="fab fa-linkedin"></span>
              </a>
              <a href="#">
                <span className="fab fa-whatsapp"></span>
              </a>
              <a href="#">
                <span className="fab fa-twitter"></span>
              </a>
              <a href="#">
                <span className="fab fa-instagram"></span>
              </a>
            </div>
            <div className="col-md-8" id="part2-footer">
              <div className="row" id="sub-footer">
                <div className="col-md-4 col-sm-12" id="sub1">
                  <h4>Links</h4>
                  <ul>
                    <li>
                      <a href="pages/menu.html">Menu</a>
                    </li>
                    <li>
                      <a href="pages/about.html">About Us</a>
                    </li>
                    <li>
                      <a href="pages/contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="pages/booktable.html">Book Table</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-12" id="sub1">
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <a href="pages/contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-12" id="sub3">
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
                          <a href="mailto:hossaini224@gmail.com">
                            hossaini224@gmail.com
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
      <div className="container">
        <div id="end-footer">
          <p>&copy; copyright 2023 Hossaini Restaurant | All rights reserved</p>
          <p>
            Autor : <span>Sardar Hossaini</span>
          </p>
        </div>
      </div>
    </>
  );
};
