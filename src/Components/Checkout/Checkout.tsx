import React from "react";
import "./Checkout.scss";
import { Link } from "react-router-dom";
import SubTotal from "Components/SubTotal/SubTotal";

const Checkout = () => {
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
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
