/* eslint no-underscore-dangle: "off" */

// npm libs
import {
  applyMiddleware,
  createStore,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import {
  routerMiddleware,
} from 'react-router-redux';

// redux
import apiMiddleware from 'middlewares/apiMiddleware';
import reducers from 'reducers';

// sagas
import rootSagas from 'sagas';

// react router config
const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;

const middlewares = [apiMiddleware, thunk, reduxRouterMiddleware, sagaMiddleware];

if (APP_SETTINGS.environment === 'development') {
  middlewares.push(logger);
}

sagaMiddleware.run(rootSagas);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(reducers, {}, reduxDevTool);
export {
  history,
};
