import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Button,
  Nav,
  Navbar,
  NavItem,
  Form,
  FormControl
} from "react-bootstrap";
import "../style/NavHeader.css";

class Header extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="/">
          <span className="brand">SkillMatrix Demo</span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/matrix">
            <Nav.Link>SkillMatrix</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Find a document"
            className="mr-sm-2"
          />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Header;
