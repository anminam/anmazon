import React from "react";
import "./Checkout.scss";
import SubTotal from "Components/SubTotal/SubTotal";
import { RootState } from "core/Store";
import { useSelector } from "react-redux";
import ProductBasketCard from "Components/ProductBasketCard/ProductBasketCard";
import FlipMove from "react-flip-move";

const Checkout = () => {
  const user = useSelector((state: RootState) => state.data.user);
  const list = useSelector((state: RootState) => state.data.baskets);
  //  baskets
  return (
    <div className="checkout">
      <div className="checkout__left">
        <a href="https://anminam.com" target="_blank" rel="noopener noreferrer">
          <div className="checkout__ad">
            <img src="images/anminam-ad.png" alt="anminam.com ad" />
          </div>
        </a>
        <div className="checkout__title">
          <h1>Hello, {user?.email}</h1>
          <h2>Your shopping Basket</h2>
        </div>
        <div className="checkout__contents">
          <FlipMove typeName="ul">
            {list.map((item, i) => (
              <li key={item.id}>
                <ProductBasketCard {...item} />
              </li>
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
