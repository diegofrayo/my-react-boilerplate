import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from 'pages/About';
import Home from 'pages/Home';

const Routes = {
  HOME: '/',
  ABOUT: '/about',
};

const Router = () => {
  return (
    <Switch>
      <Route exact path={Routes.HOME} component={Home} />
      <Route exact path={Routes.ABOUT} component={About} />
    </Switch>
  );
};

const redirect = (route, history) => {
  history.push(route);
};

export { Router, Routes, redirect };
