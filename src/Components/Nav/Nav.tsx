import React, { useState } from "react";
import "./Nav.scss";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "core/Store";
import { auth } from "firebaseAnmazon";
import { setUser } from "core/data/actions";
import { Utils } from "core/Utils";

interface IOption {
  title: string;
  contents: string;
}
const initState = [
  { title: "Returns", contents: "& Orders" },
  { title: "this is", contents: "What the" },
];

const Nav = () => {
  const dispatch = useDispatch();
  const [list] = useState<IOption[]>(initState);
  const basket = useSelector((state: RootState) => state.data.basket);
  const user = useSelector((state: RootState) => state.data.user);

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch(setUser(null));
    } else {
    }
  };

  return (
    <div className="nav">
      <div className="nav__option">
        <Link to={!user ? "/login" : ""} onClick={handleAuth}>
          <div className="nav__option__one">{`Hello, ${Utils.getEmailName(
            user
          )}`}</div>
          <div className="nav__option__two">
            {user ? "Sign Out" : "Sign In"}
          </div>
        </Link>
      </div>
      {list.map((item, i) => (
        <div key={i} className="nav__option">
          <div className="nav__option__one">{item.title}</div>
          <div className="nav__option__two">{item.contents}</div>
        </div>
      ))}
      {/* 체크아웃 */}
      <div className="nav__option mobile_show">
        <Link to="/checkout">
          <div className="nav__option__basket">
            <ShoppingBasketIcon />
            <span className="nav__option__basket__count">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
