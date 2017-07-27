// npm libs
import React from 'react';
import PropTypes from 'prop-types';

// components
import Form from 'components/Form';

// form
import {
  formDefaultValues,
  formConfig,
} from './formConfig';

// styles
import StyleSheet from './stylesheet';

class LogIn extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.actions.formSetFormValues(formDefaultValues);
  }

  onChange(name, value) {
    this.props.actions.formSetInputValueAndValidate(name, value, formConfig);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.logInRequest(this.props.formState.values, formConfig);
  }

  render() {
    return (
      <div className={StyleSheet.container}>
        <Form
          buttonText="ENTER"
          config={formConfig}
          errors={this.props.formState.errors}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          outputMessage={this.props.appState.outputMessage}
          status={this.props.appState.status}
          values={this.props.formState.values}
        />
      </div>
    );
  }

}

LogIn.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired,
  formState: PropTypes.object.isRequired,
};

export default LogIn;
