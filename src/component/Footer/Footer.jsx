import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>SarDar</h2>
          <p>
            I'm a Full-Stack developer from Kabul, AFG with 1 years of
            experience in multiple companies like woosat and Bami.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <i className="fa fa-user-alt"></i>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2025 Sardar Hossaini. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};
