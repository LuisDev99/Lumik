import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    // Todo: Reset context if user does not exist
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...rest} {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
