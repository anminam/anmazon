import React from "react";
import "./Checkout.scss";
import { Link } from "react-router-dom";
import SubTotal from "Components/SubTotal/SubTotal";
import { RootState } from "core/Store";
import { useSelector } from "react-redux";
import ProductBasketCard from "Components/ProductBasketCard/ProductBasketCard";

const Checkout = () => {
  const list = useSelector((state: RootState) => state.data.baskets);
  //  baskets
  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <div className="checkout__ad">
            <img src="images/anminam-ad.png" alt="anminam.com ad" />
          </div>
        </Link>
        <div className="checkout__title">
          <h2>Your shopping Basket</h2>
        </div>
        <div className="checkout__contents">
          <ul>
            {list.map((item, i) => (
              <li key={item.id}>
                <ProductBasketCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
