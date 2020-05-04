import React, { Component } from "react";
import { API, setAuthToken } from "../../config/api";
import { Form, Button } from "react-bootstrap";

class addArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
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
      await API.post("/article", {
        title: this.state.title,
        attache: null,
        description: this.state.description,
        userId: user,
      });
      window.location.href = "/dokter";
    } catch (error) {
      console(error);
    }
  };
  render() {
    return (
      <div className="bg-light m-5">
        <h1>Add Article</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="description"
              value={this.state.value}
              as="textarea"
              rows="7"
            />
          </Form.Group>
          <Button type="submit" block>
            Post
          </Button>
        </Form>
      </div>
    );
  }
}

export default addArticle;
