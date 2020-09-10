import React from "react";
import "./Logo.scss";
import imgBlack from "Images/anmazon_logo_black.png";
import imgWhite from "Images/anmazon_logo_white.png";
import { Link } from "react-router-dom";

interface IProps {
  color?: "white" | "black";
}
const Logo = ({ color = "black" }: IProps) => {
  const img = color === "black" ? imgBlack : imgWhite;
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo__image" src={img} alt="anmazon logo" />
      </Link>
    </div>
  );
};

export default Logo;
