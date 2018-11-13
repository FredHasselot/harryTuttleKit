// ABSOLUTE IMPORTS
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { renderToString } from 'react-dom/server';
import { onPageLoad } from 'meteor/server-render';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
// RELATIVE IMPORTS
import { Router } from '../imports/ui/router';
// *****************************************************************************
Meteor.startup(() => {
  onPageLoad((sink) => {
    const App = props => {
      return (
        <StaticRouter location={props.location.path} context={{}}>
          <Router />
        </StaticRouter>
      );
    };

    sink.renderIntoElementById('app', renderToString(<App location={sink.request.url} />));

    const helmet = Helmet.renderStatic();
    sink.appendToHead(helmet.link.toString());
    sink.appendToHead(helmet.meta.toString());
    sink.appendToHead(helmet.title.toString());
  });
});
// *****************************************************************************
