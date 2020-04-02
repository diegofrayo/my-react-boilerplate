import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import ErrorBoundary from 'hocs/ErrorBoundary';
import { Router } from 'routing';

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </BrowserRouter>
    </Wrapper>
  );
};

const Wrapper = APP_SETTINGS.environment === 'development' ? AppContainer : Fragment;

export default App;
