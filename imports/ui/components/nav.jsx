import React from "react";
import { withRouter, Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import Helmet from "./helmet";

const Navigation = props => {
  const path = props.history.location.pathname;
  const paths = {
    about: "/about",
    root: "/"
  };

  const isActive = p => {
    if (path === p) {
      return "active";
    }

    return;
  };

  return (
    <header>
      {/************************* HELMET ***********************************/}
      <Helmet title={props.history.location.pathname} />
      {/*************************** NAV ************************************/}
      <nav className="nav nav-pills nav-justified">
        <Link className={`nav-link ${isActive(paths.root)}`} to={paths.root}>
          Home
        </Link>
        <Link className={`nav-link ${isActive(paths.about)}`} to={paths.about}>
          About
        </Link>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  history: PropTypes.object
};

export default withRouter(Navigation);
