import React, { Component } from "react";
import { Navbar, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../icon/Icon.png";

class nav extends Component {
  logOut = () => {
    // const data = "false";
    // const status = "Patient";
    // const token = null;
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
  };
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand>
            <Link to={`/pasien`}>
              <img src={Logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown
              className="m-0"
              title={
                <div>
                  <Image
                    src="https://image.flaticon.com/icons/png/512/16/16480.png"
                    width="50px"
                    roundedCircle
                  />
                </div>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to={`/pasien/profile`}>Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/pasien/consultation`}>Consultation</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to={`/pasien/consultation`}>Consultation</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link onClick={this.logOut} to={`/`} className="text-danger">
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default nav;
