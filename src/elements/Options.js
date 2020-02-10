import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

const Options = props => {
  const { options } = props;
  const ListItems = options.map(option => (
    <em>
      <Link className="option" exact to={option.redirect}>
        {option.name}
        <br />
      </Link>
    </em>
  ));
  return ListItems;
};

export default Options;
