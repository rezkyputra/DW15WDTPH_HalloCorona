import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile } from "../_actions/user";
import { Spinner, Container, Row, Col, Form, Button } from "react-bootstrap";

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.props.getProfile(localStorage.getItem("id"));
  }

  render() {
    const { data: user, loading, error } = this.props.user;
    if (error) return <h1>There's unknown error</h1>;
    if (loading) return <Spinner animation="border" variant="primary" />;
    return (
      <Container className="mt-3">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Row>
              <Col>
                <Form>
                  <h1 className="text-info mb-3">PERSONAL INFO</h1>
                  <Form.Group>
                    <Form.Label>{`${user.name}`}</Form.Label>
                    <Form.Text className="text-muted">Fullname</Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>{`${user.email}`}</Form.Label>
                    <Form.Text className="text-muted">Email</Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      {user.roleId < 2 ? <>Dokter</> : <>Patient</>}
                    </Form.Label>
                    <Form.Text className="text-muted">Status</Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>{`${user.gender}`}</Form.Label>
                    <Form.Text className="text-muted">Gender</Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>{`${user.address}`}</Form.Label>
                    <Form.Text className="text-muted">Address</Form.Text>
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <img
                  width="100%"
                  height="100%"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE_SVGkhj-_C0prhk6AYisSIdpSsWbpfn3rbYKWErcgwg4ke4C&usqp=CAU"
                />
                <Button variant="info" block className="mt-3">
                  Change Image
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: (id) => dispatch(getProfile(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(profile);
