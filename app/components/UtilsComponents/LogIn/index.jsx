// npm libs
import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import withStyles from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

// components
import Form from 'components/Form';

// form
import {
  // formDefaultValues,
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
    // this.props.actions.formSetFormValues(formDefaultValues);
  }

  onChange(name, value) {
    this.props.actions.formSetInputValueAndValidate(name, value, formConfig);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.logInRequest(this.props.formState.values, formConfig);
  }

  render() {
    const classes = this.props.classes;
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12} className="u-pos-relative">
          <Typography type="display1" gutterBottom>
            Sign In
          </Typography>
          <Paper className={classes.paper}>
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
          </Paper>
        </Grid>
      </Grid>
    );
  }

}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  appState: PropTypes.object.isRequired,
  formState: PropTypes.object.isRequired,
};

export default withStyles(StyleSheet)(LogIn);
