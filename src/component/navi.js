import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Login from "./modal/modalLogin";
import Logo from "../icon/Icon.png";

class navi extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="justify-content-start">
            <img src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Login />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navi;
