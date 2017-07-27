// npm libs
import React from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';

// components
import VerticalCenterWrapper from 'components/VerticalCenterWrapper';

const StyleSheet = {
  number: {
    fontSize: 100,
  },
  title: {
    fontSize: 32,
  },
  description: {
    fontSize: 16,
    marginTop: 15,
  },
};

const NotFound = () => (
  <div>
    <div className="u-pos-relative">
      <div className={StyleSheet.paper}>
        <VerticalCenterWrapper>
          {() => (
            <div>
              <p className={StyleSheet.number}>404</p>
              <p className={StyleSheet.title}>Oops! Page not found</p>
              <p className={StyleSheet.description}>
                Sorry, the page you are looking for does not exist.
              </p>
            </div>
          )}
        </VerticalCenterWrapper>
      </div>
    </div>
  </div>
);

NotFound.propTypes = {};

export default withRouter(NotFound);
