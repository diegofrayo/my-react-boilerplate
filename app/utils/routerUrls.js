const ROOT = APP_SETTINGS.environment === 'development' ? '' : '/project_name';

const routes = {
	HOME: ROOT === '' ? '/' : ROOT,
	ABOUT: `${ROOT}/about`,
};

export default routes;