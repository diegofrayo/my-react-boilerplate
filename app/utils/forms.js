/* eslint no-useless-escape: "off" */

const isEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const isValid = (input, inputValue) => {

  if (inputValue === undefined || inputValue === null) {
    return false;
  }

  const inputValueType = typeof inputValue;

  switch (inputValueType) {

    case 'string':
      if ((!input.config.allowEmpty && !inputValue) || (input.type === 'email' && !isEmail(inputValue))) {
        return false;
      }
      return true;

    case 'number':
      if ((!input.config.allowZero && !inputValue) || inputValue < 0) {
        return false;
      }
      return true;

    default:
      return false;

  }
};

export function validateForm(formValues, formConfig) {

  const errors = {};
  let numberOfErrors = 0;

  formConfig.forEach((input) => {
    const isInputValid = isValid(input, formValues[input.name]);
    if (!isInputValid) {
      errors[input.name] = input.config.message;
      numberOfErrors += 1;
    }
  });

  return {
    number: numberOfErrors,
    values: errors,
  };
}

export function validateInput(errors, input, formConfig) {

  const newErrors = Object.assign({}, errors, {
    number: 0,
  });

  formConfig.forEach((formInput) => {
    if (formInput.name === input.name) {
      const isInputValid = isValid(formInput, input.value);
      if (!isInputValid) {
        newErrors.values[formInput.name] = formInput.config.message;
      } else {
        newErrors.values[formInput.name] = undefined;
      }
    }
  });

  Object.keys(newErrors.values).forEach((key) => {
    if (newErrors.values[key]) {
      newErrors.number += 1;
    }
  });

  return newErrors;
}

export function normalizeFormValues(formValues, formConfig) {

  if (!formConfig) {
    if (!formValues) {
      return undefined;
    }
    return formValues;
  }

  const newValues = Object.assign({}, formValues);

  formConfig.forEach((formInput) => {
    if (formInput.config.transformValue) {
      newValues[formInput.name] = formInput.config.transformValue(newValues[formInput.name]);
    }
  });

  return newValues;
}
