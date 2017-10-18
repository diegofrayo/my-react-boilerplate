// npm libs
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const FlexContainer = ({ children }) => (
  <View
    style={{
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
    }}
  >
    {children && children.length ? React.Children.map(children, child => child) : children}
  </View>
);

FlexContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

FlexContainer.defaultProps = {
  children: null,
};

export default FlexContainer;
