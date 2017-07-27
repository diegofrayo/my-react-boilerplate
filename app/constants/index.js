/*
 * App Routes
 */
export const routes = {
  createMyEntityEditRoute: id => `/myEntity/${id}/edit`,
  createMyEntityProfileEditRoute: id => `/myEntity-profile/${id}/edit`,
  createMyEntityAvailabilityRoute: id => `/myEntity/${id}/availability`,
  createMyEntityRateRoute: id => `/myEntity/${id}/rate`,
  createUserEditRoute: id => `/user/${id}/edit`,
  HOME: '/',
  MY_ENTITY_CREATE: '/myEntity/create',
  MY_ENTITY_EDIT: '/myEntity/:id/edit',
  MY_ENTITY_LIST: '/myEntity/list',
  MY_ENTITY_AVAILABILITY: '/myEntity/:id/availability',
  MY_ENTITY_RATE: '/myEntity/:id/rate',
  LOG_IN: '/login',
};


/*
 * API Url
 */
export const API_URL = APP_SETTINGS.api_url;


// -------------- Reducers --------------

/*
 * App
 */
export const APP_SET_LOADING_STATUS = 'APP_SET_LOADING_STATUS';
export const APP_SET_FAILURE_MESSAGE = 'APP_SET_FAILURE_MESSAGE';
export const APP_SET_SUCCESS_MESSAGE = 'APP_SET_SUCCESS_MESSAGE';
export const APP_RESET_OUTPUT_MESSAGE = 'APP_RESET_OUTPUT_MESSAGE';
export const APP_SHOW_DIALOG = 'APP_SHOW_DIALOG';
export const APP_HIDE_DIALOG = 'APP_HIDE_DIALOG';
export const APP_UPDATE_CURRENT_OBJECT = 'APP_UPDATE_CURRENT_OBJECT';


/*
 * Auth
 */
export const AUTH_LOG_IN_SUCCESS = 'AUTH_LOG_IN_SUCCESS';
export const AUTH_LOG_OUT_REQUEST = 'AUTH_LOG_OUT_REQUEST';
export const AUTH_LOG_OUT_SUCCESS = 'AUTH_LOG_OUT_SUCCESS';


/*
 * Form
 */
export const FORM_SET_INPUT_VALUE = 'FORM_SET_INPUT_VALUE';
export const FORM_SET_VALUES = 'FORM_SET_VALUES';
export const FORM_VALIDATE_ALL = 'FORM_VALIDATE';
export const FORM_VALIDATE_INPUT = 'FORM_VALIDATE_INPUT';


/*
 * Entity
 */
// export const USER_CREATE_FAILURE = 'USER_CREATE_FAILURE';
// export const USER_CREATE_REQUEST = 'USER_CREATE_REQUEST';
// export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';

// export const USER_GET_FAILURE = 'USER_GET_FAILURE';
// export const USER_GET_REQUEST = 'USER_GET_REQUEST';
export const USER_GET_SUCCESS = 'USER_GET_SUCCESS';

// export const USER_EDIT_FAILURE = 'USER_EDIT_FAILURE';
// export const USER_EDIT_REQUEST = 'USER_EDIT_REQUEST';
// export const USER_EDIT_SUCCESS = 'USER_EDIT_SUCCESS';

// export const USER_GET_BY_ID_FAILURE = 'USER_GET_BY_ID_FAILURE';
// export const USER_GET_BY_ID_REQUEST = 'USER_GET_BY_ID_REQUEST';
// export const USER_GET_BY_ID_SUCCESS = 'USER_GET_BY_ID_SUCCESS';

// export const USER_DELETE_FAILURE = 'USER_DELETE_FAILURE';
// export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST';
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS';
