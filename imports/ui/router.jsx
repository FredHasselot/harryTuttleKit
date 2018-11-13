import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
// PAGES
import Home from './pages/home';
import About from './pages/about';
// APP
import App from './app';

export const Router = withRouter(({ location }) => {
  return (
    <App>
      <Switch location={location}>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/about" render={(props) => <About {...props} />} />
      </Switch>
    </App>
  );
});
