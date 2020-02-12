import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

class Contact extends Component {
  state = {
    emailValue: "",
    nameValue: "",
    msgValue: ""
  };
  handleEChange = e => {
    this.setState({
      emailValue: e.target.value
    });
  };
  handleNChange = e => {
    this.setState({
      nameValue: e.target.value
    });
  };
  handleMChange = e => {
    this.setState({
      msgValue: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      nameValue: "",
      emailValue: "",
      msgValue: ""
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center" style={{ marginTop: "15%" }}>
          Contact me!
        </h1>
        <div class="container-md text-center">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={this.state.emailValue}
                  onChange={this.handleEChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={this.state.nameValue}
                  onChange={this.handleNChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridTextArea">
              <Form.Label>Your message</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Enter your message"
                value={this.state.msgValue}
                onChange={this.handleMChange}
              />
            </Form.Group>
            <Button
              variant="outline-primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default Contact;
