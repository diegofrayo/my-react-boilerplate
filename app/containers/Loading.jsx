// npm libs
import React from 'react';
import withRouter from 'react-router-dom/withRouter';

// components
import Loader from 'components/Loader';

const Loading = () => (
  <div>
    <Loader status="LOADING" />
  </div>
);

Loading.propTypes = {};

export default withRouter(Loading);
