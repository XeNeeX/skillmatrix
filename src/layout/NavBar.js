import React from "react";
import "../style/NavBar.css";
import { NavLink } from "react-router-dom";

const options = [
  {
    id: 1,
    name: "Main site",
    redirect: "/",
    exact: true
  },
  {
    id: 2,
    name: "Skill Matrix",
    redirect: "/matrix"
  },
  {
    id: 3,
    name: "Contact",
    redirect: "/contact"
  }
];

const NavBar = () => {
  const menu = options.map(option => (
    <em>
      <li class="option" key={option.id}>
        <NavLink
          to={option.redirect}
          exact={option.exact ? option.exact : false}
        >
          <span class="name">{option.name}</span>
        </NavLink>
      </li>
    </em>
  ));
  return <ul class="nav">{menu}</ul>;
};

export default NavBar;
