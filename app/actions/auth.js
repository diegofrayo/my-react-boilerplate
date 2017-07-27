// redux
import {
  AUTH_LOG_IN_SUCCESS,
  AUTH_LOG_OUT_SUCCESS,
  AUTH_LOG_OUT_REQUEST,
  routes,
} from 'constants/index';
import {
  setLoadingStatus as setLoadingStatusAction,
  setFailureMessage as setFailureMessageAction,
  setSuccessMessage as setSuccessMessageAction,
} from 'actions/app';
import {
  formValidateAll as formValidateAllAction,
} from 'actions/form';
import {
  goTo as goToAction,
} from 'actions/router';

// utils
import AuthUtilities from 'utils/auth';
import {
  LogInAPI,
} from 'utils/api';
import {
  onAuthHandler as onAuthFirebaseHandler,
  logOut as firebaseLogOut,
} from 'utils/firebase';

const createUserStructure = (firebaseUser, backendUser) => ({
  auth: {
    accessToken: firebaseUser.stsTokenManager.accessToken,
    provider: 'password',
    uid: firebaseUser.uid,
  },
  profile: backendUser,
});

export function logInSuccess(user) {
  AuthUtilities.saveUserSession(user.profile);
  return {
    type: AUTH_LOG_IN_SUCCESS,
    user,
  };
}

const backendLogIn = (dispatch, firebaseUser) => {

  LogInAPI.backendLogIn(firebaseUser.uid)
    .then((backendUser) => {

      dispatch(setSuccessMessageAction('Log in successfully.'));
      dispatch(logInSuccess(createUserStructure(firebaseUser.toJSON(), backendUser)));

      setTimeout(() => {
        dispatch(goToAction(routes.HOME));
      }, 1000);

    }).catch((error) => {
      firebaseLogOut();
      dispatch(setFailureMessageAction(error));
    });

};

export function logOutRequest() {
  return (dispatch, getState) => {
    dispatch({
      type: AUTH_LOG_OUT_REQUEST,
    });
    firebaseLogOut();
  };
}

export function logOutSuccess() {
  AuthUtilities.clearUserSession();
  return {
    type: AUTH_LOG_OUT_SUCCESS,
  };
}

export function logInRequest(formValues, formConfig) {
  return (dispatch, getState) => {

    dispatch(setLoadingStatusAction());
    dispatch(formValidateAllAction(formValues, formConfig));

    if (getState().form.errors.number === 0) {
      LogInAPI.firebaseLogIn(formValues.email, formValues.password)
        .catch((error) => {
          dispatch(setFailureMessageAction(error));
        });
    }

  };
}

export function startOnAuthListener() {
  return (dispatch, getState) => {

    onAuthFirebaseHandler((firebaseUser) => {
      if (firebaseUser) {
        const backendUser = getState().auth.user.profile;
        if (backendUser) {
          dispatch(logInSuccess(createUserStructure(firebaseUser.toJSON(), backendUser)));
        } else {
          backendLogIn(dispatch, firebaseUser);
        }
      } else {
        dispatch(logOutSuccess());
        if (getState().auth.isLoggedIn === AUTH_LOG_OUT_REQUEST) {
          dispatch(goToAction(routes.LOG_IN));
        }
      }

    });

  };
}
