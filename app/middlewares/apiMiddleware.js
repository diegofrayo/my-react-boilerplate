/*
 * Jonatan Alava middleware
 */

export default function apiMiddleware({
  dispatch,
  getState,
}) {
  return next => ((action) => {

    const {
      types,
      callAPI,
      payload = {},
    } = action;

    if (!types) {
      return next(action);
    }

    const typesKeys = Object.keys(types);

    if (typesKeys.length !== 3) {
      throw new Error('Expected an object with three attrs.');
    }

    if (!types.request || !types.success || !types.failure) {
      throw new Error('Expected an object with three specific attrs.');
    }

    typesKeys.forEach((key) => {
      if (!Array.isArray(types[key]) || !types[key].every(type => typeof type === 'string')) {
        throw new Error(`Expected '${key}' an array of string types.`);
      }
    });

    if (typeof callAPI !== 'function') {
      throw new Error('Expected fetch to be a function.');
    }

    const {
      request,
      success,
      failure,
    } = types;

    request.forEach(type => dispatch({
      type,
    }));

    return callAPI()
      .then((response) => {
        success.forEach(type => dispatch(Object.assign({}, {
          type,
          payload: response,
        }, payload)));
      })
      .catch((error) => {
        failure.forEach(type => dispatch(Object.assign({}, {
          type,
          errorMessage: error,
        }, payload)));
      });

  });

}
