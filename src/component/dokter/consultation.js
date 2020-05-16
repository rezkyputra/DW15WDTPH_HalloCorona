import React, { Component } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { API, setAuthToken } from "../../config/api";
import { FaSearch } from "react-icons/fa";
import moment from "moment";
import Reply from "./reply";

class consultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedId: "",
      popUp: false,
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
  };

  componentDidMount() {
    this.getData();
  }

  popUpShow = (isShowed) => {
    this.setState({ popUp: isShowed });
  };

  render() {
    // console.log(this.state.data);
    return (
      <div>
        <div className="m-5">
          <h1 className="my-4 text-info">Consultation Data</h1>
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
                  <td>{moment(value.createdAt).format("DD MMMM YYYY")}</td>
                  <td>
                    {value.status == "waiting approve consultation live" ? (
                      <span className="text-primary">
                        <b>Waiting Approve Consultation Live</b>
                      </span>
                    ) : value.status == "waiting live consultation" ? (
                      <span className="text-success">
                        <b>Waiting Live Consultation</b>
                      </span>
                    ) : (
                      <span className="text-danger">
                        <b>Cancel</b>
                      </span>
                    )}
                  </td>
                  <td>
                    {value.status == "waiting approve consultation live" ? (
                      <Button
                        onClick={() => {
                          this.setState({
                            popUp: true,
                            selectedId: value,
                          });
                        }}
                      >
                        <FaSearch />
                      </Button>
                    ) : (
                      <Button disabled>
                        <FaSearch />
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <Modal
              show={this.state.popUp}
              onHide={() => this.popUpShow(false)}
              size="lg"
              centered
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body className="action-area">
                <Reply item={this.state.selectedId} />
              </Modal.Body>
            </Modal>
          </Table>
        </div>
      </div>
    );
  }
}

export default consultation;
