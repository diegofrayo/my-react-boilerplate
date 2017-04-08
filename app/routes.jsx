// npm libs
import React from 'react';
import {
	browserHistory,
	IndexRoute,
	Route,
	Router
} from 'react-router';

// react components
import AppView from 'containers/App/App.jsx';
import FavoritesView from 'containers/About/About.jsx';

// js utils
import routerUrls from 'utils/routerUrls';

export default function createRoutes() {
	return (
		<Router history={browserHistory}>
			<Route path={routerUrls.HOME} component={AppView}>
				<IndexRoute component={AppView} />
				<Route path={routerUrls.ABOUT} component={FavoritesView} />
			</Route>
		</Router>
	);
}