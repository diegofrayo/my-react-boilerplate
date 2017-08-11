// npm libs
import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import FormLabel from 'material-ui/Form/FormLabel';
import Grid from 'material-ui/Grid';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import withStyles from 'material-ui/styles/withStyles';

// styles
import StyleSheet from './stylesheet';

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
      classes,
      error = '',
      label,
      name,
      style = {},
      type = 'text',
      value = '',
    } = this.props;

    return (
      <Grid item xs={12} className="u-pos-relative">
        <FormControl
          className={classes.formControl}
          error={!(error === undefined || error === '')}
          fullWidth
          style={style}
        >
          { (label && type !== 'date') && <InputLabel htmlFor={name}>{label}</InputLabel> }
          { (label && type === 'date') && <FormLabel htmlFor={name}>{label}</FormLabel> }
          <Input
            id={name}
            name={name}
            onChange={this.onChange}
            type={type}
            value={value}
            onKeyPress={this.onPressEnterKey}
            fullWidth
          />
          { error && <FormHelperText>{error}</FormHelperText> }
        </FormControl>
      </Grid>
    );

  }

}

FormInput.propTypes = {
  classes: PropTypes.object.isRequired,
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

export default withStyles(StyleSheet)(FormInput);
