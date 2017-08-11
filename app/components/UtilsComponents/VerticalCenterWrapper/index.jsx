// npm libs
import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import withStyles from 'material-ui/styles/withStyles';

// styles
import StyleSheet from './stylesheet';

const VerticalCenterWrapper = ({
  classes,
  children,
  style,
}) => (
  <div className={classes.container} style={style}>
    {React.Children.map(children(), child => child)}
  </div>
);

VerticalCenterWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  style: PropTypes.object,
};

VerticalCenterWrapper.defaultProps = {
  style: {},
};

export default withStyles(StyleSheet)(VerticalCenterWrapper);
