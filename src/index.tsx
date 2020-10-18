import React from 'react';
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Speaker from "./pages/Speaker";

import './index.css';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <Switch>
        <Route path='/' exact component={Speaker} />
      </Switch>
    </Router>,
  document.getElementById('root')
);