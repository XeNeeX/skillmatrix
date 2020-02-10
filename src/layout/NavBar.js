import React, { Component } from "react";
import "../style/NavBar.css";
import Options from "../elements/Options";
import { BrowserRouter } from "react-router-dom";

const options = [
  {
    id: 1,
    name: "Main site",
    redirect: "/"
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

class NavBar extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul className="nav">
          <Options options={options} />
        </ul>
      </BrowserRouter>
    );
  }
}
export default NavBar;
