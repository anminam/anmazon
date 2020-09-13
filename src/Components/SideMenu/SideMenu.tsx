import React from "react";

import { RootState } from "core/Store";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "core/data/actions";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.data.user);
  const isOpen = useSelector((state: RootState) => state.data.isSideMenuOpen);
  const getEmailName = (user: firebase.User | null): string => {
    let name = "Guest";
    if (user && user.email) {
      name = user.email.split("@")[0];
    }

    return name;
  };

  const handleCloseButton = () => {
    dispatch(setSideBar(false));
  };
  const heandleClickSideMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    dispatch(setSideBar(false));
  };
  /**
   * 컨테이너 클릭시
   * @param event
   */
  const handleContainerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };
  return (
    <div
      className={`sidemenu ${isOpen ? "active" : ""}`}
      onClick={heandleClickSideMenu}
    >
      <div className="sidemenu__container" onClick={handleContainerClick}>
        <button
          type="button"
          className="close-button"
          onClick={handleCloseButton}
        >
          X
        </button>
        <div className="sidemenu__login">
          <h1>Hello, {getEmailName(user)}</h1>
        </div>
        <div className="sidemenu__common-list">
          <ul>
            {!user && (
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            )}
            <li>
              <Link to="/checkout">Cart</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
