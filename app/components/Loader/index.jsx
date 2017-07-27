// npm libs
import React from 'react';
import PropTypes from 'prop-types';

// components
import VerticalCenterWrapper from 'components/VerticalCenterWrapper';

const Loader = ({
  backgroundColor,
  status,
}) => {
  if (status === 'LOADING') {
    return (
      <VerticalCenterWrapper backgroundColor={backgroundColor}>
        {() => <img src="/assets/images/loader.svg" alt="loading..." />}
      </VerticalCenterWrapper>
    );
  }
  return null;
};

Loader.propTypes = {
  backgroundColor: PropTypes.string,
  status: PropTypes.string.isRequired,
};

Loader.defaultProps = {
  backgroundColor: '',
};

export default Loader;
