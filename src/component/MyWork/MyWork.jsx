import React from "react";
import "./mywork.css";
import { mywork_data } from "./MyWork";

export const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((mywork, index) => (
          <img src={mywork.w_img} alt="" key={index} />
        ))}
      </div>
      <div className="mywork-showmore">
        <span>Read More</span>
        <i className="fa fa-arrow-right"></i>
      </div>
    </div>
  );
};
