import 'styles';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'pages';
import { createStyles } from '@diegofrayo/styles';

const styles = createStyles(() => ({
  'background-color': 'white',
  display: 'flex',
  flex: 1,
  height: '100vh',
}));

const target = document.createElement('main');
target.setAttribute(
  'style',
  Object.keys(styles)
    .map(key => `${key}:${styles[key]}`)
    .join(';'),
);

document.body.appendChild(target);
ReactDOM.render(<Root />, target);

if (module.hot) {
  module.hot.accept('./pages/index.jsx', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./pages/index.jsx').default;
    ReactDOM.render(<NextApp />, target);
  });
}
