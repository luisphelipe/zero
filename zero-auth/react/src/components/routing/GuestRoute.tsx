import React from "react";
import { Redirect, Route } from "react-router-dom";
import Modal from "react-modal";
import AuthContext from "../../contexts/auth";

Modal.setAppElement("#root");

const GuestRoute = ({ component: Component, ...rest }: any) => {
  return (
    <AuthContext.Consumer>
      {auth => (
        <Route
          {...rest}
          render={() =>
            !auth.auth.hasOwnProperty("token") ? (
              <Component {...rest} />
            ) : (
              <Redirect
                to={{ pathname: "/", state: { from: rest.location } }}
              />
            )
          }
        />
      )}
    </AuthContext.Consumer>
  );
};

export default GuestRoute;
