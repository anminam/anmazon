import React from "react";
import Logo from "Components/Logo/Logo";
import Search from "Components/Search/Search";
import Nav from "Components/Nav/Nav";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from "react-redux";
import { setSideBar } from "core/data/actions";

const Header = () => {
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(setSideBar(true));
  };

  return (
    <header className="header">
      <div className="header__menu">
        <button type="button" onClick={handleMenuClick}>
          <MenuIcon />
        </button>
      </div>
      <Logo color="white" />
      <Search />
      <Nav />
    </header>
  );
};

export default Header;
