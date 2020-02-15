import React from "react";
import ReactDOM from "react-dom";
import { onPageLoad } from "meteor/server-render";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../imports/ui/router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

onPageLoad(() => {
  ReactDOM.hydrate(<App />, document.getElementById("app"));
});
