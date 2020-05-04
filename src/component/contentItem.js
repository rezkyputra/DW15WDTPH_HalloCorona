import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticle } from "../_actions/article";
import { Spinner } from "react-bootstrap";

class contentItem extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       data: {},
  //     };
  //   }

  //   componentDidMount() {
  //     const {
  //       match: { params },
  //     } = this.props;
  //     this.props.getArticle(params.id);
  //   }

  render() {
    const { data: datavalue, loading, error } = this.props.article;

    if (error) return <h1>There's unknown error</h1>;
    if (loading) return <Spinner animation="border" variant="primary" />;

    return (
      <>
        <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(contentItem);
