// npm libs
import React from 'react';
import ReactDOM from 'react-dom';

// containers
import App from 'containers/App';

// styles
// import 'styles/app.css';
// import 'styles/base.less';

const target = document.getElementById('app');

ReactDOM.render(<App />, target);

if (module.hot) {
  module.hot.accept('./containers/App.jsx', () => {
    const NextApp = require('./containers/App.jsx').default;
    ReactDOM.render(<NextApp />, target);
  });
}

