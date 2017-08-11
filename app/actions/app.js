// redux
import {
  APP_UPDATE_STATUS,
  APP_SET_FAILURE_MESSAGE,
  APP_SET_SUCCESS_MESSAGE,
  APP_RESET_OUTPUT_MESSAGE,
  APP_UPDATE_CURRENT_OBJECT,
  APP_HIDE_DIALOG,
  APP_SHOW_DIALOG,
} from 'constants/index';

export function updateAppStatus(status) {
  return {
    type: APP_UPDATE_STATUS,
    status,
  };
}

export function setFailureMessage(message, uiType) {
  return {
    type: APP_SET_FAILURE_MESSAGE,
    errorMessage: message,
    uiType,
  };
}

export function setSuccessMessage(message, uiType) {
  return {
    type: APP_SET_SUCCESS_MESSAGE,
    successMessage: message,
    uiType,
  };
}

export function resetOutputMessage() {
  return {
    type: APP_RESET_OUTPUT_MESSAGE,
  };
}

export function updateCurrentObject(value) {
  return {
    type: APP_UPDATE_CURRENT_OBJECT,
    payload: value,
  };
}

export function showDialog() {
  return {
    type: APP_SHOW_DIALOG,
  };
}

export function hideDialog() {
  return {
    type: APP_HIDE_DIALOG,
  };
}
