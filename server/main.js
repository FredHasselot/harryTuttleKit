import React from 'react';
import { Meteor } from 'meteor/meteor';
import { renderToString } from 'react-dom/server';
import { onPageLoad } from 'meteor/server-render';
import { StaticRouter } from 'react-router';
import { Router } from '../imports/ui/router';

Meteor.startup(() => {
  const App = props => {
    return (
      <StaticRouter location={props.location.path} context={{}}>
        <Router />
      </StaticRouter>
    );
  };

  onPageLoad((sink) => {
    sink.renderIntoElementById('app', renderToString(<App location={sink.request.url} />));
  });
  //
});
