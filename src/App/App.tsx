import React from "react";
import logo from "./logo.svg";
import "App/App.scss";
import "styles/index.scss";

import Header from "Components/Header/Header";
import Home from "Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
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