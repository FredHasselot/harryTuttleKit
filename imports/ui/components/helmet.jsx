import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

class HelmetComp extends Component {
  getTitle(pathname) {
    if (pathname === "/") {
      return "Home";
    }

    if (pathname === "/about") {
      return "About";
    }

    return "Home";
  }

  render() {
    const { title } = this.props;
    return (
      <Helmet>
        <link rel="icon" type="image/png" href="favicon.ico" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="The Great Harry Tuttle Kit" />

        <title>{this.getTitle(title)} - The Great Harry Tuttle Kit</title>
      </Helmet>
    );
  }
}

HelmetComp.propTypes = {
  title: PropTypes.string
};

export default HelmetComp;
