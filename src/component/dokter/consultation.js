import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { API, setAuthToken } from "../../config/api";

class tabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = async () => {
    try {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const result = await API.get("/consultations");
      this.setState({ data: result.data.data });
    } catch (error) {
      console.log(error);
    }
    console.log(this.state);
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <h1>Consultation Data</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Subject</th>
              <th>Date of complaint</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{value.fullname}</td>
                <td>{value.subject}</td>
                <td>{value.createdAt}</td>
                <td>{value.status}</td>
                <td>
                  <Button>Detail</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default tabel;
