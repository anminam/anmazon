import React from "react";
import "./Search.scss";
import { Search as SearchIcon } from "@material-ui/icons";

const Search = () => {
  return (
    <div className="search">
      <input type="text" className="search__input" />
      <SearchIcon />
    </div>
  );
};

export default Search;
