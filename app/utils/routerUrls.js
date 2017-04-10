const ROOT = APP_SETTINGS.environment === 'development' ? '' : '/player';

const routes = {
	HOME: ROOT === '' ? '/' : ROOT,
	ABOUT: `${ROOT}/about`,
};

export default routes;