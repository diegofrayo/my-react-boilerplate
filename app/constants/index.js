/*
 * App Routes
 */
export const routes = {
  createMyEntityUpdateRoute: id => `/my-entity/${id}/update`,
  createMyEntityAvailabilityRoute: id => `/my-entity/${id}/availability`,
  HOME: '/',
  MY_ENTITY_CREATE: '/my-entity/create',
  MY_ENTITY_UPDATE: '/my-entity/:id/update',
  MY_ENTITY_LIST: '/my-entity/list',
  MY_ENTITY_AVAILABILITY: '/my-entity/:id/availability',
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
// export const MY_ENTITY_CREATE_FAILURE = 'MY_ENTITY_CREATE_FAILURE';
// export const MY_ENTITY_CREATE_REQUEST = 'MY_ENTITY_CREATE_REQUEST';
// export const MY_ENTITY_CREATE_SUCCESS = 'MY_ENTITY_CREATE_SUCCESS';

// export const MY_ENTITY_GET_FAILURE = 'MY_ENTITY_GET_FAILURE';
// export const MY_ENTITY_GET_REQUEST = 'MY_ENTITY_GET_REQUEST';
export const MY_ENTITY_GET_SUCCESS = 'MY_ENTITY_GET_SUCCESS';

// export const MY_ENTITY_EDIT_FAILURE = 'MY_ENTITY_EDIT_FAILURE';
// export const MY_ENTITY_EDIT_REQUEST = 'MY_ENTITY_EDIT_REQUEST';
// export const MY_ENTITY_EDIT_SUCCESS = 'MY_ENTITY_EDIT_SUCCESS';

// export const MY_ENTITY_GET_BY_ID_FAILURE = 'MY_ENTITY_GET_BY_ID_FAILURE';
// export const MY_ENTITY_GET_BY_ID_REQUEST = 'MY_ENTITY_GET_BY_ID_REQUEST';
// export const MY_ENTITY_GET_BY_ID_SUCCESS = 'MY_ENTITY_GET_BY_ID_SUCCESS';

// export const MY_ENTITY_DELETE_FAILURE = 'MY_ENTITY_DELETE_FAILURE';
// export const MY_ENTITY_DELETE_REQUEST = 'MY_ENTITY_DELETE_REQUEST';
export const MY_ENTITY_DELETE_SUCCESS = 'MY_ENTITY_DELETE_SUCCESS';
