import React, { Component } from "react";
import { API, setAuthToken } from "../../config/api";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

class consultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      phone: "",
      bordDate: "",
      age: "",
      height: "",
      weight: "",
      gender: "",
      subject: "",
      liveConsul: "",
      description: "",
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("id");
      setAuthToken(token);
      await API.post("/consultation", {
        fullname: this.state.fullname,
        phone: this.state.phone,
        bordDate: this.state.bordDate,
        age: this.state.age,
        height: this.state.height,
        weight: this.state.weight,
        gender: this.state.gender,
        subject: this.state.subject,
        liveConsul: this.state.liveConsul,
        description: this.state.description,
        userId: user,
        status: "Waiting Approve Consultation Live",
      });
      window.location.href = "/pasien/consultation";
    } catch (error) {
      console(error);
    }
  };

  render() {
    return (
      <div>
        <div className="m-5">
          <h1 className="text-info mb-5">Reservasi Consultasi</h1>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Born Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="bordDate"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        name="age"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Height</Form.Label>
                      <Form.Control
                        type="number"
                        name="height"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Weight</Form.Label>
                      <Form.Control
                        type="number"
                        name="weight"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    onChange={this.handleChange}
                    value={this.state.value}
                    required
                  >
                    <option></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Live Consultation Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="liveConsul"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    rows="3"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Button type="submit" block>
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default consultation;
