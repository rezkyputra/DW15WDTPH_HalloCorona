import React, { Component } from "react";
import Navigasi from "../../component/dropdown/nav";
import Content from "../../component/content";
import Header from "../../component/header";

class index extends Component {
  render() {
    return (
      <>
        <Navigasi />
        <Header />
        <Content />
      </>
    );
  }
}

export default index;
