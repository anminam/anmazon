import React, { useEffect } from "react";
import "App/App.scss";
import "styles/index.scss";

import Header from "Components/Header/Header";
import Home from "Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "Components/Checkout/Checkout";
import Login from "Components/Login/Login";
import { auth } from "firebaseAnmazon";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "core/data/actions";
import SideMenu from "Components/SideMenu/SideMenu";
import Footer from "Components/Footer/Footer";
import Payment from "Components/Payment/Payment";
import { addBasketList } from "core/data/actions";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { RootState } from "core/Store";
import Orders from "Components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51HPzOqEZy06NtzOGkpT6APW499QGNHxD50tyTRaTuUCwJEbYgwW1oMrNmIQNfwtr9IJmkXTDbCQYQkW3nbXZF6Bm00rE9k2a1l"
);
function App() {
  const dispatch = useDispatch();

  const basket = useSelector((state: RootState) => state.data.basket);

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

  useEffect(() => {
    const cartList = localStorage.getItem("cart-list");
    if (cartList) {
      dispatch(addBasketList(JSON.parse(cartList)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart-list", JSON.stringify(basket));
  }, [basket]);

  return (
    <Router>
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
    </Router>
  );
}

export default App;
