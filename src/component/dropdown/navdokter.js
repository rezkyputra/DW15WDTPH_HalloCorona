import React, { Component } from "react";
import { Navbar, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../icon/Icon.png";

class navdokter extends Component {
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
            <Link to={`/dokter`}>
              <img src={Logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown
              className="m-0"
              title={
                <div>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE_SVGkhj-_C0prhk6AYisSIdpSsWbpfn3rbYKWErcgwg4ke4C&usqp=CAU"
                    width="50px"
                    roundedCircle
                  />
                </div>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link to={`/dokter/profile`}>Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={`/dokter/artikel`}>Add Article</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link onClick={this.logOut} to="/" className="text-danger">
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

export default navdokter;
