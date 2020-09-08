import React from "react";
import "./Logo.scss";
import img from "Images/anmazon.png";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__image" src={img} />
    </div>
  );
};

export default Logo;
