/* eslint no-underscore-dangle: "off" */

// npm libs
import {
  applyMiddleware,
  createStore,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {
  routerMiddleware,
} from 'react-router-redux';

// redux
import apiMiddleware from 'middlewares/apiMiddleware';
import reducers from 'reducers';

// react router config
const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;

const createStoreWithMiddleware = applyMiddleware(apiMiddleware, thunk, logger, reduxRouterMiddleware)(createStore);

export const store = createStoreWithMiddleware(reducers, {}, reduxDevTool);
export {
  history,
};
