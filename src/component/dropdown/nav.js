import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class nav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="justify-content-start">
            {/* <img src={logo} /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to={`/Pasien`}>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={`/pasien/profile`}>Profile</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={`/pasien/consultation`}>Consultation</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={`/`}>Logout</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default nav;
