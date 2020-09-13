import React, { useEffect } from "react";

import { Switch, Route, useHistory } from "react-router-dom";
import { auth } from "firebaseAnmazon";
import { useDispatch, useSelector } from "react-redux";
import { setSideBar, setUser } from "core/data/actions";

import Header from "Components/Header/Header";
import SideMenu from "Components/SideMenu/SideMenu";
import Footer from "Components/Footer/Footer";

import { addBasketList } from "core/data/actions";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { RootState } from "core/Store";

import Home from "Pages/Home/Home";
import Orders from "Pages/Orders/Orders";
import Checkout from "Pages/Checkout/Checkout";
import Login from "Pages/Login/Login";
import Payment from "Pages/Payment/Payment";

const promise = loadStripe(
  "pk_test_51HPzOqEZy06NtzOGkpT6APW499QGNHxD50tyTRaTuUCwJEbYgwW1oMrNmIQNfwtr9IJmkXTDbCQYQkW3nbXZF6Bm00rE9k2a1l"
);
function App() {
  const dispatch = useDispatch();

  const basket = useSelector((state: RootState) => state.data.basket);

  /**
   * 인증 확인
   */
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User ==>", authUser);

      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        // logout
      }
    });
  }, [dispatch]);

  /**
   * 로컬스토리지 카트 확인
   */
  useEffect(() => {
    const cartList = localStorage.getItem("cart-list");
    if (cartList) {
      dispatch(addBasketList(JSON.parse(cartList)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart-list", JSON.stringify(basket));
  }, [basket]);

  const history = useHistory();

  /**
   * 사이드바 관련
   */
  useEffect(() => {
    return history.listen((state) => {
      dispatch(setSideBar(false));
    });
  }, [dispatch, history]);

  return (
    <div className="app">
      <SideMenu />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
