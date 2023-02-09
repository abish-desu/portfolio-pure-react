import React from "react";
import about from "./data.js";
import "./about.css";
const About = () => {
  return (
    <>
    <section className="about"> 
      {about.map((data, index) => {
        const { header, first_paragraph, paragraph } = data;
        return (
          <div className="about-card" key={index}>
            <p className="header">{header}</p>
            <p className="paragraph">{first_paragraph}</p>
            <p className="paragraph">{paragraph}</p>
            
          </div>
        );
      })}
      </section>
      <div className="line2">
        <div></div>
        <div className="circle"></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default About;
