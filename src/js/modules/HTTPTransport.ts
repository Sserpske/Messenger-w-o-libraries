import queryStringify from "../utils/queryStringify.js";

const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

export default class HTTPTransport {
  get = (url: string, options = {}) => {
    // @ts-ignore
    const { data = {} } = options;
    url = url + queryStringify(data);

    return this.request(url, {...options, method: METHODS.GET});
  };

  // @ts-ignore
  put(url: string, options? = {}) {
    return this.request(url, { ...options, method: METHODS.PUT });
  }

  // @ts-ignore
  post(url: string, options? = {}) {
    return this.request(url, { ...options, method: METHODS.POST });
  }

  // @ts-ignore
  delete(url: string, options? = {}) {
    return this.request(url, { ...options, method: METHODS.DELETE });
  }

  // @ts-ignore
  request = (url: string | any, options, timeout: number = 5000) => {
    const { method, data, headers = {} } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (!url || typeof url !== 'string') {
        return Promise.reject();
      }

      xhr.open(method, url);

      xhr.onload = function() {
        if (this.status === 200) {
          resolve(xhr);
        } else {
          reject(xhr);
        }
      };

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.withCredentials = true;
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
