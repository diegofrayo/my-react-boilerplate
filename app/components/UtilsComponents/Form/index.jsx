// npm libs
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// material-ui
import withStyles from 'material-ui/styles/withStyles';
import Button from 'material-ui/Button';

// components
import FormInput from 'components/FormInput';
import LabelMessage from 'components/LabelMessage';

// styles
import StyleSheet from './stylesheet';

const Form = ({
  classes,
  buttonText,
  config,
  errors,
  onChange,
  onSubmit,
  outputMessage,
  status,
  values,
  noRenderWhenError,
}) => (
  <form className={classes.form} noValidate>
    { (!noRenderWhenError || !outputMessage.description) && config.map(input => (
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
    <LabelMessage {...outputMessage} valign={noRenderWhenError} />
    {
      (!noRenderWhenError || !outputMessage.description) &&
      <div className="u-clearfix">
        <Button
          className="u-pull-right"
          color="primary"
          disabled={status === 'LOADING' || errors.number > 0}
          onClick={onSubmit}
          raised
        >
          <img src="/images/loader.svg" alt="loading..." className={classnames({ 'u-hidden': status !== 'LOADING' })} />
          {buttonText}
        </Button>
      </div>
    }
  </form>
);

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  config: PropTypes.array.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  outputMessage: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
  noRenderWhenError: PropTypes.bool,
};

Form.defaultProps = {
  noRenderWhenError: false,
};

export default withStyles(StyleSheet)(Form);
