import React, { Component } from "react";
import Navigasi from "../../component/dropdown/navdokter";
import Tabel from "../../component/dokter/consultation";

class index extends Component {
  render() {
    return (
      <>
        <Navigasi />
        <Tabel />
      </>
    );
  }
}

export default index;
