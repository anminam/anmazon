import React from "react";
import "./ProductSmallCard.scss";
import { IProduct } from "interfaces/IProduct";

const ProductSmallCard = ({ title, price, img, rating }: IProduct) => {
  const handleButtonClick = () => {};
  return (
    <div className="productsmallcard">
      <div className="productsmallcard__info">
        <div className="productsmallcard__title">{title}</div>
        <div className="productsmallcard__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="productsmallcard__rating">
          {[...Array(rating)].map((item, i) => (
            <span key={i}>🌟</span>
          ))}
        </div>
        <div className="productsmallcard__rating"></div>
      </div>
      <div className="productsmallcard__image">
        <img src={img} alt={title} />
      </div>
      <div className="productsmallcard__footer">
        <button onClick={handleButtonClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductSmallCard;
