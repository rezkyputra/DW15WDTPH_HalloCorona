import React, { Component } from "react";
import Navigasi from "../../component/dropdown/navdokter";
import Profile from "../../component/profile";

class profile extends Component {
  render() {
    return (
      <div>
        <Navigasi />
        <Profile />
      </div>
    );
  }
}

export default profile;
