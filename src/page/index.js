import React, { Component } from "react";
import Navigasi from "../component/navi";
import Content from "../component/content";
import Header from "../component/header";

class index extends Component {
  render() {
    return (
      <div>
        <Navigasi />
        <Header />
        <Content />
      </div>
    );
  }
}

export default index;
