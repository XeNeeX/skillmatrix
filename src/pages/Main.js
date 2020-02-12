import React from "react";
import "../style/Main.css";
import { Jumbotron, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Main = () => {
  return (
    <div className="container-sm text-center" style={{ marginTop: "15%" }}>
      <Jumbotron className="text-left">
        <h1>Welcome!</h1>
        <p>
          This is a Skill Matrix Demo project, made by Kamil Jarmołowicz using
          mainly React and React-Bootstrap
        </p>
        <p>
          <LinkContainer to="/matrix">
            <Button variant="primary">Go to Skill Matrix</Button>
          </LinkContainer>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Main;
