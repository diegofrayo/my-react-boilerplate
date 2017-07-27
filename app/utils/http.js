// constants
import {
  API_URL,
} from 'constants/index';

// utils
import {
  normalizeError,
} from 'utils/filters';

class HTTP {

  static headers() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': ``,
    };
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb) {

    const url = `${API_URL}${route}`;
    const options = Object.assign({
      method: verb,
    }, params ? {
      body: JSON.stringify(params),
    } : null);

    options.headers = HTTP.headers();

    return fetch(url, options)
      .then((response) => {
        const json = response.json();
        if (response.status >= 200 && response.status < 300) {
          return json;
        }
        return json.then(Promise.reject.bind(Promise));
      })
      .then(json => json)
      .catch(error => Promise.reject(normalizeError(error)));
  }

}

export default HTTP;
