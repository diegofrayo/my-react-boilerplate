// npm libs
import {
  combineReducers,
} from 'redux';
import {
  routerReducer,
} from 'react-router-redux';

// reducers
import appReducer from 'reducers/app';
import authReducer from 'reducers/auth';
import formReducer from 'reducers/form';
import myReducerReducer from 'reducers/myReducer';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  form: formReducer,
  myReducer: myReducerReducer,
  router: routerReducer,
});
