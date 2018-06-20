// npm libs
import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import history from 'history';

// pages
import About from 'pages/About';
import Home from 'pages/Home';

const ROOT = APP_SETTINGS.environment === 'development' ? '' : '/name-project';
const routes = {
  HOME: ROOT === '' ? '/' : ROOT,
  ABOUT: `${ROOT}/about`,
};

const Router = () => (
  <Switch>
    <Route exact path={routes.HOME} component={Home} />
    <Route exact path={routes.ABOUT} component={About} />
  </Switch>
);

const goTo = route => {
  history.push(route);
};

export { Router, routes, goTo };
