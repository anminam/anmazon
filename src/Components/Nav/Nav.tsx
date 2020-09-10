import React, { useState } from "react";
import "./Nav.scss";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "core/Store";
import { auth } from "firebaseAnmazon";
import { setUser } from "core/data/actions";

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
  const baskets = useSelector((state: RootState) => state.data.baskets);
  const user = useSelector((state: RootState) => state.data.user);

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch(setUser(null));
    } else {
    }
  };

  const getEmailName = (user: firebase.User | null): string => {
    let name = "Guest";
    if (user && user.email) {
      name = user.email.split("@")[0];
    }

    return name;
  };

  return (
    <div className="nav">
      <div className="nav__option">
        <Link to={!user ? "/login" : ""}>
          <div className="nav__option__one">{`Hello, ${getEmailName(
            user
          )}`}</div>
          <div className="nav__option__two" onClick={handleAuth}>
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
            <span className="nav__option__basket__count">{baskets.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
