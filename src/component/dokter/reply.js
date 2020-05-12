import React from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import moment from "moment";
import { API, setAuthToken } from "../../config/api";
import { FaCalendarAlt, FaCalendarDay } from "react-icons/fa";

const ReplyAction = ({ item }) => {
  console.log(item);
  const [response, setResponse] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const patchConsult = async (event) => {
    try {
      event.preventDefault();
      const token = localStorage.getItem("token");
      setAuthToken(token);
      await API.patch("/consultation/" + item.id, {
        status: status,
      });
      await API.post("/consultation/" + item.id + "/reply", {
        response: response,
        consultationId: item.id,
      });
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row className="mb-4">
          <Col md={8}>
            <h2>{item.subject}</h2>
            <p className="text-secondary">{item.description}</p>
          </Col>
          <Col md={1}>
            <FaCalendarAlt className="text-info" />
            <br />
            <br />
            <br />
            <FaCalendarDay className="text-info" />
          </Col>
          <Col md={3}>
            Date of complain <br />
            <small className="text-secondary">
              {moment(item.createdAt).format("DD MMMM YYYY")}
            </small>
            <br /> <br />
            Live Consultation <br />
            <small className="text-secondary">
              {moment(item.liveConsul).format("DD MMMM YYYY")}
            </small>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Age</th>
                  <th>Height</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.fullname}</td>
                  <td>{item.gender}</td>
                  <td>{item.phone}</td>
                  <td>{item.age}</td>
                  <td>{item.height}</td>
                  <td>{item.weight}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Form onSubmit={patchConsult}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Give Response</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="float-right">
            <Button
              variant="danger mr-3"
              onClick={() => handleStatusChange("cancel")}
              type="submit"
            >
              Cancel
            </Button>
            <Button
              variant="success"
              onClick={() => handleStatusChange("waiting live consultation")}
              type="submit"
            >
              Approve
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ReplyAction;
