import React from "react";
import "./ProductBasketCard.scss";
import { IProduct } from "interfaces/IProduct";
import { useDispatch } from "react-redux";
import { addToBasket } from "core/data/actions";

const ProductBasketCard = ({ title, price, img, rating, id }: IProduct) => {
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
    <div className="productbasketcard">
      <div className="productbasketcard__info">
        <div className="productbasketcard__title">{title}</div>
        <div className="productbasketcard__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="productbasketcard__rating">
          {[...Array(rating)].map((item, i) => (
            <span key={i} role="img" aria-label="star">
              🌟
            </span>
          ))}
        </div>
        <div className="productbasketcard__rating"></div>
      </div>
      <div className="productbasketcard__image">
        <img src={img} alt={title} />
      </div>
      <div className="productbasketcard__footer">
        <button onClick={handleButtonClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductBasketCard;
