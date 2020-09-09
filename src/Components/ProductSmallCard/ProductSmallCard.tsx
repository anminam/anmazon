import React from "react";
import "./ProductSmallCard.scss";
import { IProduct } from "interfaces/IProduct";
import { useDispatch } from "react-redux";
import { addToBasket } from "core/data/actions";

const ProductSmallCard = ({ title, price, img, rating, id }: IProduct) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(
      addToBasket({
        title,
        price,
        img,
        rating,
        id,
      })
    );
  };
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
            <span key={i} role="img" aria-label="star">
              🌟
            </span>
          ))}
        </div>
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
