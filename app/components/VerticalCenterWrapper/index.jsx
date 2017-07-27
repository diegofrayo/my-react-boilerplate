// npm libs
import React from 'react';
import PropTypes from 'prop-types';

// styles
import StyleSheet from './stylesheet';

const VerticalCenterWrapper = ({
  backgroundColor,
  children,
}) => (
  <div className={StyleSheet.container} style={{ backgroundColor }}>
    { React.Children.map(children(), child => child) }
  </div>
);

VerticalCenterWrapper.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.func.isRequired,
};

VerticalCenterWrapper.defaultProps = {
  backgroundColor: '',
};

export default VerticalCenterWrapper;
