import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'emotion-theming';

import ErrorBoundary from 'hocs/ErrorBoundary';
import { Router } from 'routing';
import theme from 'styles';

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <Router />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </Wrapper>
  );
};

const Wrapper = APP_SETTINGS.environment === 'development' ? AppContainer : Fragment;

export default App;
