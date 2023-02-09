import React from "react";
import language_data from "./language_data";
import "./skill.css";

const Language = () => {
  return (
    <>
      {language_data.map((lang_data,index) => {
        const { img, name} = lang_data;

        return (
          <div key={index} className="fade">
    
            <img src={img} alt="" />
            <h3 >{name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Language;
