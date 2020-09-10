import React from "react";
import "./ProductStars.scss";

interface IProps {
  rating: number;
}
const ProductStars = ({ rating }: IProps) => {
  return (
    <>
      {[...Array(rating)].map((_, i) => (
        <span key={i} role="img" aria-label="star">
          🌟
        </span>
      ))}
    </>
  );
};

export default ProductStars;
