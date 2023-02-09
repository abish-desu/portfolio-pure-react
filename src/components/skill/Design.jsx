import React from 'react'
import design_data from './design_data';
import "./skill.css";

const Design = () => {
  return (
    <>
    {design_data.map((des_data,index) => {
      const { img, name} = des_data;

      return (
        <div key={index} className="fade">
  
          <img src={img} alt="" />
          <h3>{name}</h3>
        </div>
      );
    })}
  </>  )
}

export default Design;