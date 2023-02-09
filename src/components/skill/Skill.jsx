import React, { useState } from "react";
import "./skill.css";
import Language from "./Language";
import Design from "./Design";
const Skill = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="navbar-skill">
        <button className={`language ${index==0 ? "nav-active" : ""}`} onClick={() => setIndex(0)}>Language</button>

        <button className={`design ${index==1 ? "nav-active" : ""}`} onClick={() => setIndex(1)}>Design</button>
      </div>
      <div className="skills">
        
        {index == 0 && <Language />}
        {index == 1 && <Design />}
        
        
      </div>

      <div className="line3">
        <div></div>
        <div></div>
        <div className="circle"></div>
        <div></div>
      </div>
    </>
  );
};

export default Skill;
