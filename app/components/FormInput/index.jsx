// npm libs
import React from 'react';
import PropTypes from 'prop-types';

// styles
const StyleSheet = {};

class FormInput extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onPressEnterKey = this.onPressEnterKey.bind(this);
  }

  onChange(event) {
    this.props.onChange(this.props.name, event.target.value);
  }

  onPressEnterKey(event) {
    if (this.props.onPressEnterKey && event.key === 'Enter') {
      this.props.onPressEnterKey(event);
    }
  }

  render() {

    const {
      error = '',
      label,
      name,
      style = {},
      type = 'text',
      value = '',
    } = this.props;

    return (
      <div item xs={12} className="u-pos-relative">
        <div
          className={StyleSheet.formControl}
          error={!(error === undefined || error === '')}
          style={style}
        >
          { label && <label htmlFor={name}>{label}</label> }
          <input
            id={name}
            name={name}
            onChange={this.onChange}
            type={type}
            value={value}
            onKeyPress={this.onPressEnterKey}
          />
          { error && <p>{error}</p> }
        </div>
      </div>
    );

  }

}

FormInput.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onPressEnterKey: PropTypes.func,
  // placeholder: PropTypes.string.isRequired,
  style: PropTypes.object,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

FormInput.defaultProps = {
  error: '',
  label: '',
  onPressEnterKey: () => {},
  style: {},
  value: '',
};

export default FormInput;
