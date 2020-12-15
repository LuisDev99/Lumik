import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Speaker from "./pages/Speaker";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

import "./index.css";

const uri = process.env.REACT_APP_AUTH0_CALLBACK_URL ?? "";
const domain = process.env.REACT_APP_AUTH0_DOMAIN ?? "";
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID ?? "";

ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={uri}>
    <Router>
      <Switch>
        <ProtectedRoute path='/' exact component={Speaker} />
        <ProtectedRoute path='/home' component={Speaker} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);
