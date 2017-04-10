// npm libs
import React from 'react';

// js utils
import APP from 'utils/app';
import Utilities from 'utils/utilities/Utilities';

// react components
import Spinner from 'components/Spinner/Spinner.jsx';

// redux
import store from 'store/index';

class About extends React.Component {

	constructor() {
		super();
		this.state = store.getState().myReducer;
		this.unsubscribe = store.subscribe(this.handleSubscribeChanges.bind(this));
	}

	componentDidMount() {

	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	handleSubscribeChanges() {
	}

	render() {
		return (
			<div>
				About
			</div>
		);
	}

}

// import {
// 	connect
// } from 'react-redux';

// const mapStateToProps = state => ({
// 	playlistReducer: state.playlist
// });

// Playlist.propTypes = {
// 	playlistReducer: PropTypes.object.isRequired
// };

// export default connect(mapStateToProps)(Playlist);

export default About;