import React, { useEffect, useState } from "react";

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

const Nav = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.data.basket);
  const user = useSelector((state: RootState) => state.data.user);
  const [isChangeBasketLength, setisChangeBasketLength] = useState<boolean>(
    false
  );

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch(setUser(null));
    } else {
    }
  };

  useEffect(() => {
    setisChangeBasketLength(true);
    setTimeout(() => {
      setisChangeBasketLength(false);
    }, 250);
  }, [basket]);

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
      {/*  */}
      <div className="nav__option">
        <Link to="/orders">
          <div className="nav__option__one">Returns</div>
          <div className="nav__option__two">{`& Orders`}</div>
        </Link>
      </div>
      <div className="nav__option">
        <div className="nav__option__one">this is</div>
        <div className="nav__option__two">What the</div>
      </div>
      {/* 체크아웃 */}
      <div className="nav__option mobile_show">
        <Link to="/checkout">
          <div className="nav__option__basket">
            <ShoppingBasketIcon />
            <span
              className={`nav__option__basket__count ${
                isChangeBasketLength ? "trigger" : ""
              }`}
            >
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
