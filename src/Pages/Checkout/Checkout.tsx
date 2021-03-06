import React from "react";

import { RootState } from "core/Store";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import { Utils } from "core/Utils";

import SubTotal from "Components/SubTotal/SubTotal";
import ProductBasketCard from "Components/ProductBasketCard/ProductBasketCard";

const Checkout = () => {
  const user = useSelector((state: RootState) => state.data.user);
  const basket = useSelector((state: RootState) => state.data.basket);

  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__left">
          <a
            href="https://anminam.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="checkout__ad">
              <img src="images/anminam-ad.png" alt="anminam.com ad" />
            </div>
          </a>
          <div className="checkout__title">
            <h1>Hello, {Utils.getEmailName(user)}</h1>
            <h2>Your shopping Basket</h2>
          </div>
        </div>
        <div className="checkout__right">
          <SubTotal />
        </div>
      </div>
      <div className="checkout__contents">
        {basket.length === 0 && (
          <div className="checkout__empty">Empty!!! Go Shopping</div>
        )}
        {basket.length > 0 && (
          <FlipMove typeName="ul">
            {basket.map((item, i) => (
              <li key={i}>
                <ProductBasketCard product={item} />
              </li>
            ))}
          </FlipMove>
        )}
      </div>
    </div>
  );
};

export default Checkout;
