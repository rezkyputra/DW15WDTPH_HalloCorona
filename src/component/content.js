import React, { Component } from "react";
import { Card, Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { getArticles } from "../_actions/article";
import { Link } from "react-router-dom";

class content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    const { data: ArData, loading, error } = this.props.article;

    if (error) return <h1>There's unknown error</h1>;
    if (loading) return <Spinner animation="border" variant="primary" />;
    return (
      <Container>
        <h1 className="text-info m-4" style={{ textAlign: "center" }}>
          Artikel Hari Ini
        </h1>
        <Row className="mb-5">
          {ArData.length > 0 &&
            ArData.map((ardata, index) => (
              <Col md={4}>
                <Link to={`/detail/${ardata.id}`}>
                  <Card className="mb-3 p-2" key={index}>
                    <Card.Img
                      variant="top"
                      width="200px"
                      height="150px"
                      src="https://cdn0-production-images-kly.akamaized.net/0b6Zf3pAgq7YPp7SC5_fQpRhWdE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2062708/original/044524900_1523095076-Ini-Pentingnya-Memiliki-Asuransi-Kesehatan-By-visivastudio-shutterstock.jpg"
                      rounded
                    />
                    <Card.Body>
                      <Card.Title>
                        <p>{`${ardata.title}`}</p>
                      </Card.Title>
                      <Card.Text className="text-secondary">
                        <small>
                          {`${ardata.description}`.substring(0, 40)} ...
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    article: state.article,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => dispatch(getArticles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(content);
