import React, { useState } from "react";
import "./Nav.scss";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "core/Store";

interface IOption {
  title: string;
  contents: string;
}
const initState = [
  { title: "Hello, Sign in", contents: "Account" },
  { title: "Returns", contents: "& Orders" },
  { title: "this is", contents: "What the" },
];

const Nav = () => {
  const [list] = useState<IOption[]>(initState);

  const baskets = useSelector((state: RootState) => state.data.baskets);
  return (
    <div className="nav">
      {list.map((item, i) => (
        <div key={i} className="nav__option">
          <div className="nav__option__one">{item.title}</div>
          <div className="nav__option__two">{item.contents}</div>
        </div>
      ))}
      <div className="nav__option">
        <Link to="/checkout">
          <div className="nav__option__basket">
            <ShoppingBasketIcon />
            <span className="nav__option__basket__count">{baskets.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
