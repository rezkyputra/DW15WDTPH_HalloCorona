import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//home
import Index from "./page/index";
import Detail from "./page/detail";

//Dokter
import Dokter from "./page/dokter/";
import dokterprofile from "./page/dokter/profile";
import addarticle from "./page/dokter/addArticle";

//Pasien
import pasienConsultation from "./page/pasien/consultation";
import Pasien from "./page/pasien/";
import pasienProfile from "./page/pasien/profile";

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Switch>
            {/* Pasien */}
            <Route
              exact
              path="/pasien/consultation"
              component={pasienConsultation}
            />
            <Route exact path="/pasien/profile" component={pasienProfile} />
            <Route exact path="/pasien" component={Pasien} />

            {/* Dokter */}
            <Route exact path="/dokter/artikel" component={addarticle} />
            <Route exact path="/dokter/profile" component={dokterprofile} />
            <Route exact path="/dokter" component={Dokter} />

            {/* Index */}
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/" component={Index} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
