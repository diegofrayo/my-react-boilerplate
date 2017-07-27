// npm libs
import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import {
  ConnectedRouter,
} from 'react-router-redux';
import {
  AppContainer,
} from 'react-hot-loader';
import {
  Provider,
} from 'react-redux';

// containers
import LogIn from 'containers/LogIn';
import NotFound from 'containers/NotFound';
import Home from 'containers/Home';
import authHelper from 'containers/Auth';

// components
import Header from 'components/Header';

// constants
import {
  routes,
} from 'constants/index';

// redux
import {
  history,
  store,
} from 'store';
import {
  startOnAuthListener,
} from 'actions/auth';

// styles
const styles = {
  container: {
    backgroundColor: '#EEEEEE',
    height: '100%',
  },
  contentWrapper: {
    height: '100%',
    margin: '0 auto',
    maxWidth: 1000,
    paddingTop: 85,
  },
  contentInner: {
    height: '100%',
    overflow: 'auto',
    padding: 10,
  },
};

const renderApp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div style={styles.container}>
        <Header />
        <div style={styles.contentWrapper}>
          <div style={styles.contentInner}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route exact path={routes.HOME} component={authHelper(Home, true, 'Home')} />
                <Route exact path={routes.LOG_IN} component={authHelper(LogIn, false, 'LogIn')} />
                <Route component={NotFound} />
              </Switch>
            </ConnectedRouter>
          </div>
        </div>
      </div>
    </Provider>
  </BrowserRouter>
);

const App = () => {

  // store.dispatch(startOnAuthListener());

  if (APP_SETTINGS.environment === 'development') {
    return (
      <AppContainer>
        {renderApp()}
      </AppContainer>
    );
  }

  return renderApp();
};

App.propTypes = {};

export default App;
