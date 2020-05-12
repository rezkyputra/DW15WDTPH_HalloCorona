import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Route
import DokterRoute from "./routes/Dokterroute";
import PasienRoute from "./routes/pasienRoute";

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
            <PasienRoute
              exact
              path="/pasien/consultation"
              component={pasienConsultation}
            />
            <PasienRoute
              exact
              path="/pasien/profile"
              component={pasienProfile}
            />
            <PasienRoute exact path="/pasien" component={Pasien} />

            {/* Dokter */}
            <DokterRoute exact path="/dokter/artikel" component={addarticle} />
            <DokterRoute
              exact
              path="/dokter/profile"
              component={dokterprofile}
            />
            <DokterRoute exact path="/dokter" component={Dokter} />

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
