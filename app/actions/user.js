// redux
import {
  APP_SET_FAILURE_MESSAGE,
  APP_SET_LOADING_STATUS,
  APP_SET_SUCCESS_MESSAGE,
  APP_UPDATE_CURRENT_OBJECT,
  APP_HIDE_DIALOG,
  FORM_SET_VALUES,
  USER_GET_SUCCESS,
  USER_DELETE_SUCCESS,
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
import {
  UserAPI,
} from 'utils/api';

export function getUsersRequest() {
  return {
    types: {
      request: [APP_SET_LOADING_STATUS],
      success: [APP_SET_SUCCESS_MESSAGE, USER_GET_SUCCESS],
      failure: [APP_SET_FAILURE_MESSAGE],
    },
    callAPI: UserAPI.list,
  };
}

export function getUsersSuccess(users) {
  return {
    type: USER_GET_SUCCESS,
    payload: users,
  };
}

// export function getUsersFailure() {
//   return {
//     type: GET_USERS_FAILURE,
//   };
// }

export function createUserRequest(user, formConfig) {
  return (dispatch, getState) => {

    dispatch(formValidateAllAction(user, formConfig));

    if (getState().form.errors.number === 0) {

      dispatch(setLoadingStatusAction());

      UserAPI.create(user)
        .then(() => {
          dispatch(setSuccessMessageAction('The User has been created successfully.'));
          setTimeout(() => {
            dispatch(goToAction(routes.USER_LIST));
          }, 1000);
        }).catch((error) => {
          dispatch(setFailureMessageAction(error));
        });

    }

  };
}

// export function createUserSuccess() {
//   return {
//     type: CREATE_USER_SUCCESS,
//   };
// }

// export function createUserFailure() {
//   return {
//     type: CREATE_USER_FAILURE,
//   };
// }

export function getUserByIdRequest(id, formConfig) {
  return {
    types: {
      request: [APP_SET_LOADING_STATUS],
      success: ((actionsArray) => {
        if (formConfig) {
          actionsArray.push(FORM_SET_VALUES);
        }
        return actionsArray;
      })([APP_SET_SUCCESS_MESSAGE, APP_UPDATE_CURRENT_OBJECT]),
      failure: [APP_SET_FAILURE_MESSAGE],
    },
    callAPI: UserAPI.getById(id),
    payload: {
      formConfig,
    },
  };
}

// export function getUserByIdSuccess() {
//   return {
//     type: GET_USER_BY_ID_SUCCESS,
//   };
// }

// export function getUserByIdFailure() {
//   return {
//     type: GET_USER_BY_ID_FAILURE,
//   };
// }

export function editUserRequest(user, formConfig) {
  return (dispatch, getState) => {

    dispatch(formValidateAllAction(user, formConfig));

    if (getState().form.errors.number === 0) {

      dispatch(setLoadingStatusAction());

      UserAPI.edit(user)
        .then(() => {
          dispatch(setSuccessMessageAction('The User has been updated successfully.'));
          setTimeout(() => {
            dispatch(goToAction(routes.USER_LIST));
          }, 1000);
        }).catch((error) => {
          dispatch(setFailureMessageAction(error));
        });

    }

  };
}

// export function editUserSuccess() {
//   return {
//     type: EDIT_USER_SUCCESS,
//   };
// }

// export function editUserFailure() {
//   return {
//     type: EDIT_USER_FAILURE,
//   };
// }

export function deleteUserRequest(id) {
  return {
    types: {
      request: [APP_SET_LOADING_STATUS, APP_HIDE_DIALOG],
      success: [APP_SET_SUCCESS_MESSAGE, USER_DELETE_SUCCESS],
      failure: [APP_SET_FAILURE_MESSAGE],
    },
    callAPI: UserAPI.delete(id),
    payload: {
      uiType: 'TOAST',
      successMessage: 'The User has been deleted successfully.',
      userId: id,
    },
  };
}

export function deleteUserSuccess(payload) {
  return {
    type: USER_DELETE_SUCCESS,
    payload,
  };
}

// export function deleteUserFailure() {
//   return {
//     type: USER_DELETE_FAILURE,
//   };
// }
