import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


import Helmet from './helmet';

class Navigation extends Component {
// =============================================================================
//                                  LIFE CYCLE
// =============================================================================
// SOON...
componentDidMount() {
  const pathname = this.props.history.location.pathname;
  this.activeDefault(pathname);

  this.props.history.listen((e) => {
    this.activeDefault(e.pathname);
  });
}
// =============================================================================
//                                  FUNCTIONS
// =============================================================================
  activeDefault(pathname) {
    this.removeAllActiveClasses();
    let itemRef = 'home';
    if (pathname === '/about') { itemRef = 'about'; }
    this.refs[itemRef].classList.add('active');
  }

  goTo(key) {
    if (key === window.location.pathname) { return false; }
    const nav = document.querySelector('nav');
    if (nav) { this.props.history.push(key); }
  }

  navTo(item, destination) {
    this.removeAllActiveClasses();
    this.refs[item].classList.add('active');
    this.goTo(destination);
  }
// -----------------------------------------------------------------------------
  removeAllActiveClasses() {
    const allActive = document.querySelectorAll('.custom-nav-item');
    allActive.forEach((a) => { a.classList.remove('active'); });
  }
// =============================================================================
//                                  RENDER
// =============================================================================
  render() {
    return (
      <header>
        {/************************* HELMET ***********************************/}
        <Helmet title={this.props.history.location.pathname} />
        {/*************************** NAV ************************************/}
        <nav className="text-center">
          <div
            className="custom-nav-item btn btn-default"
            ref="home"
            onClick={this.navTo.bind(this, 'home', '/')}
          >
            Home
          </div>
          <div
            className="custom-nav-item btn btn-default"
            ref="about"
            onClick={this.navTo.bind(this, 'about', '/about')}
          >
            About
          </div>
        </nav>
      </header>
    );
  }
}
// =============================================================================
//                                  EXPORT
// =============================================================================
export default withRouter(Navigation);
