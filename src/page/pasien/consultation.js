import React, { Component } from "react";
import Navigasi from "../../component/dropdown/nav";
import Postconsultation from "../../component/pasien/postConsultation";

import { API, setAuthToken } from "../../config/api";

class consultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = async () => {
    try {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const result = await API.get(
        `{/consultation/${localStorage.getItem("id")}}`
      );
      this.setState({ data: result.data.data });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Navigasi />
        {this.state.data.data != null ? (
          <div>
            <p>{this.state.data.fullname}</p>
            <p>{this.state.data.phone}</p>
            <p>{this.state.data.bordDate}</p>
            <p>{this.state.data.age}</p>
            <p>{this.state.data.height}</p>
            <p>{this.state.data.weight}</p>
            <p>{this.state.data.gender}</p>
            <p>{this.state.data.subject}</p>
            <p>{this.state.data.liveConsul}</p>
            <p>{this.state.data.description}</p>
          </div>
        ) : (
          <Postconsultation />
        )}
      </div>
    );
  }
}

export default consultation;
