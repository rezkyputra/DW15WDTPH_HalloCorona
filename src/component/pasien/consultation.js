import React, { Component } from "react";
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
        <h1>Post Create</h1>
      </div>
    );
  }
}

export default consultation;
