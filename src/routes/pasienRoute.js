import React from "react";
import { Redirect, Route } from "react-router-dom";

const pasienRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("role") == 2 &&
        localStorage.getItem("token") != null ? (
          <Component {...props} />
        ) : localStorage.getItem("token") != null ? (
          <Redirect to="/dokter" />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default pasienRoute;
