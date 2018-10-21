import React from 'react';
import { Route } from 'react-router';
import Home from './pages/home';
import About from './pages/about';
import App from './App';
//

export const Router = () =>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </App>;
