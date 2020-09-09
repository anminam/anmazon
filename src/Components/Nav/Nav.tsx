import React, { useState } from "react";
import "./Nav.scss";

interface IOption {
  title: string;
  contents: string;
}
const initState = [
  { title: "Hello, Sign in", contents: "Account" },
  { title: "Returns", contents: "& Orders" },
  { title: "this is", contents: "What the" },
];

const Nav = () => {
  const [list, setList] = useState<IOption[]>(initState);
  return (
    <div className="nav">
      {list.map((item) => (
        <div className="nav__option">
          <div className="nav__option__one">{item.title}</div>
          <div className="nav__option__two">{item.contents}</div>
        </div>
      ))}
    </div>
  );
};

export default Nav;
