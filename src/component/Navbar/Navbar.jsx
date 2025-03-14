import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [menu, setMenu] = useState("contact");
  return (
    <div className="navbar">
      <h2>SarDar</h2>
      <ul className="nav-menu">
        <li>
          <p
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </p>
        </li>
        <li>
          <p
            onClick={() => setMenu("about")}
            className={menu === "about" ? "active" : ""}
          >
            About Me
          </p>
        </li>
        <li>
          <p
            onClick={() => setMenu("services")}
            className={menu === "services" ? "active" : ""}
          >
            Services
          </p>
        </li>
        <li>
          <p
            onClick={() => setMenu("work")}
            className={menu === "work" ? "active" : ""}
          >
            Portfolio
          </p>
        </li>
        <li>
          <p
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact
          </p>
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};
