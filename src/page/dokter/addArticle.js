import React, { Component } from "react";
import Navigasi from "../../component/dropdown/navdokter";
import Article from "../../component/dokter/addArticle";

class addArticle extends Component {
  render() {
    return (
      <div>
        <Navigasi />
        <Article />
      </div>
    );
  }
}

export default addArticle;
