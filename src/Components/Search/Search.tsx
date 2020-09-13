import React, { useEffect, useState } from "react";
import { Search as SearchIcon } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { setSearchKeyword } from "core/data/actions";

const Search = () => {
  const [keyword, setKeyword] = useState<string>("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchKeyword(keyword.toLowerCase()));
  }, [dispatch, keyword]);

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
