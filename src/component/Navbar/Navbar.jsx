import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <h2>SarDar</h2>
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              onClick={() => setMenu("about")}
              className={menu === "about" ? "active" : ""}
            >
              About Me
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p
              onClick={() => setMenu("services")}
              className={menu === "services" ? "active" : ""}
            >
              Services
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p
              onClick={() => setMenu("work")}
              className={menu === "work" ? "active" : ""}
            >
              Portfolio
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              onClick={() => setMenu("contact")}
              className={menu === "contact" ? "active" : ""}
            >
              Contact
            </p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink href="#contact" className="anchor-link">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};
