// npm libs
import {
  connect,
} from 'react-redux';
import withRouter from 'react-router-dom/withRouter';

// components
import LogIn from 'components/LogIn';

// redux
import {
  logInRequest as logInRequestAction,
} from 'actions/auth';
import {
  formSetFormValues as formSetFormValuesAction,
  formSetInputValueAndValidate as formSetInputValueAndValidateAction,
} from 'actions/form';

const mapStateToProps = state => ({
  appState: state.app,
  formState: state.form,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    formSetFormValues: formData => dispatch(formSetFormValuesAction(formData)),
    formSetInputValueAndValidate: (name, value, formConfig) => dispatch(formSetInputValueAndValidateAction(name, value, formConfig)),
    logInRequest: (username, password) => dispatch(logInRequestAction(username, password)),
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
