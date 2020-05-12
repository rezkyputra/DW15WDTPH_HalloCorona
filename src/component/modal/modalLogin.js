import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { API } from "../../config/api";
import { Link } from "react-router-dom";

class modalLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      username: "",
      password: "",
      show: false,
      showSignUp: false,
    };
  }

  // SignIn
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await API.post("/signin", {
        username: this.state.username,
        password: this.state.password,
      }).then((res) => {
        const token = res.data.data.token;
        const role = res.data.data.role;
        const id = res.data.data.id;
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        localStorage.setItem("role", role);
        if (role === 1) {
          window.location.href = "/dokter";
        } else {
          window.location.href = "/pasien";
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleSignInShow = (isShowed) => {
    this.setState({ show: isShowed });
  };

  // SignUp

  handleSelect = (event) => {
    const { data } = this.state;
    const value = event.target.value;
    this.setState({
      data: { ...data, [event.target.name]: value },
    });
  };

  handleChangeUp = (event) => {
    const { data } = this.state;
    const value = event.target.value;
    this.setState({
      data: { ...data, [event.target.name]: value },
    });
  };

  handleSubmitSignUp = async (event) => {
    try {
      event.preventDefault();
      await API.post("/signup", this.state.data).then((res) => {
        // const token = res.data.data.token;
        // const role = res.data.data.role;
        // const id = res.data.data.id;
        // localStorage.setItem("token", token);
        // localStorage.setItem("id", id);
        // this.setState({ showSignUp: false });
        // if (role < 2) {
        //   window.location.href = "/dokter";
        // } else {
        //   window.location.href = "/pasien";
        // }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      event.preventDefault();
      await API.post("/signup", this.state.data).then((res) => {
        const token = res.data.data.token;
        const role = res.data.data.role;
        const id = res.data.data.id;
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        localStorage.setItem("role", role);
        if (role < 2) {
          window.location.href = "/dokter";
        } else {
          window.location.href = "/pasien";
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {/* Sign In */}
        <Button
          variant="outline-primary"
          onClick={this.handleSignInShow}
          className="mr-1"
        >
          Sign In
        </Button>

        <Modal
          show={this.state.show}
          onHide={() => this.handleSignInShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={this.handleChange}
                  value={this.state.value}
                  required
                  autoComplete="off"
                  name="username"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  value={this.state.value}
                  required
                  type="password"
                  id="#password"
                  name="password"
                  autoComplete="off"
                />
              </Form.Group>
              <Button type="submit" block>
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <small>
              Don't you have an Account{" "}
              <Link
                onClick={() => {
                  this.setState({ showSignUp: true });
                  this.handleSignInShow(false);
                }}
              >
                klik Here
              </Link>
            </small>
          </Modal.Footer>
        </Modal>

        {/* SignUp */}
        <Button
          variant="outline-info"
          onClick={() => {
            this.setState({
              showSignUp: true,
            });
          }}
        >
          Sign Up
        </Button>

        <Modal
          show={this.state.showSignUp}
          onHide={() => {
            this.setState({ showSignUp: false });
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmitSignUp}>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={this.handleChangeUp}
                  value={this.state.value}
                  required
                  autoComplete="off"
                  name="name"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Usename</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={this.handleChangeUp}
                  value={this.state.value}
                  required
                  autoComplete="off"
                  name="username"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  onChange={this.handleChangeUp}
                  value={this.state.value}
                  required
                  autoComplete="off"
                  name="email"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={this.handleChangeUp}
                  value={this.state.value}
                  required
                  type="password"
                  name="password"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>List As</Form.Label>
                <Form.Control
                  as="select"
                  onChange={this.handleSelect}
                  name="roleId"
                  required
                >
                  <option></option>
                  <option value="1">Dokter</option>
                  <option value="2">Pasien</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  onChange={this.handleSelect}
                  name="gender"
                  required
                >
                  <option></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChangeUp}
                  value={this.state.value}
                  required
                  autoComplete="off"
                  name="phone"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={this.state.value}
                  name="address"
                  onChange={this.handleChangeUp}
                />
              </Form.Group>

              <Button type="submit" block>
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default modalLogin;
