import React from "react";
import "./SideMenu.scss";
import { RootState } from "core/Store";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "core/data/actions";

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
  return (
    <div className={`sidemenu ${isOpen ? "active" : ""}`}>
      <div className="sidemenu__container">
        <button
          type="button"
          className="close-button"
          onClick={handleCloseButton}
        >
          X
        </button>
        <h1>Hello, {getEmailName(user)}</h1>
      </div>
    </div>
  );
};

export default SideMenu;
