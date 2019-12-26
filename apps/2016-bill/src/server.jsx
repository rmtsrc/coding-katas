'use strict';

import express from 'express';
import path from 'path';
import compression from 'compression';

const app = express();

import React from 'react';
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server';
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router';
import routes from './modules/routes';
import fs from 'fs';

app.use(compression());

// serve our static assets
let publicPath = path.join(process.cwd(), 'public');
app.use(express.static(publicPath));

// send all requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message);
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>);
      res.send(renderPage(appHtml));
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found');
    }
  });
});

function renderPage(appHtml) {
  return fs.readFileSync(`${publicPath}/index.html`)
    .toString()
    .replace('<!-- @react app -->', appHtml);
}

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Production Express server running at localhost: ${PORT}`);
});
