// npm libs
import {
  connect,
} from 'react-redux';
import withRouter from 'react-router-dom/withRouter';

// components
import Home from 'components/Home';

// redux
import {
  createUserRequest as createUserRequestAction,
} from 'actions/user';
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
    createUserRequest: (user, formConfig) => dispatch(createUserRequestAction(user, formConfig)),
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
