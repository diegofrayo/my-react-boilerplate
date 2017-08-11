// npm libs
import React from 'react';
import withRouter from 'react-router-dom/withRouter';

// components
import VerticalCenterWrapper from 'components/VerticalCenterWrapper';

const styles = {
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
  <div className="u-pos-relative">
    <VerticalCenterWrapper>
      {() => (
        <div>
          <p style={styles.number}>404</p>
          <p style={styles.title}>Oops! Page not found</p>
          <p style={styles.description}>
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
      )}
    </VerticalCenterWrapper>
  </div>
);

NotFound.propTypes = {};

export default withRouter(NotFound);
