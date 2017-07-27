// npm libs
import React from 'react';
import withRouter from 'react-router-dom/withRouter';

// components
import Loader from 'components/Loader';

const Loading = () => (
  <div>
    <div className="u-pos-relative">
      <div>
        <Loader status="LOADING" />
      </div>
    </div>
  </div>
);

Loading.propTypes = {};

export default withRouter(Loading);
