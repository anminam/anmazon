import React from "react";
import "./Logo.scss";
import img from "Images/anmazon.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo__image" src={img} alt="anmazon logo" />
      </Link>
    </div>
  );
};

export default Logo;
