import React, { useEffect } from "react";
import "App/App.scss";
import "styles/index.scss";

import Header from "Components/Header/Header";
import Home from "Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "Components/Checkout/Checkout";
import Login from "Components/Login/Login";
import { auth } from "firebaseAnmazon";
import { useDispatch } from "react-redux";
import { setUser } from "core/data/actions";

function App() {
  const dispatch = useDispatch();

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

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
