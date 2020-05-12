import React from "react";
import { Redirect, Route } from "react-router-dom";

const DoctorRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("role") == 1 &&
        localStorage.getItem("token") != null ? (
          <Component {...props} />
        ) : localStorage.getItem("token") != null ? (
          <Redirect to="/pasien" />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default DoctorRoute;
