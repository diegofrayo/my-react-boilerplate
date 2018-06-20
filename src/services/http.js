class HTTP {

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

    const url = `/prefix${route}`;
    const options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : {}
    );

    return fetch(url, options)
      .then(response => {

        let body;

        if (
          response &&
          response.headers &&
          response.headers._headers && // eslint-disable-line
          Array.isArray(response.headers._headers['content-type']) // eslint-disable-line
        ) {

          // eslint-disable-next-line
          const contentType = response.headers._headers['content-type'].join(';');

          if (contentType.indexOf('json') !== -1) {
            body = response.json();
          } else {
            body = response.text();
          }

        } else {
          body = Promise.resolve(response.statusText);
        }

        return body.then(content => {
          if (response.status >= 200 && response.status < 300 && response.ok) return content;
          throw content || response.statusText;
        });
      })
      .catch(Promise.reject.bind(Promise));
  }
}

export default HTTP;
