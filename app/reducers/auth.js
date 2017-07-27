// npm libs
import update from 'immutability-helper';

// redux
import {
  AUTH_LOG_IN_SUCCESS,
  AUTH_LOG_OUT_SUCCESS,
  AUTH_LOG_OUT_REQUEST,
} from 'constants/index';

// utils
import AuthUtilities from 'utils/auth';

const initialState = {
  isLoggedIn: 'LOADING', // true, false, 'LOADING', 'AUTH_LOG_OUT_REQUEST'
  user: {
    auth: {},
    profile: AuthUtilities.getUserSession() || '',
  },
};

export default function authReducer(state = initialState, action = {}) {

  switch (action.type) {

    case AUTH_LOG_OUT_REQUEST:
      return update(state, {
        isLoggedIn: {
          $set: AUTH_LOG_OUT_REQUEST,
        },
      });

    case AUTH_LOG_IN_SUCCESS:
      return update(state, {
        user: {
          $set: action.user,
        },
        isLoggedIn: {
          $set: true,
        },
      });

    case AUTH_LOG_OUT_SUCCESS:
      return update(state, {
        user: {
          $set: {},
        },
        isLoggedIn: {
          $set: false,
        },
      });

    default:
      return state;

  }

}
