// npm libs
import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import CircularProgress from 'material-ui/Progress/CircularProgress';

// components
import VerticalCenterWrapper from 'components/VerticalCenterWrapper';

const Loader = ({
  status,
}) => {
  if (status === 'LOADING') {
    return (
      <VerticalCenterWrapper
        style={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      >
        {() => <CircularProgress />}
      </VerticalCenterWrapper>
    );
  }
  return null;
};

Loader.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Loader;
