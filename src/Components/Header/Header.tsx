import React from "react";
import "./Header.scss";
import Logo from "Components/Logo/Logo";
import Search from "Components/Search/Search";
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Search />
    </header>
  );
};

export default Header;
