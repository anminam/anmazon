import React, { useState } from "react";
import "./Nav.scss";

interface IOption {
  title: string;
  contents: string;
}
const initState = [
  { title: "a", contents: "b" },
  { title: "a", contents: "b" },
  { title: "a", contents: "b" },
];

const Nav = () => {
  const [list, setList] = useState<IOption[]>(initState);
  return (
    <div className="nav">
      {list.map((item) => (
        <div className="nav__option">
          <div className="nav__option_one">{item.title}</div>
          <div className="nav__option_two">{item.contents}</div>
        </div>
      ))}
    </div>
  );
};

export default Nav;
