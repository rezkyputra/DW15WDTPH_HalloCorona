import React, { Component } from "react";
import Navigasi from "../../component/dropdown/nav";
import Postconsultation from "../../component/pasien/postConsultation";

import { API, setAuthToken } from "../../config/api";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import moment from "moment";

class consultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataconsul: [],
    };
  }

  getData = async () => {
    try {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");
      setAuthToken(token);
      const result = await API.get(`/reply/${id}`);
      const resultconsul = await API.get(`/consultation/${id}`);
      this.setState({ dataconsul: resultconsul.data.data });
      this.setState({ data: result.data.data });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Navigasi />
        {this.state.data != null || this.state.dataconsul != null ? (
          <Container className="m-5">
            <Row>
              <Col md={{ span: 9, offset: 1 }}>
                <h1 className="text-info mb-3">Consultation</h1>
                <Jumbotron className="bg-light">
                  <Row>
                    <Col xs={2}>
                      <Image
                        src="https://image.flaticon.com/icons/png/512/16/16480.png"
                        width="100%"
                        height="100%"
                        roundedCircle
                      />
                    </Col>
                    <Col xs={8}>
                      <h4>
                        <b>{this.state.dataconsul.subject}</b>
                      </h4>
                      <small className="text-muted">
                        {moment(this.state.dataconsul.createdAt).format(
                          "DD MMMM YYYY"
                        )}
                      </small>
                      <br />
                      <small className="text-muted">
                        Keluhan : {this.state.dataconsul.description}
                      </small>
                      <br />
                    </Col>
                    <Col xs={2}>
                      <p>
                        <b>
                          {moment(this.state.dataconsul.liveConsul).format(
                            "DD MMMM YYYY"
                          )}
                        </b>
                      </p>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    {this.state.dataconsul.status ===
                    "waiting live consultation" ? (
                      <>
                        <Col xs={2}></Col>
                        <Col xs={2}>
                          <Image
                            width="100%"
                            height="100%"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE_SVGkhj-_C0prhk6AYisSIdpSsWbpfn3rbYKWErcgwg4ke4C&usqp=CAU"
                            roundedCircle
                          />
                        </Col>
                        <Col xs={8}>
                          <p className="text-muted textSmall">
                            {this.state.data.response}
                          </p>
                        </Col>
                      </>
                    ) : (
                      <Col>
                        <div className="m-3">
                          <h3
                            style={{ textAlign: "center" }}
                            className="text-secondary"
                          >
                            <b>Waiting For Reply</b>
                          </h3>
                        </div>
                      </Col>
                    )}
                  </Row>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        ) : (
          <Postconsultation />
        )}
      </div>
    );
  }
}

export default consultation;
