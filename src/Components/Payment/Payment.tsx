import React, { useState, useEffect } from "react";

import CurrencyFormat from "react-currency-format";
import { RootState } from "core/Store";
import { useSelector, useDispatch } from "react-redux";
import ProductBasketCard from "Components/ProductBasketCard/ProductBasketCard";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  StripeCardElementChangeEvent,
  StripeCardElement,
} from "@stripe/stripe-js";

import axios from "core/Axios";
import { Utils } from "core/Utils";
import { useHistory } from "react-router-dom";
import { emptyBasket } from "core/data/actions";
import { db } from "core/Db";

const Payment = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.data.user);
  const basket = useSelector((state: RootState) => state.data.basket);

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<string>("");
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState<string>("");

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const total = Math.floor(Utils.getBasketTotal(basket) * 100);
        if (total) {
          const res = await axios({
            method: "post",
            url: `/payments/create?total=${total}`,
          });

          setClientSecret(res.data.clientSecret);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getClientSecret();
  }, [basket]);

  const handlePaymentSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setProcessing(true);

    let cardValue = elements?.getElement(CardElement) as StripeCardElement;
    if (!cardValue) {
      alert("Card!!");
      return;
    }

    stripe
      ?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardValue,
        },
      })
      .then(({ paymentIntent }) => {
        // paynet
        if (!paymentIntent) {
          alert(error);
          setProcessing(false);
          return;
        }

        if (user && paymentIntent) {
          db.setBasket(user, paymentIntent, basket);
        }

        setSucceeded(true);
        setError("");
        setProcessing(false);

        dispatch(emptyBasket());

        history.replace("/orders");
      });
  };

  const handlePaymentChange = (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__header"></div>
      <div className="payment__container">
        {/* address */}
        <section className="payment__section">
          <div className="payment__section__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__section__contents">
            <p>{user?.email}</p>
            <address>
              <p>123 React Lane</p>
              <p>Eunpyoung, KR</p>
            </address>
          </div>
        </section>
        {/* items */}
        <section className="payment__section">
          <div className="payment__section__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__section__contents">
            <div className="payment__itmes">
              <ul>
                {basket.map((item, i) => (
                  <li key={item.id}>
                    <ProductBasketCard {...item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* payment */}
        <section className="payment__section">
          <div className="payment__section__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__section__contents">
            <form onSubmit={handlePaymentSubmit}>
              <CardElement onChange={handlePaymentChange} />

              <div className="payment__price__container">
                <CurrencyFormat
                  renderText={(value: number) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={Utils.getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
              <button
                className="orange-button"
                disabled={processing || disabled || succeeded}
              >
                {processing ? "Processing" : "buy now"}
              </button>

              {/* error */}
              {error && <div className="error-message">{error}</div>}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
