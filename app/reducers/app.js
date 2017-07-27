// npm libs
import update from 'immutability-helper';

// redux
import {
  APP_SET_FAILURE_MESSAGE,
  APP_SET_LOADING_STATUS,
  APP_SET_SUCCESS_MESSAGE,
  APP_RESET_OUTPUT_MESSAGE,
  APP_HIDE_DIALOG,
  APP_SHOW_DIALOG,
  APP_UPDATE_CURRENT_OBJECT,
} from 'constants/index';

// utils
import {
  normalizeError,
} from 'utils/filters';

const initialState = {
  currentObject: {},
  outputMessage: {
    type: '', // 'ERROR' || 'SUCCESS'
    description: '',
    uiType: 'LABEL', // 'LABEL' || 'TOAST'
  },
  showDialog: false,
  status: 'NORMAL', // NORMAL || LOADING
};

export default function appReducer(state = initialState, action = {}) {

  switch (action.type) {

    case '@@router/LOCATION_CHANGE':
      return initialState;

    case APP_SET_LOADING_STATUS:
      return update(state, {
        status: {
          $set: 'LOADING',
        },
        outputMessage: {
          $set: {
            type: '',
            description: '',
            uiType: 'LABEL',
          },
        },
      });

    case APP_SET_FAILURE_MESSAGE:
      return update(state, {
        status: {
          $set: 'NORMAL',
        },
        outputMessage: {
          $set: {
            type: 'ERROR',
            description: normalizeError(action.errorMessage),
            uiType: action.uiType || 'LABEL',
          },
        },
      });

    case APP_SET_SUCCESS_MESSAGE:
      return update(state, {
        status: {
          $set: 'NORMAL',
        },
        outputMessage: {
          $set: {
            type: 'SUCCESS',
            description: action.successMessage || '',
            uiType: action.uiType || 'LABEL',
          },
        },
      });

    case APP_RESET_OUTPUT_MESSAGE:
      return update(state, {
        outputMessage: {
          $set: {
            type: '',
            description: '',
            uiType: 'LABEL',
          },
        },
      });

    case APP_UPDATE_CURRENT_OBJECT:
      return update(state, {
        currentObject: {
          $set: action.payload,
        },
      });

    case APP_SHOW_DIALOG:
      return update(state, {
        showDialog: {
          $set: true,
        },
      });

    case APP_HIDE_DIALOG:
      return update(state, {
        showDialog: {
          $set: false,
        },
      });

    default:
      return state;

  }

}
