import React from "react";
import "./Header.scss";
import Logo from "Components/Logo/Logo";
import Search from "Components/Search/Search";
import Nav from "Components/Nav/Nav";
const Header = () => {
  return (
    <header className="header">
      <Logo color="white" />
      <Search />
      <Nav />
    </header>
  );
};

export default Header;
