// npm libs
import React from 'react';
import {
	browserHistory,
	IndexRoute,
	Route,
	Router
} from 'react-router';

// react components
import About from 'containers/About/About.jsx';
import AppView from 'containers/App/App.jsx';
import Home from 'containers/Home/Home.jsx';

// js utils
import routerUrls from 'utils/routerUrls';

export default function createRoutes() {
	return (
		<Router history={browserHistory}>
			<Route path={routerUrls.HOME} component={AppView}>
				<IndexRoute component={Home} />
				<Route path={routerUrls.ABOUT} component={About} />
				<Route path={routerUrls.HOME} component={Home} />
			</Route>
		</Router>
	);
}