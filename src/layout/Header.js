import React, { Component } from "react";
import "../style/Header.css";

export default class Header extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render(props) {
    return (
      <div className="header">
        SoftwareHut Demo SkillMatrix
        <input
          type="text"
          className="search"
          onChange={this.handleChange}
          placeholder="Find a document"
        />
      </div>
    );
  }
}
