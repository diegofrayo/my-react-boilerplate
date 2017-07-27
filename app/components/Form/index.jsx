// npm libs
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import FormInput from 'components/FormInput';
import LabelMessage from 'components/LabelMessage';

const Form = ({
  buttonText,
  config,
  errors,
  onChange,
  onSubmit,
  outputMessage,
  status,
  values,
}) => (
  <form noValidate>
    { config.map(input => (
      <FormInput
        key={input.name}
        error={errors.values[input.name]}
        label={input.label}
        name={input.name}
        onChange={onChange}
        placeholder={input.placeholder}
        type={input.type}
        value={values[input.name]}
        onPressEnterKey={onSubmit}
      />
    )) }
    <LabelMessage
      description={outputMessage.description}
      type={outputMessage.type}
    />
    <div className="u-clearfix">
      <button
        className="u-pull-right"
        color="primary"
        disabled={status === 'LOADING' || errors.number > 0}
        onClick={onSubmit}
      >
        <img src="/images/loader.svg" alt="loading..." className={classnames({ 'u-hidden': status !== 'LOADING' })} />
        {buttonText}
      </button>
    </div>
  </form>
);

Form.propTypes = {
  buttonText: PropTypes.string.isRequired,
  config: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  outputMessage: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
};

export default Form;
