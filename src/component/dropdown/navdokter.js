import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "../../icon/Icon.png";

class navdokter extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="justify-content-start">
            <img src={Icon} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link>
              <Link to={`/dokter`}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={`/dokter/profile`}>Profile</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={`/dokter/artikel`}>Add Article</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={`/`}>Logout</Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navdokter;
