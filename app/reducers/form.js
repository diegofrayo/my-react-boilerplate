// npm libs
import update from 'immutability-helper';

// redux
import {
  FORM_SET_INPUT_VALUE,
  FORM_SET_VALUES,
  FORM_VALIDATE_ALL,
  FORM_VALIDATE_INPUT,
  FORM_SET_ERRORS,
} from 'constants/index';

// utils
import {
  validateForm,
  validateInput,
  normalizeFormValues,
} from 'utils/forms';

const initialState = {
  values: {},
  errors: {
    values: {},
    number: 0,
  },
};

export default function formReducer(state = initialState, action = {}) {

  switch (action.type) {

    case '@@router/LOCATION_CHANGE':
      return initialState;

    case FORM_SET_INPUT_VALUE:
      return update(state, {
        values: {
          [action.name]: {
            $set: action.value,
          },
        },
      });

    case FORM_SET_VALUES:
      return update(state, {
        values: {
          $set: normalizeFormValues(action.formData || action.payload, action.formConfig) || {},
        },
      });

    case FORM_VALIDATE_ALL:
      return update(state, {
        errors: {
          $set: validateForm(action.formValues, action.formConfig),
        },
      });

    case FORM_VALIDATE_INPUT:
      return update(state, {
        errors: {
          $set: validateInput(state.errors, action.input, action.formConfig),
        },
      });

    case FORM_SET_ERRORS:
      return update(state, {
        errors: {
          $set: action.formErrors,
        },
      });

    default:
      return state;

  }

}
