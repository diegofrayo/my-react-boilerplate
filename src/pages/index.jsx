import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import Header from 'components/layout/Header';

import ErrorBoundary from 'hocs/ErrorBoundary';
import { styled } from '@diegofrayo/styles';
import { Router } from 'routing';

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <ErrorBoundary>
          <MainContainer>
            <Header />
            <BodyContainer>
              <Router />
            </BodyContainer>
          </MainContainer>
        </ErrorBoundary>
      </BrowserRouter>
    </Wrapper>
  );
};

const Wrapper = APP_SETTINGS.environment === 'development' ? AppContainer : Fragment;

const MainContainer = styled('section')(() => ({
  backgroundColor: 'white',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  margin: '0 auto',
}));

const BodyContainer = styled('section')(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  flex: 1,
  overflow: 'auto',
  padding: theme.spacing.medium,
}));

export default App;
