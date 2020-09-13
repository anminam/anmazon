import React, { useState } from "react";
import { Search as SearchIcon } from "@material-ui/icons";

const Search = () => {
  const [keyword, setKeyword] = useState<string>("");
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
