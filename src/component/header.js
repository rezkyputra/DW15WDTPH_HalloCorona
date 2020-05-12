import React, { Component } from "react";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";
import House from "../icon/House.png";
import Hand from "../icon/Hand.png";
import Eyes from "../icon/Eyes.png";
import Crowd from "../icon/Crowd.png";
import Corona from "../icon/corona.png";
import { Link } from "react-router-dom";

class header extends Component {
  render() {
    return (
      <Jumbotron className="bg-info">
        <Row>
          <Col sm={4}>
            <Row>
              <Col>
                <img width="150%" src={Corona} />
              </Col>
              <Col>
                <h3 className="text-light">
                  <b>CEGAH Covid-19</b>
                </h3>
                <p className="text-light">Dengan Melakukan</p>
                <p>
                  <Link to="/pasien/consultation">
                    <Button variant="success">Consultasi Dokter</Button>
                  </Link>
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm={2}>
            <img width="100%" src={Crowd} />
          </Col>

          <Col sm={2}>
            <img width="100%" src={Eyes} />
          </Col>

          <Col sm={2}>
            <img width="100%" src={Hand} />
          </Col>

          <Col sm={2}>
            <img width="100%" src={House} />
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default header;
