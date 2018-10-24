import React from 'react';
import { Route } from 'react-router';
import Home from './pages/home';
import About from './pages/about';
import App from './app';

export const Router = () =>
    <App>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route path="/about" render={(props) => <About {...props} />} />
    </App>;
