// npm libs
import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {

  render() {
    return (
      <div>Home</div>
    );
  }

}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired,
  formState: PropTypes.object.isRequired,
};

export default Home;
