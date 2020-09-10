import React from "react";
import "./ProductBasketCard.scss";
import { IProduct } from "interfaces/IProduct";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "core/data/actions";
import ProductStars from "Components/ProductStars/ProductStars";

const ProductBasketCard = ({ title, price, img, rating, id }: IProduct) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(removeFromBasket(id));
  };
  return (
    <div className="productbasketcard">
      <div className="productbasketcard__image">
        <img src={img} alt={title} />
      </div>
      <div className="productbasketcard__info">
        <div className="productbasketcard__title">{title}</div>
        <div className="productbasketcard__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="productbasketcard__rating">
          <ProductStars rating={rating} />
        </div>
        <div className="productbasketcard__footer">
          <button onClick={handleButtonClick}>Remove from Basket</button>
        </div>
      </div>
    </div>
  );
};

export default ProductBasketCard;
