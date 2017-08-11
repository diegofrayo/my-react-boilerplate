// redux
import {
  FORM_SET_INPUT_VALUE,
  FORM_SET_VALUES,
  FORM_VALIDATE_ALL,
  FORM_VALIDATE_INPUT,
  FORM_SET_ERRORS,
} from 'constants/index';

export function formSetErrors(formErrors) {
  return {
    type: FORM_SET_ERRORS,
    formErrors,
  };
}

export function formValidateAll(formValues, formConfig) {
  return {
    type: FORM_VALIDATE_ALL,
    formConfig,
    formValues,
  };
}

export function formValidateInput(input, formConfig) {
  return {
    type: FORM_VALIDATE_INPUT,
    formConfig,
    input,
  };
}

export function formSetInputValue(name, value) {
  return {
    type: FORM_SET_INPUT_VALUE,
    name,
    value,
  };
}

export function formSetInputValueAndValidate(name, value, formConfig) {
  return (dispatch) => {
    dispatch(formSetInputValue(name, value));
    dispatch(formValidateInput({
      name,
      value,
    }, formConfig));
  };
}

export function formSetFormValues(formData) {
  return {
    type: FORM_SET_VALUES,
    formData,
  };
}
