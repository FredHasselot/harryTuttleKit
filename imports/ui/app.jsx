import React from "react";
import Navigation from "./components/nav";
import { PropTypes } from "prop-types";

const Default = props => {
  return (
    <div className="app-container">
      <Navigation />
      {props.children}
    </div>
  );
};

Default.propTypes = {
  children: PropTypes.node
};

export default Default;
