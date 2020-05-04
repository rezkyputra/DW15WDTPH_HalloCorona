import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticle } from "../_actions/article";
import Navigasi from "../component/navi";
import NavigasiPasien from "../component/dropdown/nav";
import { Spinner, Image } from "react-bootstrap";

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
        <div>
          {token != null ? <NavigasiPasien /> : <Navigasi />}
          <Image
            variant="top"
            width="100%"
            height="100%"
            src="https://cdn0-production-images-kly.akamaized.net/0b6Zf3pAgq7YPp7SC5_fQpRhWdE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2062708/original/044524900_1523095076-Ini-Pentingnya-Memiliki-Asuransi-Kesehatan-By-visivastudio-shutterstock.jpg"
            rounded
          />
          <h1>{`${datavalue.title}`}</h1>
          <p>{`${datavalue.description}`}</p>
        </div>
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
