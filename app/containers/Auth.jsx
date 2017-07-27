// npm libs
import React from 'react';
import PropTypes from 'prop-types';
import {
  connect,
} from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
import withRouter from 'react-router-dom/withRouter';

// containers
import Loading from 'containers/Loading';

// redux
import {
  AUTH_LOG_OUT_REQUEST,
  routes,
} from 'constants/index';

const authHelper = (Component, isAuthRequired, componentName) => {

  // class AuthHOC extends React.Component {
  //   render() {
  //     if (this.props.authState.isLoggedIn === 'LOADING') {
  //       return <Loading />;
  //     } else if (this.props.authState.isLoggedIn === isAuthRequired) {
  //       return <Component />;
  //     } else if (isAuthRequired || this.props.authState.isLoggedIn === AUTH_LOG_OUT_REQUEST) {
  //       return <Redirect to={{ pathname: routes.LOG_IN }} />;
  //     }
  //     return <Redirect to={{ pathname: routes.HOME }} />;
  //   }
  // }

  const AuthHOC = ({
    authState,
  }) => {
    // console.log(componentName);
    if (authState.isLoggedIn === 'LOADING') {
      return <Loading />;
    } else if (authState.isLoggedIn === isAuthRequired) {
      return <Component />;
    } else if (isAuthRequired || authState.isLoggedIn === AUTH_LOG_OUT_REQUEST) {
      return <Redirect to={{ pathname: routes.LOG_IN }} />;
    }
    return <Redirect to={{ pathname: routes.HOME }} />;
  };

  AuthHOC.propTypes = {
    authState: PropTypes.object.isRequired,
  };

  const mapStateToProps = state => ({
    authState: state.auth,
  });

  return withRouter(connect(mapStateToProps, null)(AuthHOC));
};

export default authHelper;
