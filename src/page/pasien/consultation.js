import React, { Component } from "react";
import Navigasi from "../../component/dropdown/nav";
import Consultation from "../../component/pasien/consultation";

import { API } from "../../config/api";

class consultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = async () => {
    try {
      await API.get(`{/consultation/${localStorage.getItem("id")}}`);
      this.state.data();
    } catch (err) {
      console.log(err.message);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Navigasi />
        <h1>Post Create</h1>
      </div>
    );
  }
}

export default consultation;
