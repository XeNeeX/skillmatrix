import React from "react";
import { Navbar } from "react-bootstrap";
import "../style/Footer.css";

const Footer = () => {
  return (
    <Navbar
      fixed="bottom"
      bg="primary"
      variant="dark"
      style={{ color: "white", textAlign: "center" }}
    >
      SkillMatrix Demo - Kamil Jarmołowicz 2020 (Created using React and
      React-Bootstrap)
    </Navbar>
  );
};

export default Footer;
