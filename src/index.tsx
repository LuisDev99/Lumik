import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Speaker from "./pages/Speaker";
import Register from "./pages/Register";

import "./index.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={Speaker} />
      <Route path='/home' component={Speaker} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
