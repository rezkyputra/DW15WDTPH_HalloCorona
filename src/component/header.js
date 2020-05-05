import React, { Component } from "react";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";
import House from "../icon/House.png";
import Hand from "../icon/Hand.png";
import Eyes from "../icon/Eyes.png";
import Crowd from "../icon/Crowd.png";
import Corona from "../icon/corona.png";

class header extends Component {
  render() {
    return (
      <Jumbotron className="bg-info">
        <Row>
          <Col sm={2}>
            <img src={Corona} />
          </Col>
          <Col sm={2}>
            <h3 className="text-light">
              <b>CEGAH Covid-19</b>
            </h3>
            <p className="text-light">Dengan Melakukan</p>
            <p>
              <Button variant="dark">Consultasi Dokter</Button>
            </p>
          </Col>

          <Col sm={1.5}>
            <img src={Crowd} />
          </Col>

          <Col sm={1.5}>
            <img src={Eyes} />
          </Col>

          <Col sm={1.5}>
            <img src={Hand} />
          </Col>

          <Col sm={1.5}>
            <img src={House} />
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default header;
