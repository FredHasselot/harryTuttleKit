import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  state = {
    activeKey: 1
  }
// =============================================================================
//                                  FUNCTIONS
// =============================================================================
  goTo(key) {
    const navId = document.querySelector('#navId');
    if (navId) {
      this.setState({ activeKey: key }, () => {
        if (key === 1) { this.props.history.push('/'); }
        if (key === 2) { this.props.history.push('/about'); }
      });
    }
  }
// =============================================================================
//                                  RENDER
// =============================================================================
  render() {
    const { activeKey } = this.state;

    return (
      <Nav bsStyle="pills" activeKey={activeKey} onSelect={this.goTo.bind(this)} id="navId">
         <NavItem eventKey={1}>
           Home
         </NavItem>
         <NavItem eventKey={2}>
           About
         </NavItem>
       </Nav>
    );
  }
}
// =============================================================================
//                                  EXPORT
// =============================================================================
export default withRouter(Navigation);
