import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../../contexts/auth";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <AuthContext.Consumer>
      {auth => (
        <Route
          {...rest}
          render={() =>
            auth.auth.hasOwnProperty("token") ? (
              <Component {...rest} />
            ) : (
              <Redirect
                to={{ pathname: "/signin/", state: { from: rest.location } }}
              />
            )
          }
        />
      )}
    </AuthContext.Consumer>
  );
};

export default PrivateRoute;
