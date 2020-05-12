import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticle } from "../_actions/article";
import Navigasi from "../component/navi";
import NavigasiPasien from "../component/dropdown/nav";
import { Spinner, Image, Container, Row, Col } from "react-bootstrap";
import moment from "moment";

class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.getArticle(params.id);
  }

  render() {
    const token = localStorage.getItem("token");
    const { data: datavalue, loading, error } = this.props.article;

    if (error) return <h1>There's unknown error</h1>;
    if (loading) return <Spinner animation="border" variant="primary" />;

    return (
      <>
        {token != null ? <NavigasiPasien /> : <Navigasi />}
        <Container className="my-4">
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <h1>
                <b>{`${datavalue.title}`}</b>
              </h1>
              <p className="text-secondary">
                {moment(datavalue.createdAt).format("DD MMMM YYYY")}
              </p>
              <p>
                <b>Author : </b>
                <span className="text-info">{`${datavalue.User}`}</span>
              </p>
              <div
                className="bg-light my-3"
                style={{ border: "3px outset white" }}
              >
                <div className="m-3 p-5">
                  <Image
                    variant="top"
                    fluid
                    src="https://cdn0-production-images-kly.akamaized.net/0b6Zf3pAgq7YPp7SC5_fQpRhWdE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2062708/original/044524900_1523095076-Ini-Pentingnya-Memiliki-Asuransi-Kesehatan-By-visivastudio-shutterstock.jpg"
                    rounded
                    thumbnail
                  />
                  <p className="mt-3">{`${datavalue.description}`}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
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
    getArticle: (id) => dispatch(getArticle(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(detail);
