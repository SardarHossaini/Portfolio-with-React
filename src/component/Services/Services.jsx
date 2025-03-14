import React from "react";
import "./Services.css";
import { Services_Data } from "./services_data";

export const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="service-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <span>Read More</span>
              <i className="fa fa-arrow-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
