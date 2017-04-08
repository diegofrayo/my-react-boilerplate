// npm libs
import {
	combineReducers,
	createStore
} from 'redux';

// redux
import myReducer from 'reducers/myReducer';

const initialState = {
	myReducer: {}
};

const reduxApp = combineReducers({
	myReducer
});

const reduxDevTool = (window.__REDUX_DEVTOOLS_EXTENSION__ && APP_SETTINGS.environment === 'development') ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;

/* eslint no-underscore-dangle: "off" */
const store = createStore(reduxApp, initialState, reduxDevTool);

export default store;